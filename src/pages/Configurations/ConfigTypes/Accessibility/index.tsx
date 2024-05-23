import { Text, TouchableOpacity, View } from "react-native";
import HeaderOnlyBack from "../../../../components/Headers/HeaderOnlyBack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight, faFont } from "@fortawesome/free-solid-svg-icons";

export default function Accessibility() {
  return (
    <View className="items-center flex-1 mt-20">
      <HeaderOnlyBack title={"Acesso"} />

      <View className="w-full px-4">
        <TouchableOpacity className="flex-row items-center mt-5 w-full h-16 rounded-md bg-purple-200">
          <View className="bg-purple-300 h-10 w-10 items-center rounded-md justify-center ml-3">
            <FontAwesomeIcon icon={faFont} />
          </View>
          <View className="ml-5 flex-1">
            <Text className="text-xl">Tamanho da Fonte</Text>
          </View>
          <View className="mr-3">
            <FontAwesomeIcon icon={faChevronRight} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
