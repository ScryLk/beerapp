import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";


export function HeaderOnlyPlus({ title }) {
    const navigation = useNavigation();
  
    return (
      <View className="flex-1 items-center">
      <TouchableOpacity
      className="bg-slate-100 border-2 mr-72 border-ButtonsHeader w-10 h-10 rounded-lg items-center justify-center"
      onPress={() => navigation.goBack()}
    >
      <FontAwesomeIcon icon={faPlus} />
    </TouchableOpacity>
    
    <View className="flex-1 items-center">
        <Text className="text-2xl font-bold">{title}</Text>
      </View>
    </View>
    );
  }