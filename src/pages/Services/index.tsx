import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFile, faGear } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import { HeaderOnlyTitle } from "../../components/Headers/HeaderOnlyTitle";

export default function Services() {
  const navigation = useNavigation();

  return (
    <View className="mt-20 ">
      <HeaderOnlyTitle title="Serviços" />
      <Text className="text-xl font-bold ml-5">Mais usados</Text>
      <View className="flex-row items-center justify-between">
        <TouchableOpacity
          className="text-black ml-5 mt-5 bg-slate-200 align-center justify-center w-20 h-24 rounded-md"
          onPress={() => navigation.navigate("MyBudgets")}
        >
          <View className="items-center justify-center">
            <FontAwesomeIcon icon={faFile} />
          </View>
        </TouchableOpacity>
      </View>

      <View className="ml-4 mt-2">
        <Text>Orçamentos</Text>
      </View>
      
      <View className="flex-row items-center justify-between">
        <TouchableOpacity
          className="text-black ml-5 mt-5 bg-slate-200 align-center justify-center w-20 h-24 rounded-md"
          onPress={() => navigation.navigate("Configurations")}
        >
          <View className="items-center justify-center">
            <FontAwesomeIcon icon={faGear} />
          </View>
        </TouchableOpacity>
      </View>

      <View className="ml-4 mt-2">
        <Text>Configurações</Text>
      </View>
    </View>
  );
}
