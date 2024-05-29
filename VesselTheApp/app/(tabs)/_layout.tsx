import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";
import { TabNavigationState, ParamListBase } from "@react-navigation/native";
import { withLayoutContext } from "expo-router";
const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);
const Layout = () => {
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarActiveTintColor: "#131620",
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
          textTransform: "capitalize",
        },
        tabBarIndicatorStyle: { backgroundColor: "#1C87ED", height: 3 },
      }}
    >
      <MaterialTopTabs.Screen name="index" options={{ title: "Near you" }} />
      <MaterialTopTabs.Screen
        name="reactnative"
        options={{ title: "React Native" }}
      />
      <MaterialTopTabs.Screen
        name="following"
        options={{ title: "Following" }}
      />
    </MaterialTopTabs>
  );
};

export default Layout;
