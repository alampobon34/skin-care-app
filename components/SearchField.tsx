import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/constants";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList, BottomTabParamList } from "../types/type";

// type Props = NativeStackScreenProps<StackParamList, "Search">;

const SearchField = () => {
  // const { navigation } = props;
  const handleNav = () => {
    // navigation.navigate("Search");
  };
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity>
        <Feather name="search" size={SIZES.iconSize} />
      </TouchableOpacity> */}
      <View style={styles.searchInput}>
        <TextInput
          value=""
          onPressIn={() => handleNav}
          placeholder="What are you looking for?"
        />
      </View>
      <View style={styles.searchIcon}>
        <TouchableOpacity>
          {/* <Ionicons name="camera-outline" size={SIZES.iconSize} /> */}
          <Ionicons name="search-sharp" size={SIZES.iconSize} color={"#fff"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 5,
    borderColor: COLORS.bottomHover,
    borderWidth: 0.5,
  },
  searchIcon: {
    padding: 5,
    backgroundColor: COLORS.bottomHover,
    borderColor: COLORS.bottomHover,
    borderWidth: 0.5,
  },
});
