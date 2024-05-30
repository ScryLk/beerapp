import { Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPhone, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  return (
    <View>
      <View className="items-center bg-inputColor mt-5 w-96 ml-5 rounded-lg h-28 justify-center">
        <View className="flex-row w-96 mb-3 ml-5 items-center">
          <View className="mr-5">
          </View>
          <View className="ml-5 mr-4">
            <Text className="font-bold text-lg">Nome do Cliente</Text>
          </View>
        </View>
        <View className="flex-row w-96 mb-2 ml-32 items-center">
          <FontAwesomeIcon icon={faPhone} style={{ color: "gray" }} />
          <Text className="ml-2">Telefone</Text>
        </View>
        <View className="flex-row w-96 mb-2 ml-32 items-center">
          <FontAwesomeIcon icon={faMapLocationDot} style={{ color: "gray" }} />
          <Text className="ml-2">Endereco</Text>
        </View>
      </View>
    </View>
  );
}
