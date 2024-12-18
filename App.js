import { Button, StyleSheet, Text, Pressable } from "react-native";
import {Ionicons} from "@expo/vector-icons"

import CategoriesScreen from "./Screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MealOverviewScreen from "./Screens/MealsOverViewScreen";
import MealDetailsScreen from "./Screens/MealDetailsScreen";
import FavoritesScreen from "./Screens/FavoritesScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: "white",
        drawerActiveBackgroundColor: "brown",
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "blue",

        drawerStyle: {
          backgroundColor: "orange",
        },

        headerStyle: {
          backgroundColor: "orange",
        },
        sceneContainerStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Drawer.Screen
        name="Category"
        component={CategoriesScreen}
        options={{
          title: "All categories",
          drawerIcon: ({size, color})=> (
            <Ionicons  name="list" color={color} size={size}/>
          )
        }}
        
      />
      <Drawer.Screen name="FavoriteScreen" component={FavoritesScreen} options={
      {
        drawerIcon: ({size, color})=> (
          <Ionicons name="star" size={size} color={color}/>
        )
      }
      }/>
    </Drawer.Navigator>
  );
}

export default function App() {
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
            name="DrawerScreen"
            component={DrawerNavigator}
            options={{ headerShown: false }}
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
