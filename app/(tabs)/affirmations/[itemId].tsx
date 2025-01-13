import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { GalleryPreviewData } from "@/constants/model/AffirmationCatgeory";
import AFFIRMATION_GALLERY from "@/constants/affirmations-gallery";
import AppGradient from "@/components/AppGradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "@/constants/Colors";

const AffirmationPractice = () => {
  const { itemId } = useLocalSearchParams();

  const [affirmation, setAffirmation] = useState<GalleryPreviewData>();

  const router = useRouter();
  useEffect(() => {
    for (let i = 0; i < AFFIRMATION_GALLERY.length; i++) {
      const affirmationData = AFFIRMATION_GALLERY[i].data;
      const selectedAffirmation = affirmationData.find(
        (item) => item.id === Number(itemId)
      );

      if (selectedAffirmation) {
        setAffirmation(selectedAffirmation);
        return;
      }
    }
  }, []);

  console.log(affirmation?.image);

  const parts = affirmation?.text.split(".");

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={affirmation?.image}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.5)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-10 left-5 z-10"
          >
            <Ionicons name="arrow-back-circle" size={50} color="white" />
          </Pressable>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View className="h-screen flex-1 justify-center items-center px-5">
              <Text
                className="text-white text-4xl font-semibold text-center drop-shadow-lg"
                style={{
                  textShadowColor: "rgba(0, 0, 0, 0.6)",
                  textShadowOffset: { width: 2, height: 2 },
                  textShadowRadius: 5,
                  lineHeight: 40,
                }}
              >
                {affirmation?.text}
              </Text>
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default AffirmationPractice;
