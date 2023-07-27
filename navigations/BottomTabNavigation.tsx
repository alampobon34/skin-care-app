import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { SearchScreen, ProfileScreen, BookmarkScreen } from "../screens/index";
import { Ionicons, Feather, Fontisto } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BottomTabParamList } from "../types/type";
import { NativeViewGestureHandler } from "react-native-gesture-handler";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import HomeStackNavigation from "./HomeStackNavigation";
import SearchStackNavigation from "./SearchStackNavigation";
import AuthStackNavigation from "./AuthStackNavigation";
const Tab = createBottomTabNavigator<BottomTabParamList>();

// type Props = NativeStackScreenProps<StackParamList, "Notification">;

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarInactiveTintColor: COLORS.bottomHover,
        tabBarActiveTintColor: COLORS.red,
        tabBarHideOnKeyboard: true,
        headerShown: true,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigation}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={SIZES.iconSize}
                color={focused ? COLORS.red : COLORS.bottomHover}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchStackNavigation}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={"search-sharp"}
                size={SIZES.iconSize}
                color={focused ? COLORS.red : COLORS.bottomHover}
              />
            );
          },
          headerTitleAlign: "center",
          headerTitle: "Search",
        }}
      />
      <Tab.Screen
        name="BookmarkTab"
        component={BookmarkScreen}
        options={{
          tabBarLabel: "Bookmark",
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                name={"bookmark"}
                size={SIZES.iconSize}
                color={focused ? COLORS.red : COLORS.bottomHover}
              />
            );
          },
          headerTitleAlign: "center",
          headerTitle: "Bookmark",
          
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={AuthStackNavigation}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={"person-outline"}
                size={SIZES.iconSize}
                color={focused ? COLORS.red : COLORS.bottomHover}
              />
            );
          },
          headerTitleAlign: "center",
          headerShown: false,
          tabBarLabel: "Profile",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
