import React from "react";
import { View, Text } from "react-native";

export function HeaderOnlyTitle({ title }) {
    return( 
      <View className="flex-1 items-center">
        <Text className="text-2xl font-bold">{title}</Text>
      </View>
    )
  }