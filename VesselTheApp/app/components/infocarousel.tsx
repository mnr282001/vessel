import React from "react";
import {
  Dimensions,
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";

import dummyDataForCarousel from "./dummydataforcarousel";
import InfoCarouselItem from "./infocarouselitem";

const InfoCarousel = () => {
  return (
    <View>
      <FlatList
        data={dummyDataForCarousel}
        renderItem={({ item }) => <InfoCarouselItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    justifyContent: "center",
    height: 350,
  },
  itemImg: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 3,
  },
  itemBody: {
    fontSize: 14, // body text font size
    textAlign: "center", // center the body text
    marginTop: 5, // margin from the top
  },
});

export default InfoCarousel;
