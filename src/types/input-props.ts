import type { IColors } from "./colors";

export interface IEmojiTextInput {
  colors: IColors;
  onSendComment: (data: any) => void;
}
