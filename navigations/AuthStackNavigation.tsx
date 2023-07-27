import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackParamList } from "../types/type";
import { LoginScreen, RegisterScreen, ProfileScreen } from "../screens/index";
import { Fontisto } from "@expo/vector-icons";
import { SIZES } from "../constants/constants";
import { NativeViewGestureHandler } from "react-native-gesture-handler";

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthStackNavigation = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: "Profile",
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerBackTitle: "",
        }}
      />

      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: "Login",
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerBackTitle: "",
        }}
      />
      <AuthStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: "Register",
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerBackTitle: "",
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigation;
