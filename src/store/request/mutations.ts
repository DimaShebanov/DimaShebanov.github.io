import { MutationFunction } from "react-query";
import firebase from "firebase";

import { isNil } from "lodash";

import { RequestItemImage, RequestObject } from "../../types/request-types";
import { firestore, storageRef } from "../../firebase/localFirebase";
import { REQUESTS_COLLECTION } from "../../firebase/constants";
import { handleError } from "../../utils/handleError";
import { log } from "../../utils/log";
import { deleteFile, uploadFile } from "../../fileStorage/fileStorage";

const RETRIES_LIMIT = 10;

export const uploadImageMutation: MutationFunction<
  RequestItemImage,
  RequestItemImage
> = async (image) => {
  try {
    return await uploadFile(image);
  } catch (e) {
    handleError(e);
    try {
      const metadata = {
        contentType: "image/jpeg",
      };
      if (image.file !== undefined) {
        for (let i = 0; i < RETRIES_LIMIT; i++) {
          const name = image.file.name ?? image.name;
          const imageSnap = await storageRef
            .child(name)
            .put(image.file as File, metadata);

          log(
            `image.file.size: ${image.file.size}`,
            `imageSnap.bytesTransferred: ${imageSnap.bytesTransferred}`,
            `name: ${name}`,
            `metadata: ${metadata}`
          );

          if (
            imageSnap.state === "success" &&
            image.file.size === imageSnap.bytesTransferred
          ) {
            const url = await imageSnap.ref.getDownloadURL();

            return { url, name, uploaded: true };
          }
        }
      }
    } catch (e) {
      handleError(e);
      console.log("e", e);
      throw e;
    }
  }

  return Promise.reject();
};

export const deleteImageMutation: MutationFunction<
  void,
  RequestItemImage
> = async (image) => {
  try {
    if (!isNil(image)) {
      await Promise.allSettled([
        storageRef.child(image.name).delete(),
        deleteFile(image.name),
      ]);
    }
  } catch (e) {}
};

export const sendRequestMutation: MutationFunction<
  void,
  RequestObject
> = async (request) => {
  try {
    await firestore.collection(REQUESTS_COLLECTION).doc().set({
      brandName: request.brandName,
      dateCreated: firebase.firestore.Timestamp.now(),
      requestItems: request.requestItems,
    });
  } catch (e) {
    console.error(e);
    handleError(e);
    throw e;
  }
};
