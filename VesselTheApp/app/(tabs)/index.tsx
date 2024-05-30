import { Link } from "expo-router";
import { View, Button } from "react-native";
import NearYouDetails from "../nearyoudetails";
const Page = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <NearYouDetails />
    </View>
  );
};
export default Page;
