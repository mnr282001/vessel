import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import React from "react";

type CarouselItem = {
  id: number;
  imgUrl: string;
  title: string;
  body: string;
};

const InfoCarouselItem = ({ item }: { item: CarouselItem }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={{ uri: item.imgUrl }}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.body}>{item.body}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: { flex: 0.7, justifyContent: "center" },
  title: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 10,
    color: "#493d8a",
    textAlign: "center",
  },
  body: {
    fontWeight: "300",
    color: "#62656b",
    textAlign: "center",
    paddingHorizontal: 64,
  },
});

export default InfoCarouselItem;
