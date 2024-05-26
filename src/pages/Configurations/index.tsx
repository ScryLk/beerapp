import { Text, TouchableOpacity, View, Image, Switch } from "react-native";
import HeaderOnlyBack from "../../components/Headers/HeaderOnlyBack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faKey, faChevronRight, faLanguage, faBell, faHands } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import passwordIcon from "../../assets/images/icons/password.png";
import languageIcon from "../../assets/images/icons/language.png";
import notificationIcon from "../../assets/images/icons/alerta.png";
import handsIcon from "../../assets/images/icons/hand.png";

export default function Configurations() {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const navigation = useNavigation();
  
  return (
    <View className="items-center flex-1 mt-20">
      <HeaderOnlyBack title={"Config"} />
      
      <View className="w-full px-4">
        <TouchableOpacity className="flex-row items-center mt-5 w-full h-16 rounded-md " onPress={() => navigation.navigate("Access")}>
          <View className="bg-slate-200 h-14 w-14 items-center rounded-md justify-center ml-3">
            <FontAwesomeIcon icon={faKey} size={25} color="#6359E7" />
          </View>
          <View className="ml-5 flex-1">
            <Text className="text-xl">Acesso</Text>
          </View>
          <View className="mr-3">
            <FontAwesomeIcon icon={faChevronRight} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center mt-5 w-full h-16 rounded-md " onPress={() => navigation.navigate("language")}>
          <View className="bg-slate-200 h-14 w-14 items-center rounded-md justify-center ml-3">
            <FontAwesomeIcon icon={faLanguage} size={25} color="#6359E7" />
          </View>
          <View className="ml-5 flex-1">
            <Text className="text-xl">Idioma</Text>
          </View>
          <View className="mr-3">
            <FontAwesomeIcon icon={faChevronRight} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center mt-5 w-full h-16 rounded-md ">
          <View className="bg-slate-200 h-14 w-14 items-center rounded-md justify-center ml-3">
            <FontAwesomeIcon icon={faBell} size={25} color="#6359E7"/>
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

        <TouchableOpacity className="flex-row items-center mt-5 w-full h-16 rounded-md " onPress={() => navigation.navigate("Accessibility")}>
          <View className="bg-slate-200 h-14 w-14 items-center rounded-md justify-center ml-3">
            <FontAwesomeIcon icon={faHands} color="#6359E7" size={25}/>
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
