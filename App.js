import { Button, StyleSheet, Text, Pressable } from "react-native";

import CategoriesScreen from "./Screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MealOverviewScreen from "./Screens/MealsOverViewScreen";
import MealDetailsScreen from "./Screens/MealDetailsScreen";

const Drawer = createDrawerNavigator();


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator
          screenOptions={{
            headerTintColor: "white",

            headerStyle: {
              backgroundColor: "orange",
            },
            contentStyle: {
              backgroundColor: "black",
            },
          }}
        >
          <Stack.Screen
            name="CategoryScreen"
            component={CategoriesScreen}
            options={{
              headerTitle: "All Category ",
            }}
          />
          <Stack.Screen
            name="MealsOverViewScreen"
            component={MealOverviewScreen}
          />
          <Stack.Screen name="mealDetails" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
