import React from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useCSStore } from "../stores/csStore";
import ReplyComponent from "./ReplyComponent";
import type { IEmojiTextInput } from "../types";
import Avatar from "./Avatar";

type Ref = TextInput;
const emojis: string[] = ["❤️", "🙏", "🔥", "👏", "😢", "😍", "😮", "😂"];

const EmojiTextInput = React.forwardRef<Ref, IEmojiTextInput>((props, ref) => {
  const reply = useCSStore((state) => state.reply);
  const comment = useCSStore((state) => state.comment);

  const onSendComment = () => {
    useCSStore.setState({ comment: "" });
    useCSStore.setState({ focused: false });
    props.onSendComment(comment);
  };

  const gifPicker = () => {
    console.log("gif picker");
  };

  return (
    <>
      {reply && <ReplyComponent reply={reply} props={props} />}
      <View
        style={{ backgroundColor: props.colors.backgroundColor, zIndex: 3 }}
      >
        <View style={{ flexDirection: "row" }}>
          {emojis.map((emoji: string, idx: number) => (
            <TouchableOpacity
              key={idx}
              onPress={() => useCSStore.setState({ comment: comment + emoji })}
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
            onBlur={() => {
              useCSStore.setState({ focused: false });
              useCSStore.setState({ reply: null });
            }}
            placeholder="Add a comment..."
            placeholderTextColor={props.colors.caption}
            cursorColor={props.colors.primary}
            onChangeText={(value) =>
              useCSStore.setState({ comment: value.trim() })
            }
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

export default EmojiTextInput;
