import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChevronLeft,
  faPlus,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { StyledComponent } from "nativewind";
import { useNavigation } from "@react-navigation/native";

export default function HeaderButton({ title }) {
  const navigation = useNavigation();

  return (
    <View className="flex-row justify-between items-center p-4">
      {/* Botão de Voltar */}
      <TouchableOpacity className="bg-slate-100 border-2 border-ButtonsHeader w-10 h-10 rounded-lg items-center justify-center">
        <FontAwesomeIcon icon={faChevronLeft} />
      </TouchableOpacity>

      <View className="flex-1 items-center">
        <Text className="text-2xl font-bold">{title}</Text>
      </View>

      {/* Botão Plus */}
      <StyledComponent
        component={TouchableOpacity}
        className="bg-slate-100 border-2 border-ButtonsHeader w-10 h-10 rounded-lg items-center justify-center"
        onPress={() => {
          navigation.navigate("CreateBudgets");
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
      </StyledComponent>
    </View>
  );
}

export function HeaderFilterButton({ title }) {
  <View className="flex-row justify-between items-center p-4">
    {/* Botão de Voltar */}
    <TouchableOpacity className="bg-slate-100 border-2 border-ButtonsHeader w-10 h-10 rounded-lg items-center justify-center">
      <FontAwesomeIcon icon={faChevronLeft} />
    </TouchableOpacity>

    <View className="flex-1 items-center">
      <Text className="text-2xl font-bold">{title}</Text>
    </View>

    {/* Botão Filtro */}
    <StyledComponent
      component={TouchableOpacity}
      className="bg-slate-100 border-2 border-ButtonsHeader w-10 h-10 rounded-lg items-center justify-center"
    >
      <FontAwesomeIcon icon={faFilter} />
    </StyledComponent>
  </View>;
}

export function BackButton() {
  return (
    <View>
      <TouchableOpacity className="bg-slate-100 border-2 mr-72 border-ButtonsHeader w-10 h-10 rounded-lg items-center justify-center">
        <FontAwesomeIcon icon={faChevronLeft} />
      </TouchableOpacity>
    </View>
  );
}

export function PlusButton({ currentScreen }) {
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
