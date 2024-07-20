import { StyleSheet, View } from "react-native";
import { FXCommentSection } from "rn-fx-comment-section";

export default function App() {
  return (
    <View style={styles.container}>
      <FXCommentSection comments={[]} onSendComment={() => {}} onCommentLike={() => {}}  />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });
