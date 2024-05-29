import { Stack } from "expo-router";
import { Image } from "react-native";
import { Ionicons, AntDesign, FontAwesome6 } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerLeft: () => <AntDesign name="user" size={24} color="black" />,
          headerRight: () => (
            <Ionicons name="settings-outline" size={24} color="black" />
          ),
          headerTitle: () => (
            <FontAwesome6 name="sailboat" size={24} color="black" />
          ),
        }}
      />
      <Stack.Screen
        name="details"
        options={{ headerTitle: "Details", headerBackTitle: "Back" }}
      />
    </Stack>
  );
};
export default Layout;
