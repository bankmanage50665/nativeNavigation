import { useLayoutEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

export default function MealOverviewScreen({ route, navigation }) {
  const catId = route.params.catId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId >= 0);
  });

  function renderMealItem(itemData) {
    return (
      <MealItem
        title={itemData.item.title}
        complexity={itemData.item.complexity}
        imageUrl={itemData.item.imageUrl}
      />
    );
  }

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((cat) => cat.id === catId).title;
    navigation.setOptions({
      title: catTitle,
    });
  }, [navigation, catId]);

  return (
    <View style={styles.outerContainer}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
});
