import { Text, TouchableOpacity, View } from "react-native";
import HeaderBackPlusReserves from "../../components/Headers/HeaderBackPlusReserves";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Reserves() {
  return (
    <View className="mt-10">
      <HeaderBackPlusReserves title={"Reservas"} />
      <View>
        <View className="items-center bg-inputColor mt-5 w-96 ml-5 rounded-lg h-28 justify-center">
          <View className="flex-row w-96 mb-3 ml-5 items-center">
            <View className="mr-4">
              <Text>01</Text>
            </View>
            <View className="ml-5">
              <Text className="font-bold text-lg">Barril</Text>
            </View>
          </View>
          <View className="flex-row w-96 mb-2 ml-32 items-center">
            <FontAwesomeIcon icon={faUser} style={{ color: "gray" }} />
            <Text className="ml-2">Cliente</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
