export interface SizeItemProps {
  index: number;
  // colorIndex: number;
  basePath: string;
  // onRemove: (colorIndex: number, index: number) => void;
  onRemove: (index: number) => void;
  getError: (name: string) => string | null;
}
