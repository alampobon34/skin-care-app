import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList, BottomTabParamList } from "../types/type";
import { SafeAreaView } from "react-native-safe-area-context";

// type Props = NativeStackScreenProps<StackParamList, "Notification">;

const Notification = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Article</Text>
      </View>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({});
