import React, { FC } from "react";
import { MovieInfo } from "../../service/api";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  Platform,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface BackdropProps {
  movies: Array<MovieInfo>;
  scrollX: Animated.Value;
}
const { width, height } = Dimensions.get("screen");
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;

const BACKDROP_HEIGHT = height * 0.6;

export const Backdrop: FC<BackdropProps> = ({ movies, scrollX }) => {
  return (
    <View style={{ width, height: BACKDROP_HEIGHT, position: "absolute" }}>
      <FlatList
        keyExtractor={(item) => item.key}
        data={movies}
        contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
        removeClippedSubviews={false}
        renderItem={({ item, index }) => {
          if (!item.backdrop) {
            return null;
          }

          const translateX = scrollX.interpolate({
            inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
            outputRange: [0, width],
          });

          return (
            <Animated.View
              removeClippedSubviews={false}
              style={{
                position: "absolute",
                height,
                width: translateX,
                overflow: "hidden",
              }}
            >
              <Image
                style={{
                  position: "absolute",
                  width,
                  height: BACKDROP_HEIGHT,
                }}
                source={{ uri: item.backdrop }}
              />
            </Animated.View>
          );
        }}
      />
      <LinearGradient
        style={{
          height: BACKDROP_HEIGHT,
          width,
          position: "absolute",
          bottom: 0,
        }}
        colors={["rgba(0, 0, 0, 0)", "white"]}
      />
    </View>
  );
};
