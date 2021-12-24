import { RequestItemImage } from "../../../../../../recoil/interfaces";

export interface ImageInputProps {
  value: RequestItemImage | undefined;
  onChange: (value: RequestItemImage | null) => void;
}
