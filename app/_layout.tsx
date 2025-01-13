import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { TimerProvider } from "@/context/TimerContext";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" backgroundColor="black" />

      <TimerProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="meditate/[id]" options={{ headerShown: false }} />
          <Stack.Screen
            name="(modal)/adjust-meditation-duration"
            options={{ headerShown: false }}
          />
        </Stack>
      </TimerProvider>
    </>
  );
}
