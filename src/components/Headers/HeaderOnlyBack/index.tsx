import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";


export function HeaderOnlyBack() {
    const navigation = useNavigation();
    return (
      <View>
        <TouchableOpacity className="bg-slate-100 border-2 mr-72 border-ButtonsHeader w-10 h-10 rounded-lg items-center justify-center" onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </TouchableOpacity>
      </View>
    );
  }