import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import type { IColors } from "../types";

export default function DeleteComment({ colors }: { colors: IColors }) {
  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <Text style={[styles.text, { color: colors.tint }]}>Delete comment</Text>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Ionicons name="trash-outline" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}

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
  },
  button: { padding: 4 },
});
