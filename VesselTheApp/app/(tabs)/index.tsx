import { Link } from "expo-router";
import { View, Button } from "react-native";
const Page = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Link href={"/details"} asChild>
        <Button title="Open Details Page" />
      </Link>

      <Link href={"/(tabs)/reactnative"} asChild>
        <Button title="Open React Native Page" />
      </Link>

      <Link
        href={{
          pathname: "/(tabs)/following",
          params: { refresh: "1" },
        }}
        asChild
      >
        <Button title="Open with params" />
      </Link>
    </View>
  );
};
export default Page;
