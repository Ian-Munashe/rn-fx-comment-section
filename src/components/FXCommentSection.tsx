import React from "react";
// import { FlyingObject } from "@/fly-object";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList } from "react-native-gesture-handler";
import { View, Text, StyleSheet, TextInput } from "react-native";

import type { ICommentSection } from "../types";
import { useCSStore } from "../stores/csStore";
import DeleteComment from "./DeleteComment";
import { CommentCard } from "./cards";
import Utils from "../utils";
import ReactionToolBar from "./ReactionToolBar";
import EmojiTextInput from "./EmojiTextInput";



const FXCommentSection:React.FC<ICommentSection> =({
  colors = {
    backgroundColor: "#0f0f0f",
    tint: "#fff",
    primary: "#0071d9",
    caption: "#727272",
  },
  comments,
  reactionToolBar = false,
  onSendComment,
  onCommentLike,
  ...rest
}: ICommentSection)=> {
  const textInputRef = React.useRef<TextInput>(null);
  const selectedComment = useCSStore((state) => state.selectedComment);
  const focused = useCSStore((state) => state.focused);

  React.useEffect(() => {
    focused ? textInputRef.current?.focus() : textInputRef.current?.blur();
  }, [focused]);

  return (
    <View style={{ flex: 1, backgroundColor: colors.backgroundColor }}>
      {selectedComment && <DeleteComment colors={colors} />}
      <View
        style={[
          comments.length == 0 && styles.noCommentsContainer,
          { flex: 1, position: "relative", overflow: "hidden" },
        ]}
      >
        {comments.length == 0 ? (
          <Text style={{ fontSize: 13, color: colors.caption }}>
            No comments
          </Text>
        ) : (
          <>
            <FlatList
              {...rest}
              keyboardShouldPersistTaps="handled"
              data={comments}
              renderItem={({ item }) => (
                <CommentCard
                  colors={colors}
                  comment={item}
                  onCommentLike={onCommentLike}
                />
              )}
            />
            <LinearGradient
              style={[styles.linearGradient, { zIndex: 4 }]}
              colors={[
                colors.backgroundColor,
                Utils.hexToRGBA(colors.backgroundColor, 0.7),
                "transparent",
              ]}
            />
            {/* <FlyingObject /> */}
          </>
        )}
      </View>
      {reactionToolBar && !focused ? (
        <ReactionToolBar colors={colors} />
      ) : (
        <EmojiTextInput
          ref={textInputRef}
          colors={colors}
          onSendComment={onSendComment}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
  noCommentsContainer: { justifyContent: "center", alignItems: "center" },
  linearGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 15,
    zIndex: 1,
  },
});

export default FXCommentSection