import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SearchStackParamList } from "../types/type";
import { SearchScreen } from "../screens/index";
import { Fontisto } from "@expo/vector-icons";
import { SIZES } from "../constants/constants";
import { NativeViewGestureHandler } from "react-native-gesture-handler";

const SearchStack = createStackNavigator<SearchStackParamList>();

const SearchStackNavigation = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: "Search",
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerShown:false
        }}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackNavigation;

const styles = StyleSheet.create({});
