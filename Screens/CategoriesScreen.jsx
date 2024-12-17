import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen({ navigation }) {
  function renderCategoriesItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverViewScreen", { catId: itemData.item.id });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoriesItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </>
  );
}

const styles = StyleSheet.create({});
