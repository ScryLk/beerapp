import { Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPhone, faMapPin, faMap } from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ComponentClients() {
  return (
    <View>
      <View className="items-center bg-inputColor mt-5 w-96 ml-5 rounded-lg h-28 justify-center">
        <View className="flex-row w-96 mb-3 ml-5 items-center">
          <View className="mr-4">
            <Text>01</Text>
          </View>
          <View className="ml-5">
            <Text className="font-bold text-lg">Nome</Text>
          </View>
        </View>
        <View className="flex-row w-96 mb-2 ml-32 items-center">
          <FontAwesomeIcon icon={faPhone} style={{ color: "gray" }} />
          <Text className="ml-2">Telefone</Text>
          <View className="bg-slate-300 w-6 h-6 ml-52 justify-center items-center rounded-full ">
            <TouchableOpacity>
            <FontAwesomeIcon icon={faMap} color="gray" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row w-96 mb-2 ml-32 items-center">
          <FontAwesomeIcon icon={faMapPin} style={{ color: "gray" }} />
          <Text className="ml-2">Endereço</Text>
        </View>
      </View>
    </View>
  );
}
