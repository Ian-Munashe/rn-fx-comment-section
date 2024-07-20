import moment from "moment";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


import type { IColors, IComment } from "../../types";
import LikeButton from "../LikeButton";
import Utils from "../../utils";
import Avatar from "../Avatar";
import CommentReply from "./CommentReply";
import { useCSStore } from "../../stores/csStore";

interface Props {
  colors: IColors;
  comment: IComment;
  onCommentLike: (id: string) => void;
}

export default function CommentCard({ colors, comment, onCommentLike }: Props) {
  const replies: any = [...Array(0)];

  return (
    <View style={styles.container}>
      <Avatar uri={comment.author.avatar} radius={35} />
      <View style={{ flex: 1, marginLeft: 12 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1, marginRight: 6 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{ fontSize: 12, color: colors.tint, marginRight: 6 }}
              >
                {comment.author.name}
              </Text>
              <Text style={{ fontSize: 12, color: colors.caption }}>
                {moment(comment.date).fromNow(true)}
              </Text>
            </View>
            <Text style={{ color: colors.tint, marginTop: 4 }}>
              {comment.body}
            </Text>
            <View style={{ flexDirection: "row", marginTop: 4 }}>
              <TouchableOpacity
                onPress={async () => {
                  useCSStore.setState({ reply: comment, focused: true });
                }}
              >
                <Text style={{ fontSize: 12, color: colors.caption }}>
                  Reply
                </Text>
              </TouchableOpacity>
            </View>
            {comment.replies > 0 && (
              <View style={styles.repliesCountContainer}>
                <View
                  style={[
                    styles.repliesCountDivider,
                    {
                      backgroundColor: Utils.hexToRGBA(colors.caption, 0.35),
                    },
                  ]}
                />
                <TouchableOpacity onPress={() => {}}>
                  <Text style={{ fontSize: 12, color: colors.caption }}>
                    View {comment.replies} replies
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <LikeButton
            colors={colors}
            liked={comment.liked}
            likes={comment.likes}
            onCommentLike={() => onCommentLike(comment.id)}
          />
        </View>
        {replies.map((reply: any, idx: number) => (
          <CommentReply
            key={idx}
            colors={colors}
            liked={false}
            likes={0}
            onCommentLike={() => onCommentLike(comment.id)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  repliesCountContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  repliesCountDivider: {
    width: 30,
    height: 2,
    borderRadius: 1000,
    marginRight: 8,
  },
});
