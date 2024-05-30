import { Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClipboard, faDroplet } from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  return (
    <View>
      <View className="items-center bg-inputColor mt-5 w-96 ml-5 rounded-lg h-28 justify-center">
        <View className="flex-row w-96 mb-3 ml-5 items-center">
          <View className="mr-4">
            <Text>01</Text>
          </View>
          <View className="ml-5">
            <Text className="font-bold text-lg">Codigo</Text>
          </View>
        </View>
        <View className="flex-row w-96 mb-2 ml-32 items-center">
          <FontAwesomeIcon icon={faClipboard} style={{ color: "gray" }} />
          <Text className="ml-2">Tipo</Text>
          <View className="bg-red-500 w-6 h-6 ml-52 rounded-full "></View>
        </View>

        <View className="flex-row w-96 mb-2 ml-32 items-center">
          <FontAwesomeIcon icon={faDroplet} style={{ color: "gray" }} />
          <Text className="ml-2">Litragem</Text>
        </View>
      </View>
      <View className="items-center bg-inputColor mt-5 w-96 ml-5 rounded-lg h-28 justify-center">
        <View className="flex-row w-96 mb-3 ml-5 items-center">
          <View className="mr-4">
            <Text>02</Text>
          </View>
          <View className="ml-5">
            <Text className="font-bold text-lg">Codigo</Text>
          </View>
        </View>
        <View className="flex-row w-96 mb-2 ml-32 items-center">
          <FontAwesomeIcon icon={faClipboard} style={{ color: "gray" }} />
          <Text className="ml-2">Tipo</Text>
          <View className="bg-yellow-500 w-6 h-6 ml-52 rounded-full "></View>
        </View>

        <View className="flex-row w-96 mb-2 ml-32 items-center">
          <FontAwesomeIcon icon={faDroplet} style={{ color: "gray" }} />
          <Text className="ml-2">Litragem</Text>
        </View>
      </View>
      <View className="items-center bg-inputColor mt-5 w-96 ml-5 rounded-lg h-28 justify-center">
        <View className="flex-row w-96 mb-3 ml-5 items-center">
          <View className="mr-4">
            <Text>03</Text>
          </View>
          <View className="ml-5">
            <Text className="font-bold text-lg">Codigo</Text>
          </View>
        </View>
        <View className="flex-row w-96 mb-2 ml-32 items-center">
          <FontAwesomeIcon icon={faClipboard} style={{ color: "gray" }} />
          <Text className="ml-2">Tipo</Text>
          <View className="bg-green-500 w-6 h-6 ml-52 rounded-full "></View>
        </View>

        <View className="flex-row w-96 mb-2 ml-32 items-center">
          <FontAwesomeIcon icon={faDroplet} style={{ color: "gray" }} />
          <Text className="ml-2">Litragem</Text>
        </View>
      </View>
    </View>
  );
}
