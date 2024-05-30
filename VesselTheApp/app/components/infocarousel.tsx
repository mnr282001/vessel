import React, { useState, useRef } from "react";
import {
  Dimensions,
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  Animated,
  ViewToken,
} from "react-native";

import dummyDataForCarousel from "./dummydataforcarousel";
import InfoCarouselItem from "./infocarouselitem";

const InfoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(
    (info: { viewableItems: Array<ViewToken> }) => {
      const firstViewableItem = info.viewableItems[0];
      setCurrentIndex(firstViewableItem?.index ?? 0);
    }
  ).current;

  return (
    <View>
      <View style={{ flex: 3 }}>
        <FlatList
          data={dummyDataForCarousel}
          renderItem={({ item }) => <InfoCarouselItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id.toString()}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          ref={slidesRef}
        />
      </View>
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
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
  },
});

export default InfoCarousel;
