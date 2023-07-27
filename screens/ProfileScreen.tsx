import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants/constants";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { AuthStackParamList } from "../types/type";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";


type Props = NativeStackScreenProps<AuthStackParamList, "Profile">;


const ProfileScreen = ({navigation}: Props) => {
  const { height, width, scale, fontScale } = useWindowDimensions();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "blue",
        }}
      >
        <Image
          style={{
            height: height - height * 0.7,
            width: "100%",
            left: 0,
            right: 0,
            resizeMode: "cover",
          }}
          source={require("../assets/images/space.jpg")}
        />
      </View>

      <View>
        <View style={{ alignItems: "center", marginTop: -50 }}>
          <Image
            source={require("../assets/images/userDefault.png")}
            style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
          />
        </View>
      </View>
      <View>
        <Text style={styles.profileText}>Please login into you account.</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.profileBtn}>
          <Text style={{ color: "#fff" }}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.paddingHorizontal,
    flex: 1,
  },

  profileText: {
    fontFamily: "semibold",
    textAlign: "center",
    paddingVertical: 12,
  },

  profileBtn: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: COLORS.red,
    width: "30%",
    alignItems: "center",
  },
});
