import { Text, TouchableOpacity } from "react-native";
import React from "react";

interface ButtonProps {
  onPress: () => void;
  title: string;
  textStyles?: string;
  containerStyle?: string;
}

const CutomButton = ({
  onPress,
  title,
  textStyles = "",
  containerStyle = "",
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={`bg-white rounded-xl justify-center items-center ${containerStyle} `}
      style={{
        paddingVertical: 12,
        paddingHorizontal: 20,
      }}
    >
      <Text className={`font-semibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CutomButton;
