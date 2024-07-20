import type { IColors } from "./colors";
import type { IComment } from "./comment";

export interface ICommentSection {
  comments: IComment[];
  colors?: IColors;
  backgroundColor?: string;
  reactionToolBar?: boolean;
  onSendComment: (data: any) => void;
  onCommentLike: (id: string) => void;
}
