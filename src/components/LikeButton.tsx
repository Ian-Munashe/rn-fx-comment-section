import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

import type { IColors } from "../types";

interface Props {
  liked: boolean;
  likes: number;
  colors: IColors;
  onCommentLike: () => void;
}

export default function LikeButton({
  liked,
  likes,
  colors,
  onCommentLike,
}: Props) {
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity onPress={onCommentLike}>
        <Ionicons
          name={liked ? "heart" : "heart-outline"}
          size={18}
          color={liked ? "#f5006b" : colors.tint}
        />
      </TouchableOpacity>
      <Text style={{ color: colors.caption, fontSize: 12, lineHeight: 16 }}>
        {likes > 0 ? likes : null}
      </Text>
    </View>
  );
}
