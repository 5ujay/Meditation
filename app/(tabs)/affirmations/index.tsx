import { View, Text, ScrollView } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import GuidedAffirmationGallery from "@/components/GuidedAffirmationGallery";
import AFFIRMATION_GALLERY from "@/constants/affirmations-gallery";

const Affirmation = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppGradient colors={["#161b2e", "#0a4d4a"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-zinc-50 text-3xl font-bold text-center">
            Change Your Beliefs With Affirmations!
          </Text>

          <View>
            {AFFIRMATION_GALLERY.map((item) => (
              <GuidedAffirmationGallery
                key={item.title}
                title={item.title}
                previews={item.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default Affirmation;
