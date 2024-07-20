import moment from "moment";
import { Pressable, Text, View, StyleSheet } from "react-native";

import type { IColors } from "../../types";
import LikeButton from "../LikeButton";
import Avatar from "../Avatar";

const text = "Some comment reply";

interface Props {
  likes: number;
  liked: boolean;
  colors: IColors;
  onCommentLike: () => void;
}

export default function CommentReply({
  colors,
  liked,
  likes,
  onCommentLike,
}: Props) {
  return (
    <Pressable style={styles.container} onLongPress={() => {}}>
      <Avatar uri="https://i.pravatar.cc/422" radius={25} />
      <View style={{ flex: 1, marginLeft: 8 }}>
        <View style={styles.usernameContainer}>
          <Text style={[styles.username, { color: colors.tint }]}>
            Username
          </Text>
          <Text style={{ fontSize: 12, color: colors.caption }}>
            {moment(new Date()).fromNow(true)}
          </Text>
        </View>
        <Text style={{ color: colors.tint }}>{text}</Text>
      </View>
      <LikeButton
        colors={colors}
        liked={liked}
        likes={likes}
        onCommentLike={onCommentLike}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
    paddingVertical: 6,
  },
  usernameContainer: {
    marginBottom: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  username: {
    fontSize: 12,
    marginRight: 4,
  },
});
