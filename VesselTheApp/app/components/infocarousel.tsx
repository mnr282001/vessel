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
import Paginator from "./paginator";

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
    <View style={styles.container}>
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
      <View style={styles.paginatorContainer}>
        <Paginator items={dummyDataForCarousel} scrollX={scrollX} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 350,
  },
  paginatorContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default InfoCarousel;
