import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import type { IColors, IComment } from "../types";
import React from "react";
import { CSContext } from "../context";

interface ReplyComponentProps {
  theme: IColors;
  reply?: IComment | null;
}

const ReplyComponent: React.FC<ReplyComponentProps> = (props) => {
  const context = React.useContext(CSContext);

  return (
    props.reply && (
      <View style={[styles.replyContainer, { backgroundColor: "#181818" }]}>
        <Text style={{ color: props.theme.caption }}>
          Reply to @{props.reply.author.name}
        </Text>
        <TouchableOpacity
          onPress={() => context?.setReply(null)}
          style={{ padding: 4 }}
        >
          <Ionicons name="close" size={22} color={props.theme.tint} />
        </TouchableOpacity>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  replyContainer: {
    zIndex: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
});

export default ReplyComponent;
