import { faChevronLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import { StyledComponent } from "nativewind";
import { TouchableOpacity, View, Text } from "react-native";

export default function HeaderBackPlusBarrels({ title }) {
    const navigation = useNavigation();
  
    return (
      <View className="flex-row justify-between items-center p-4">
        {/* Botão de Voltar */}
        <TouchableOpacity className="bg-slate-100 border-2 border-ButtonsHeader w-10 h-10 rounded-lg items-center justify-center" onPress={() => {navigation.goBack()}}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </TouchableOpacity>
  
        <View className="flex-1 items-center">
          <Text className="text-2xl font-bold">{title}</Text>
        </View>
  
        {/* Botão Plus */}
        <StyledComponent
          component={TouchableOpacity}
          className="bg-slate-100 border-2 border-ButtonsHeader w-10 h-10 rounded-lg items-center justify-center"
          onPress={() => {
            navigation.navigate("CreateBarrels");
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </StyledComponent>
      </View>
    );
  }