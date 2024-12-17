import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function renderCategoriesItem(itemData) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}

export default function CategoriesScreen() {
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
