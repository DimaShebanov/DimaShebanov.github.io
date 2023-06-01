import { MutationFunction } from "react-query";
import firebase from "firebase";

import { RequestItemImage, RequestObject } from "../../types/request-types";
import { firestore, storageRef } from "../../firebase/localFirebase";
import { REQUESTS_COLLECTION } from "../../firebase/constants";
import { handleError } from "../../utils/handleError";

export const uploadImageMutation: MutationFunction<
  RequestItemImage,
  RequestItemImage
> = (image) =>
  storageRef
    .child(image.name)
    .put(image.file as File)
    .then((imgSnap) => imgSnap.ref.getDownloadURL())
    .then((url) => ({
      url,
      name: image.name,
    }));

export const deleteImageMutation: MutationFunction<
  void,
  RequestItemImage
> = async (image) => {
  await storageRef.child(image.name).delete();
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
  }
};
