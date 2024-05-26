import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChevronLeft,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { StyledComponent } from "nativewind";
import { useNavigation } from "@react-navigation/native";
import CustomModal from "../../Modal";

export default function HeaderFilterPlus({ title }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View className="flex-row justify-between items-center p-4">
      {/* Botão de Voltar */}
      <TouchableOpacity
        className="bg-slate-100 border-2 border-ButtonsHeader w-10 h-10 rounded-lg items-center justify-center"
        onPress={navigation.goBack}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </TouchableOpacity>

      <View className="flex-1 items-center">
        <Text className="text-2xl font-bold">{title}</Text>
      </View>

      {/* Botão Filtro */}
      <StyledComponent
        component={TouchableOpacity}
        className="bg-slate-100 border-2 border-ButtonsHeader w-10 h-10 rounded-lg items-center justify-center"
        onPress={toggleModal}
      >
        <FontAwesomeIcon icon={faFilter} />
      </StyledComponent>

      {/* Modal */}
      <CustomModal isVisible={isModalVisible} onClose={toggleModal} />
    </View>
  );
}
