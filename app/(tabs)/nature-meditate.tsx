import {
  View,
  Text,
  FlatList,
  Pressable,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { MEDITATION_DATA } from "@/constants/MeditationData";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import { router } from "expo-router";

const NatureMeditate = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#161b2e", "#0a4d4a"]}>
        <View className="mb-6">
          <Text className="text-gray-200 text-4xl font-bold text-center">
            Welcome
          </Text>
          <Text className="text-white text-lg font-medium text-center">
            Start your meditation practice today
          </Text>
        </View>
        <View>
          <FlatList
            className="mb-20"
            data={MEDITATION_DATA}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View>
                <Pressable
                  style={styles.pressable}
                  onPress={() => router.push(`/meditate/${item.id}`)}
                  className="border-2 border-white"
                >
                  <ImageBackground
                    source={MEDITATION_IMAGES[item.id - 1]}
                    resizeMode="cover"
                    style={styles.imageBackground}
                  >
                    <Text style={styles.itemTitle}>{item.title}</Text>
                  </ImageBackground>
                </Pressable>
              </View>
            )}
          />
        </View>
      </AppGradient>
    </View>
  );
};

export default NatureMeditate;

const styles = StyleSheet.create({
  pressable: {
    marginVertical: 10,
    height: 200,
    borderRadius: 15,
    overflow: "hidden",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    textAlign: "center",
  },
});
