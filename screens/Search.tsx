import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SearchField } from "../components/index";
import { COLORS, SIZES } from "../constants/constants";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList, BottomTabParamList } from "../types/type";
import type { CompositeScreenProps } from "@react-navigation/native";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
// import type { NativeStackScreenProps } from "@react-navigation/stack";
import { Feather, Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

type Props = NativeStackScreenProps<StackParamList, "Search">;

const Search = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        {/* <TouchableOpacity>
        <Feather name="search" size={SIZES.iconSize} />
      </TouchableOpacity> */}
        <View style={styles.searchInput}>
          <TextInput
            value=""
            onPressIn={() => navigation.navigate("Search")}
            placeholder="What are you looking for?"
          />
        </View>
        <View style={styles.searchIcon}>
          <TouchableOpacity>
            {/* <Ionicons name="camera-outline" size={SIZES.iconSize} /> */}
            <Ionicons
              name="search-sharp"
              size={SIZES.iconSize}
              color={"#fff"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.paddingHorizontal,
  },

  searchContainer: {
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
    paddingLeft: 5,
  },
  searchIcon: {
    padding: 6,
    backgroundColor: COLORS.bottomHover,
    borderColor: COLORS.bottomHover,
    borderWidth: 0.5,
  },
});
