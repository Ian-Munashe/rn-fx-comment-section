import { create } from "zustand";
import type { IComment } from "../types";

interface CommentSectionState {
  comment: string;
  focused: boolean;
  reply: IComment | null;
  selectedComment: IComment | null;
}

export const useCSStore = create<CommentSectionState>((_) => ({
  comment: "",
  reply: null,
  focused: false,
  selectedComment: null,
}));
