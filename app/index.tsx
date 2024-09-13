import { Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">RootLayout3</Text>
      <StatusBar style="auto" />
      <Link href="/profile">Go to profile 2</Link>
    </View>
  );
};

export default RootLayout;