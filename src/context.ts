import React from "react";
import type { IComment } from "./types";

export type CSState = {
  reply: IComment | null;
  comment: IComment | null;
  setReply: React.Dispatch<React.SetStateAction<IComment | null>>;
  setComment: React.Dispatch<React.SetStateAction<IComment | null>>;
};

export const CSContext = React.createContext<CSState | undefined>(undefined);
