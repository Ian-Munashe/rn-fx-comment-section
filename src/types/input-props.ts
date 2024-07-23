import type { IColors } from "./colors";

export interface ICommentInputProps {
  colors: IColors;
  onSendComment: (comment: string) => void;
}
