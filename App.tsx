import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigation from "./navigations/BottomTabNavigation";
import { Ionicons, Fontisto, MaterialIcons } from "@expo/vector-icons";
import { Notification } from "./screens/index";
import { COLORS, SIZES } from "./constants/constants";

// SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  // const navigation = useNavigation();

  return (
    <NavigationContainer>
      {/* <StatusBar style="auto" /> */}
      <Stack.Navigator>
        <Stack.Screen
          name="Bottom Navigation"
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
                  style={{ width: 60, height: 60, paddingLeft: SIZES.paddingLeft }}
                  source={require("./assets/logo.png")}
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
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
