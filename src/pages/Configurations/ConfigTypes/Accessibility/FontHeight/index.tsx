import { Text, TouchableOpacity, View, Switch } from "react-native";
import HeaderOnlyBack from "../../../../../components/Headers/HeaderOnlyBack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState } from "react";
import { LanguageSelect } from "../../../../../components/Select/Configurations/Language";

export default function Language() {
    

  return (
    <View className="items-center flex-1 mt-10">
      <HeaderOnlyBack title={"Idioma"} />

      <View className="w-full px-4">
        <TouchableOpacity className="flex-row items-center  mt-5 w-full h-16 rounded-md">
            <LanguageSelect />
        </TouchableOpacity>
      </View>
    </View>
  );
}
