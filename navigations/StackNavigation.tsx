import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StackParamList } from "../types/type";
import { Notification } from "../screens/index";
import BottomTabNavigation from "./BottomTabNavigation";
import { Fontisto } from "@expo/vector-icons";
import { SIZES } from "../constants/constants";

const Stack = createStackNavigator<StackParamList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomNavigation"
        component={BottomTabNavigation}
        options={({ navigation }) => ({
          title: "",
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

      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerBackTitleVisible: true,
          headerTitle: "",
          headerTintColor: "black",
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
