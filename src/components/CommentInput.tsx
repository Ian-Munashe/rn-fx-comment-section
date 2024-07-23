import React from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import Avatar from "./Avatar";
import { CSContext } from "../context";
import ReplyComponent from "./ReplyComponent";
import type { ICommentInputProps } from "../types";

type Ref = TextInput;
const emojis: string[] = ["❤️", "🙏", "🔥", "👏", "😢", "😍", "😮", "😂"];

const CommentInput = React.forwardRef<Ref, ICommentInputProps>((props, ref) => {
  const context = React.useContext(CSContext);
  const [comment, setComment] = React.useState<string>("");

  const onSendComment = () => {
    setComment("");
    context?.setReply(null);
    props.onSendComment(comment);
  };

  const gifPicker = () => {
    console.log("gif picker");
  };

  return (
    <>
      <ReplyComponent reply={context?.reply} theme={props.colors} />
      <View
        style={{ backgroundColor: props.colors.backgroundColor, zIndex: 3 }}
      >
        <View style={{ flexDirection: "row" }}>
          {emojis.map((emoji: string, idx: number) => (
            <TouchableOpacity
              key={idx}
              onPress={() => setComment(comment + emoji)}
              style={styles.emojiContainer}
            >
              <Text style={{ fontSize: 24 }}>{emoji}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.inputContainer}>
          <Avatar uri="https:i.pravatar.cc/598" radius={30} />
          <TextInput
            ref={ref}
            value={comment}
            placeholder="Add a comment..."
            cursorColor={props.colors.primary}
            onBlur={() => context?.setReply(null)}
            placeholderTextColor={props.colors.caption}
            onChangeText={(value) => setComment(value.trim())}
            style={{ flex: 1, color: props.colors.tint, marginHorizontal: 8 }}
          />
          <TouchableOpacity
            onPress={comment != "" ? onSendComment : gifPicker}
            style={{ paddingVertical: 4 }}
          >
            {comment != "" ? (
              <Ionicons
                name="send-outline"
                size={20}
                color={props.colors.tint}
              />
            ) : (
              <MaterialIcons name="gif" size={30} color={props.colors.tint} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  emojiContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 6,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    paddingBottom: 4,
    paddingHorizontal: 12,
  },
});

export default CommentInput;
