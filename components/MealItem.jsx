import { View, Image, Text, StyleSheet, Pressable } from "react-native";

export default function MealItem({ title, imageUrl, complexity }) {
  return (
    <View style={styles.rootContainer}>
      <Pressable
        android_ripple={{ color: " black" }}
        style={({ pressed }) => pressed && styles.isPressed}
      >
        <Image source={{ uri: imageUrl }} style={styles.imgStyle} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title.toUpperCase()}</Text>
          <Text>complexity: {complexity.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    margin: 10,
    elevation: 6,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  imgStyle: {
    height: 300,
    borderRadius: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  textContainer: {
    padding: 16,
  },

  isPressed: {
    opacity: 0.5,
  },
});
