import { Link } from "expo-router";
import { View, Text } from "react-native";
const Page = () => {
  return (
    <View>
      <Link href={"/details"}>Details</Link>
    </View>
  );
};
export default Page;
