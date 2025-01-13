import { View, Text, Modal, Pressable } from "react-native";
import React from "react";
import CutomButton from "@/components/CutomButton";
import AppGradient from "@/components/AppGradient";
import Ionicons from "@expo/vector-icons/Ionicons";

interface AjustDurationProps {
  isVisible: boolean;
  onClose: () => void;
  onSelectDuration: (duration:number) => void;
}

const AdjustMeditationDuration = ({
  isVisible,
  onClose,
  onSelectDuration,
}: AjustDurationProps) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View className="flex-1 relative">
        <AppGradient colors={["#161b2e", "#0a4d4a"]}>
          <Pressable onPress={onClose} className="absolute top-10 left-5 z-10">
            <Ionicons name="arrow-back-circle" size={50} color="white" />
          </Pressable>

          <View className="justify-center gap-5 h-4/5">
            <Text className="text-center font-bold text-3xl text-white">
              Adjust Your Meditation Duration
            </Text>

            <CutomButton
              title="10 Seconds"
              onPress={() => onSelectDuration(10)}
            />
            <CutomButton
              title="5 Minutes"
              onPress={() => onSelectDuration(5 * 60)}
            />
            <CutomButton
              title="10 Minutes"
              onPress={() => onSelectDuration(10 * 60)}
            />
            <CutomButton
              title="15 Minutes"
              onPress={() => onSelectDuration(15 * 60)}
            />
          </View>
        </AppGradient>
      </View>
    </Modal>
  );
};

export default AdjustMeditationDuration;
