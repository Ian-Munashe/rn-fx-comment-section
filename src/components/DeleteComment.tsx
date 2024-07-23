import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { CSContext } from "../context";
import type { IColors } from "../types";

interface Props {
  colors: IColors;
  onDeleteComment: (commentId: string) => void;
}

export const DeleteComment: React.FC<Props> = ({ colors, ...props }) => {
  const context = React.useContext(CSContext);

  return (
    context?.comment && (
      <View style={[styles.container, { backgroundColor: colors.primary }]}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[styles.text, { color: colors.tint }]}
        >
          Delete comment - {context.comment.body}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.onDeleteComment(context.comment?.id!);
            context.setComment(null);
          }}
        >
          <Ionicons name="trash-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    overflow: "hidden",
  },
  button: { padding: 5 },
});
