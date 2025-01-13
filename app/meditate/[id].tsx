import { View, Text, ImageBackground, Pressable } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import meditationImages from "@/constants/meditation-images";
import AppGradient from "@/components/AppGradient";
import { router, useLocalSearchParams } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import CutomButton from "@/components/CutomButton";
import { Audio } from "expo-av";
import { MEDITATION_DATA, AUDIO_FILES } from "@/constants/MeditationData";
import { TimerContext } from "@/context/TimerContext";
import AdjustMeditationDuration from "../(modal)/adjust-meditation-duration";

const meditate = () => {
  const { id } = useLocalSearchParams();

  const { duration, setDuration } = useContext(TimerContext);
  const [isMeditate, setMeditate] = useState(false);
  const [audio, setAudio] = useState<Audio.Sound | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isMeditate && duration > 0) {
      intervalId = setInterval(() => {
        setDuration((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    if (duration === 0) {
      setMeditate(false);
      stopAudio();
    }

    return () => clearInterval(intervalId);
  }, [isMeditate, duration]);

  useEffect(() => {
    return () => {
      audio?.unloadAsync();
    };
  }, [audio]);

  const toggleMeditationSessionStatus = async () => {
    if (duration === 0) {
      setDuration(10);
    }

    setMeditate(!isMeditate);
    await togglePlayPause();
  };

  const initializeSound = async () => {
    const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;
    const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[audioFileName]);
    setAudio(sound);
    return sound;
  };

  const togglePlayPause = async () => {
    const sound = audio ? audio : await initializeSound();
    const status = await sound?.getStatusAsync();

    if (status?.isLoaded && !isAudioPlaying) {
      await sound?.playAsync();
      setIsAudioPlaying(true);
    } else {
      await sound?.pauseAsync();
      setIsAudioPlaying(false);
    }
  };

  const stopAudio = async () => {
    if (audio) {
      await audio.pauseAsync();
      setIsAudioPlaying(false);
    }
  };

  const formattedTimeMinutes = String(Math.floor(duration / 60)).padStart(
    2,
    "0"
  );
  const formattedTimeSeconds = String(duration % 60).padStart(2, "0");

  const handleAdjustDuration = () => {
    if (isMeditate) toggleMeditationSessionStatus();
    setIsModalVisible(true);
  };

  const handleSelectDuration = (duration:number) => {
    setIsModalVisible(false);
    setDuration(duration);
  };

  return (
    <View className="flex-1">
      <ImageBackground
        source={meditationImages[Number(id) - 1]}
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

          <View className="flex-1 justify-center">
            <View className="mx-auto bg-neutral-200 w-44 h-44 rounded-full justify-center items-center">
              <Text className="text-4xl">
                {formattedTimeMinutes}:{formattedTimeSeconds}
              </Text>
            </View>
          </View>

          <View className="mb-5 gap-2">
            <CutomButton
              title="Adjust Duration"
              onPress={handleAdjustDuration}
            />
            <CutomButton
              title={isMeditate ? "Pause Meditation" : "Start Meditate"}
              onPress={toggleMeditationSessionStatus}
            />
          </View>

          {/* Modal for Adjust Duration */}
          <AdjustMeditationDuration
            isVisible={isModalVisible}
            onClose={() => setIsModalVisible(false)}
            onSelectDuration={handleSelectDuration}
          />
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default meditate;
