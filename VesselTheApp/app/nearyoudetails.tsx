import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";
import InfoCarousel from "./components/infocarousel";
import PagerView from "react-native-pager-view";

const image = { uri: "https://legacy.reactjs.org/logo-og.png" };
const NearYouDetails = () => {
  return (
    <View>
      {/* Implement this later: <ImageBackground source={image} resizeMode="cover" style={styles.image} />*/}

      <ScrollView style={styles.container}>
        <InfoCarousel />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
    // alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    zIndex: -1,
  },
});

export default NearYouDetails;
