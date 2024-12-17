import { Text, View, StyleSheet } from "react-native";

export default function MealDetails({ duration, complexity, affordability }) {
  return (
    <View>
      <Text style={styles.content}>Duration : {duration}</Text>
      <Text style={styles.content}>complexity: {complexity.toUpperCase()}</Text>
      <Text style={styles.content}>
        Affordability: {affordability.toUpperCase()}
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    color: "white",
  },
});
