import { Dropbox } from "dropbox";

import { first } from "lodash";

import { RequestItemImage } from "../types/request-types";

const dbx = new Dropbox({ accessToken: process.env.DROPBOX_AUTH });

const formatImage = (
  { name }: RequestItemImage,
  url: string
): RequestItemImage => ({
  name,
  uploaded: true,
  url: `${url}&raw=1`,
});

export const uploadFile = async (
  image: RequestItemImage
): Promise<RequestItemImage> => {
  const imagePath = `/${image.name}`;
  await dbx.filesUpload({
    path: imagePath,
    contents: image.file,
  });

  try {
    const { result } = await dbx.sharingCreateSharedLinkWithSettings({
      path: imagePath,
    });

    return formatImage(image, result.url);
  } catch (e) {
    const { result } = await dbx.sharingListSharedLinks({ path: imagePath });
    const url = first(result.links)?.url as string;

    return formatImage(image, url);
  }
};

export const deleteFile = (fileName: string) => dbx.filesDeleteV2({ path: `/${fileName}` });
