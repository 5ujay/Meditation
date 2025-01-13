import { View, Text, FlatList, Pressable, Image } from "react-native";
import React from "react";
import { GalleryPreviewData } from "@/constants/model/AffirmationCatgeory";
import { Link } from "expo-router";

interface GuidedAffirmationGalleryProps {
  title: string;
  previews: GalleryPreviewData[];
}

const GuidedAffirmationGallery = ({
  title,
  previews,
}: GuidedAffirmationGalleryProps) => {
  return (
    <View className="my-5">
      {/* Title Section */}
      <View className="mb-4">
        <Text className="text-white text-xl font-bold">{title}</Text>
      </View>
      
      {/* Gallery Section */}
      <FlatList
        data={previews}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={`/affirmations/${item.id}`} asChild>
            <Pressable className="mr-3">
              <View className="h-36 w-36 rounded-lg overflow-hidden">
                <Image
                  source={item.image}
                  resizeMode="cover"
                  style={{ width: "100%", height: "100%", borderRadius: 8 }}
                />
              </View>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
};

export default GuidedAffirmationGallery;
