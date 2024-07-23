import React from "react";
import type { IComment } from "../types";
import type { TextInput } from "react-native";

export const useCommentSection = () => {
  const textInputRef = React.useRef<TextInput>(null);

  const [reply, setReply] = React.useState<IComment | null>(null);

  return {
    reply,
    textInputRef,
    setReply,
  };
};
