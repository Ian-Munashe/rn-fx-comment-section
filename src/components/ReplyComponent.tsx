import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import type { IComment, IEmojiTextInput } from "../types";
import { useCSStore } from "../stores/csStore";

interface Props {
  props: IEmojiTextInput;
  reply: IComment;
}

const ReplyComponent: React.FC<Props> = (props) => {
  return (
    <View style={[styles.replyContainer, { backgroundColor: "#181818" }]}>
      <Text style={{ color: props.props.colors.caption }}>
        Reply to @{props.reply.author.name}
      </Text>
      <TouchableOpacity
        onPress={() => useCSStore.setState({ reply: null })}
        style={{ padding: 4 }}
      >
        <Ionicons name="close" size={22} color={props.props.colors.tint} />
      </TouchableOpacity>
    </View>
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
