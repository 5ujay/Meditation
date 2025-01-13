import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Content from "./Content";

interface AppGradientProps {
  children: React.ReactNode;
  colors: [string, string, ...string[]]; // Ensure at least two colors are provided
}

const AppGradient = ({ children, colors }: AppGradientProps) => {
  return (
    <LinearGradient colors={colors} className="flex-1">
      <Content>{children}</Content>
    </LinearGradient>
  );
};

export default AppGradient;
