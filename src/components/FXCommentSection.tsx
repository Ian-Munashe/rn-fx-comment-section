import React from "react";
import { LinearGradient } from "expo-linear-gradient";
// import { FlatList } from "react-native-gesture-handler";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Keyboard,
  FlatList,
} from "react-native";

import Utils from "../utils";
import { CommentCard } from "./cards";
import { CSContext } from "../context";
import CommentInput from "./CommentInput";
import { useCommentSection } from "../hooks";
import { DeleteComment } from "./DeleteComment";
import type { IComment, ICommentSection } from "../types";

const data: IComment[] = [
  {
    likes: 5,
    liked: true,
    date: new Date(),
    replies: 1,
    id: "string1",
    author: {
      name: "Auther Name",
      avatar: "https://i.pravatar.cc/422",
      authorId: "autherID",
    },
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dicta explicabo saepe.",
    type: "text",
  },
  {
    likes: 0,
    liked: false,
    date: new Date(),
    replies: 0,
    id: "string2",
    author: {
      name: "Auther",
      avatar: "https://i.pravatar.cc/423",
      authorId: "autherID",
    },
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dicta explicabo saepe.",
    type: "text",
  },
];

const FXCommentSection: React.FC<ICommentSection> = ({
  colors = {
    backgroundColor: "#0f0f0f",
    tint: "#fff",
    primary: "#0071d9",
    caption: "#727272",
  },
  ...props
}: ICommentSection) => {
  const { reply, textInputRef, setReply } = useCommentSection();
  const [comments, setComments] = React.useState<IComment[]>(data);
  const [comment, setComment] = React.useState<IComment | null>(null);

  React.useEffect(() => {
    if (reply) textInputRef.current?.focus();
  }, [reply]);

  const handleSendComment = (value: string) => {
    const comment: IComment = {
      body: value,
      author: {
        name: "John Doe",
        avatar: null,
        authorId: new Date().toString(),
      },
      date: new Date(),
      id: new Date().toString(),
      liked: false,
      likes: 0,
      replies: 0,
      type: "text",
    };
    setComments([...comments, comment]);
  };

  const handleTouchOutside = () => {
    setComment(null);
    Keyboard.dismiss();
  };

  return (
    <Pressable
      onPress={handleTouchOutside}
      style={{ flex: 1, backgroundColor: colors.backgroundColor }}
    >
      <CSContext.Provider value={{ reply, comment, setReply, setComment }}>
        <DeleteComment
          colors={colors}
          onDeleteComment={(id: string) => console.log(id)}
        />
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
                keyboardShouldPersistTaps="handled"
                data={comments}
                renderItem={({ item }) => (
                  <CommentCard
                    colors={colors}
                    comment={item}
                    onCommentLike={() => {}}
                  />
                )}
              />
              {comment ? null : (
                <LinearGradient
                  style={[styles.linearGradient, { zIndex: 4 }]}
                  colors={[
                    colors.backgroundColor,
                    Utils.hexToRGBA(colors.backgroundColor, 0.7),
                    "transparent",
                  ]}
                />
              )}
            </>
          )}
        </View>
        {props.footer ?? (
          <CommentInput
            ref={textInputRef}
            colors={colors}
            onSendComment={handleSendComment}
          />
        )}
      </CSContext.Provider>
    </Pressable>
  );
};

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

export default FXCommentSection;
