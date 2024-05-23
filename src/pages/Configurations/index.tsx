import { Text, TouchableOpacity, View, Switch } from "react-native";
import HeaderOnlyBack from "../../components/Headers/HeaderOnlyBack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faKey, faChevronRight, faLanguage, faBell, faHands } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Configurations() {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const navigation = useNavigation();
  
  return (
    <View className="items-center flex-1 mt-20">
      <HeaderOnlyBack title={"Config"} />
      
      <View className="w-full px-4">
        <TouchableOpacity className="flex-row items-center mt-5 w-full h-16 rounded-md bg-purple-200" onPress={() => navigation.navigate("Access")}>
          <View className="bg-purple-300 h-10 w-10 items-center rounded-md justify-center ml-3">
            <FontAwesomeIcon icon={faKey} />
          </View>
          <View className="ml-5 flex-1">
            <Text className="text-xl">Acesso</Text>
          </View>
          <View className="mr-3">
            <FontAwesomeIcon icon={faChevronRight} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center mt-5 w-full h-16 rounded-md bg-purple-200" onPress={() => navigation.navigate("language")}>
          <View className="bg-purple-300 h-10 w-10 items-center rounded-md justify-center ml-3">
            <FontAwesomeIcon icon={faLanguage} />
          </View>
          <View className="ml-5 flex-1">
            <Text className="text-xl">Idioma</Text>
          </View>
          <View className="mr-3">
            <FontAwesomeIcon icon={faChevronRight} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center mt-5 w-full h-16 rounded-md bg-purple-200">
          <View className="bg-purple-300 h-10 w-10 items-center rounded-md justify-center ml-3">
            <FontAwesomeIcon icon={faBell} />
          </View>
          <View className="ml-5 flex-1">
            <Text className="text-xl">Notificações</Text>
          </View>
          <View className="mr-3">
          <Switch
        trackColor={{false: '#767577', true: '#6750A4'}}
        thumbColor={isEnabled ? '#ffff' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
          </View>
        
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center mt-5 w-full h-16 rounded-md bg-purple-200" onPress={() => navigation.navigate("Accessibility")}>
          <View className="bg-purple-300 h-10 w-10 items-center rounded-md justify-center ml-3">
            <FontAwesomeIcon icon={faHands} />
          </View>
          <View className="ml-5 flex-1">
            <Text className="text-xl">Acessibilidade</Text>
          </View>
          <View className="mr-3">
            <FontAwesomeIcon icon={faChevronRight} />
          </View>
        </TouchableOpacity>

      </View>
      
    </View>
  );
}
