import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";


export function HeaderOnlyPlus({ currentScreen }) {
    const navigation = useNavigation();
  
    return (
      <View className="flex-row justify-end items-center p-4">
        <TouchableOpacity
          className="bg-slate-100 border-2 border-ButtonsHeader w-10 h-10 rounded-lg items-center justify-center"
          onPress={() => {
            navigation.navigate("CreateBudgets");
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </TouchableOpacity>
      </View>
    );
  }