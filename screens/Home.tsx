import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { SearchField } from "../components/index";
import { SIZES, COLORS, CATEGORIES } from "../constants/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList, BottomTabParamList } from "../types/type";
import { TextInput } from "react-native-gesture-handler";

type Props = NativeStackScreenProps<StackParamList, "Search">;

const Home = ({ navigation, route }: Props) => {
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
      <View>
        <FlatList
          data={CATEGORIES}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={(item) => item.name}
          horizontal
        />
      </View>
    </View>
  );
};

export default Home;

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
    padding: 5,
    backgroundColor: COLORS.bottomHover,
    borderColor: COLORS.bottomHover,
    borderWidth: 0.5,
  },
});
