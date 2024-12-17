import { View, Text, Pressable } from "react-native";

export default function CategoryGridTile({ title, color }) {
  return (
    <Pressable>
      <View>
        <Text>{title}</Text>
      </View>
    </Pressable>
  );
}
