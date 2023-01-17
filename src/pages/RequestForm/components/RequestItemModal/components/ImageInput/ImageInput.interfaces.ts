import { RequestItemImage } from "../../../../../../types/request-types";

export interface ImageInputProps {
  value: RequestItemImage | undefined;
  onChange: (value: RequestItemImage | null) => void;
  error?: string;
}
