import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LottieView from "lottie-react-native";
// import { useCSStore } from "../stores/csStore";
// import { useAnimation } from "@/fly-object";
import {
  HeartFace,
  RedHeart,
  Fire,
  FoldedHands,
  ThumbsUp,
  PartyingFace,
  ZanyFace,
} from "../lottie";
import type { IColors } from "../types";

const reactions = [
  HeartFace,
  RedHeart,
  Fire,
  FoldedHands,
  ThumbsUp,
  PartyingFace,
  ZanyFace,
];

export default function ReactionToolBar({ colors }: { colors: IColors }) {
  const handleReactions = (reaction: any) => {
    const animation = (
      <LottieView
        source={reaction}
        autoPlay
        loop
        style={{
          width: 25,
          height: 25,
        }}
      />
    );
    // useAnimation().startAnimation(animation);
  };

  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundColor }]}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          activeOpacity={0.5}
          // onPress={() => useCSStore.setState({ focused: true })}
          style={styles.input}
        >
          <Text style={{ color: colors.caption }}>Write a comment here...</Text>
        </TouchableOpacity>
        <View style={styles.toolbar}>
          {reactions.map((reaction, idx: number) => (
            <TouchableOpacity
              key={idx}
              onPress={() => handleReactions(reaction)}
              style={styles.toolbarChild}
            >
              <LottieView
                source={reaction}
                autoPlay
                loop
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    paddingBottom: 5,
    paddingVertical: 2,
    zIndex: 3,
  },
  input: {
    width: Dimensions.get("window").width * 0.6,
    paddingHorizontal: 12,
    marginHorizontal: 12,
    borderRadius: 8,
    justifyContent: "center",
    backgroundColor: "#1e1f20",
  },
  toolbar: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
  },
  toolbarChild: {
    marginHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
  },
});
