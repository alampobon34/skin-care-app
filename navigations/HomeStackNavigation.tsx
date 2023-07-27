import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeStackParamList } from "../types/type";
import { DashboardScreen, NotificationScreen } from "../screens/index";
import { Fontisto } from "@expo/vector-icons";
import { SIZES } from "../constants/constants";
import { NativeViewGestureHandler } from "react-native-gesture-handler";
import { Image, TouchableOpacity, View } from "react-native";

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigation = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={DashboardScreen}
        options={({ navigation }) => ({
          title: "Home",
          headerTitleAlign: "center",
          headerRight: (props) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Notification")}
            >
              <Fontisto
                style={{ paddingRight: SIZES.paddingRight }}
                name="bell"
                size={SIZES.iconSize}
              />
            </TouchableOpacity>
          ),

          headerLeft: (props) => (
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{
                  width: 60,
                  height: 60,
                  paddingLeft: SIZES.paddingLeft,
                }}
                source={require("../assets/logo.png")}
              />
            </View>
          ),
        })}
      />

      <HomeStack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: "Notification",
          headerTintColor: "black",
          headerTitleAlign: "center",
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigation;
