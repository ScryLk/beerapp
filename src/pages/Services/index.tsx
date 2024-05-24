import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFile, faGear, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import { HeaderOnlyTitle } from "../../components/Headers/HeaderOnlyTitle";

import storageIcon from "../../assets/images/icons/storagepng.png";
import clientsIcon from "../../assets/images/icons/clients.png";
import toolsIcon from "../../assets/images/icons/tools.png";

export default function Services() {
  const navigation = useNavigation();

  return (
    <View className="mt-20">
      <HeaderOnlyTitle title="Serviços" />
      <Text className="text-xl font-bold ml-5">Mais usados</Text>
      <View className="flex-row items-center">
        <TouchableOpacity
          className="text-black ml-5 mt-5 bg-slate-200 align-center shadow justify-center w-28 h-32 rounded-md"
          onPress={() => navigation.navigate("MyBudgets")}
        >
          <View className="items-center ml-6 justify-center bg-primary w-16 h-16 rounded-full">
            <Image source={storageIcon} />
          </View>
          <View>
            <Text className="text-center mt-2">Meus Orçamentos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          className="text-black ml-5 mt-5 bg-slate-200 align-center justify-center shadow w-28 h-32 rounded-md"
          onPress={() => navigation.navigate("Clients")}
        >
          <View className="items-center justify-center ml-6 mb-3 bg-clientsColor w-16 h-16 rounded-full">
            <Image source={clientsIcon} />
          </View>
          <View>
            <Text className="text-center mt-2">Clientes</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text className="text-xl font-semibold mt-10 ml-5">Outros</Text>

      <View className="flex-row items-center  justify-between">
        <TouchableOpacity
          className="text-black ml-5 mt-5 bg-slate-200 align-center shadow justify-center  w-28 h-32 rounded-md"
          onPress={() => navigation.navigate("Configurations")}
        >
          <View className="items-center justify-center ml-6 mb-3 bg-slate-600 w-16 h-16 rounded-full">
            <Image source={toolsIcon} />
          </View>
          <View>
            <Text className="text-center mt-2">Configurações</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
