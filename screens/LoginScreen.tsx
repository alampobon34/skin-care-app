import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuthStackParamList } from "../types/type";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<AuthStackParamList, "Login">;

const LoginScreen = ({ navigation }: Props) => {
  return (
    <GestureHandlerRootView>
      <View>
        <Text>LoginScreen</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text>Register Page</Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
