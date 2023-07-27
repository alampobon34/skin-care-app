import { NavigatorScreenParams } from "@react-navigation/native";

export type BottomTabParamList = {
  HomeTab: undefined;
  SearchTab: undefined;
  BookmarkTab: undefined;
  ProfileTab: undefined;
  // Notification: undefined;
  // SeachField: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  Notification: undefined;
  // Search: undefined;
};

export type SearchStackParamList = {
  Search: undefined;
};

export type AuthStackParamList = {
  Profile: undefined;
  Login: undefined;
  Register: undefined;
};
