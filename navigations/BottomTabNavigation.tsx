import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Search, Profile, BookMark } from "../screens/index";
import { Ionicons, Feather } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,
  },
};

const BottomTabNavigation = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarInactiveTintColor: COLORS.bottomHover,
        tabBarActiveTintColor: COLORS.red,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        // tabBarStyle: {
        //   position: "absolute",
        //   bottom: 0,
        //   left: 0,
        //   right: 0,
        //   height:80,
        // },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
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
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={"search-sharp"}
                size={SIZES.iconSize}
                color={focused ? COLORS.red : COLORS.bottomHover}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="BookMark"
        component={BookMark}
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
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
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
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
