import React from "react";
import {
  Animated,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const ReactionPopup = ({ emoji, onDismiss }: any) => {
  const [scale] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(scale, {
      toValue: 1.2,
      duration: 200,
      useNativeDriver: true, // Improve performance for animations
    }).start();
  }, []);

  const handleDismiss = () => {
    onDismiss();
  };

  const animatedStyles = { transform: [{ scale }] };

  return (
    <Animated.View style={[styles.popupContainer, animatedStyles]}>
      <Text style={{ fontSize: 48 }}>{emoji}</Text>
      <TouchableOpacity onPress={handleDismiss} style={styles.closeButton}>
        <Text>X</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  popupContainer: {
    position: "absolute",
    top: 100,
    left: "50%",
    marginLeft: -50,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 20,
    borderRadius: 10,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default ReactionPopup;
