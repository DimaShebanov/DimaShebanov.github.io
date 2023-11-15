import { Dropbox, DropboxAuth } from "dropbox";

import { first } from "lodash";

import { RequestItemImage } from "../types/request-types";

const dbxAuth = new DropboxAuth({
  clientId: process.env.DROPBOX_ID,
  refreshToken: process.env.DROPBOX_REFRESH_TOKEN,
  clientSecret: process.env.DROPBOX_SECRET,
});

const dbx = new Dropbox({ auth: dbxAuth });

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

export const deleteFile = (fileName: string) =>
  dbx.filesDeleteV2({ path: `/${fileName}` });
