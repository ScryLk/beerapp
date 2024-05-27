import { Text, TouchableOpacity, View, Switch } from "react-native";
import HeaderOnlyBack from "../../../../components/Headers/HeaderOnlyBack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faKey, faChevronRight, faFaceSmile, faPodcast } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Access() {

  const [isFaceIdEnabled, setIsFaceIdEnabled] = useState(false);
  const [isDigitalEnabled, setIsDigitalEnabled] = useState(false);

  const toggleFaceIdSwitch = () => setIsFaceIdEnabled(previousState => !previousState);
  const toggleDigitalSwitch = () => setIsDigitalEnabled(previousState => !previousState);

  return (
    <View className="items-center flex-1 mt-10">
      <HeaderOnlyBack title={"Acesso"} />
      
      <View className="w-full px-4">
        <TouchableOpacity className="flex-row items-center mt-5 w-full h-16 rounded-md">
        <View className="bg-slate-200 h-14 w-14 items-center rounded-md justify-center ml-3">
            <FontAwesomeIcon icon={faKey} color="#6359E7" size={25} />
          </View>
          <View className="ml-5 flex-1">
            <Text className="text-xl">Trocar Senha</Text>
          </View>
          <View className="mr-3">
            <FontAwesomeIcon icon={faChevronRight} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center mt-5 w-full h-16 rounded-md">
          <View className="bg-slate-200 h-14 w-14 items-center rounded-md justify-center ml-3">
            <FontAwesomeIcon icon={faFaceSmile} color="#6359E7" size={25} />
          </View>
          <View className="ml-5 flex-1">
            <Text className="text-xl">Face ID</Text>
          </View>
          <View className="mr-3">
            <Switch
              trackColor={{ false: '#767577', true: '#6750A4' }}
              thumbColor={isFaceIdEnabled ? '#ffff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleFaceIdSwitch}
              value={isFaceIdEnabled}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center mt-5 w-full h-16 rounded-md ">
        <View className="bg-slate-200 h-14 w-14 items-center rounded-md justify-center ml-3">
            <FontAwesomeIcon icon={faPodcast} color="#6359E7" size={25} />
          </View>
          <View className="ml-5 flex-1">
            <Text className="text-xl">Digital</Text>
          </View>
          <View className="mr-3">
            <Switch
              trackColor={{ false: '#767577', true: '#6750A4' }}
              thumbColor={isDigitalEnabled ? '#ffff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleDigitalSwitch}
              value={isDigitalEnabled}
            />
          </View>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}
