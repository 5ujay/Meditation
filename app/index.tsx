import { View, Text, ImageBackground, StatusBar } from "react-native";
import React from "react";
import beachImage from "@/assets/meditation-images/beach.webp";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import CutomButton from "@/components/CutomButton";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";

const index = () => {
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <AppGradient colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.5)"]}>
          <SafeAreaView className="flex-1 justify-between">
            <View>
              <Text className="text-center text-white font-bold text-4xl">
                Meditation
              </Text>
              <Text className="text-white text-lg text-center">
                Simplify Meditation for Everyone
              </Text>
            </View>

            <View>
              <CutomButton
                title="Get Started"
                onPress={() => router.push("/nature-meditate")}
              />
            </View>
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default index;
