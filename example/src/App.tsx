import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { FXCommentSection } from "rn-fx-comment-section";

export default function App() {
  return (
    <View style={[styles.container, { backgroundColor: "#181818" }]}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="light" />
        <SafeAreaView style={styles.container}>
          <FXCommentSection
          // footer={
          //   <ReactionToolBar
          //     colors={{
          //       backgroundColor: "#0f0f0f",
          //       tint: "#fff",
          //       primary: "#0071d9",
          //       caption: "#727272",
          //     }}
          //   />
          // }
          />
        </SafeAreaView>
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });
