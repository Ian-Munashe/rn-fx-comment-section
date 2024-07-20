import { Octicons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet,Image } from "react-native";


interface AvatarProps  {
  uri?: string | null;
  radius?: number;
}

const Avatar: React.FC<AvatarProps> = ({ uri, radius }) => {
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);

  return (
    <View style={[styles.container, { width: radius, height: radius }]}>
      {!uri || !isImageLoaded ? (
        <Octicons name="person" size={radius! / 2.5} color="gray" />
      ) : (
        <Image
          style={{ width: radius, height: radius, borderRadius: radius }}
          source={{ uri }}
          onLoad={() => setIsImageLoaded(true)}
          resizeMode="cover"
        />
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 1000,
    overflow: "hidden",
    backgroundColor: "rgba(50,50,50,0.5)",
  },
});

export default Avatar
