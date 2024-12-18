import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

export default function IconButton({ onPress }) {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "white" }}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name="star" size={24} />;
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: { opacity: 0.5 },
});
