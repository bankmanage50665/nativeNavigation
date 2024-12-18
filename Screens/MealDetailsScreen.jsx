import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MeallDetails";
import IconButton from "../components/IconButton";

export default function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const filteredMeal = MEALS.find((meal) => meal.id === mealId);

  function headerPressBtnHandler() {
    console.log("Pressed");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton name="Save" onPress={headerPressBtnHandler} />;
      },
    });
  }, [navigation, headerPressBtnHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: filteredMeal.imageUrl }} style={styles.imgStyle} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{filteredMeal.title} </Text>
        <MealDetails
          duration={filteredMeal.duration}
          complexity={filteredMeal.complexity}
          affordability={filteredMeal.affordability}
        />
        <Text style={[styles.title, styles.subTitle]}> INGREDIENTS </Text>
        {filteredMeal.ingredients.map((mealIng) => (
          <Text style={[styles.title, styles.ingStyle]}>{mealIng}</Text>
        ))}
        <Text style={[styles.title, styles.subTitle]}>STEPS </Text>

        {filteredMeal.steps.map((steps) => (
          <Text style={[styles.title, styles.steps]}>{steps}</Text>
        ))}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  title: {
    color: "white",
  },
  imgStyle: {
    height: 300,
    width: "100%",
  },
  textContainer: {
    padding: 12,
    margin: 10,
  },
  ingStyle: {
    backgroundColor: "orange",
    paddingVertical: 6,
    borderRadius: 10,
    marginVertical: 4,
    paddingHorizontal: 8,
  },
  steps: {
    backgroundColor: "brown",
    borderRadius: 8,
    margin: 4,
    padding: 8,
  },
  subTitle: {
    marginVertical: 6,
  },
});
