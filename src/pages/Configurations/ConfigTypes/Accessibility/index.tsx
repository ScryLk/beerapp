import { Text, TouchableOpacity, View } from "react-native";
import HeaderOnlyBack from "../../../../components/Headers/HeaderOnlyBack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight, faFont } from "@fortawesome/free-solid-svg-icons";

export default function Accessibility() {
  return (
    <View className="items-center flex-1 mt-20">
      <HeaderOnlyBack title={"Acessibilidade"} />

      <View className="w-full px-4">
        <TouchableOpacity className="flex-row items-center mt-5 w-full h-16 rounded-md">
        <View className="bg-slate-200 h-14 w-14 items-center rounded-md justify-center ml-3">
            <FontAwesomeIcon icon={faFont} color="#6359E7" size={25} />
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
