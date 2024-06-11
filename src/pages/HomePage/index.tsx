import { Text, Touchable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function HomePage() {
    const navigation = useNavigation();

    return( 
    <View>
        <TouchableOpacity className="items-center mt-24 justify-center align-middle ml-6 h-20 rounded-lg bg-barrisColor w-96" onPress={() => navigation.navigate('Barrels')}>
            <View className="items-start ml-20 w-96">
                <Text className="font-bold text-white">
                    BARRIS
                </Text>
                <Text className="font-bold text-white">
                    Controle seu estoque
                </Text>
            </View>            
         </TouchableOpacity>
         <TouchableOpacity className="items-center mt-5 justify-center align-middle ml-6 h-20 rounded-lg bg-orange-500 w-96" onPress={() => navigation.navigate('Clients')}>
            <View className="items-start ml-20 w-96">
                <Text className="font-bold text-white">
                    CLIENTES
                </Text>
                <Text className="font-bold text-white">
                    Gerencie seus Clientes
                </Text>
            </View>            
         </TouchableOpacity>
         <TouchableOpacity className="items-center mt-5 justify-center align-middle ml-6 h-20 rounded-lg bg-mapColor w-96" onPress={() => navigation.navigate('Map')}>
            <View className="items-start ml-20 w-96">
                <Text className="font-bold text-white">
                    LOCALIZAR
                </Text>
                <Text className="font-bold text-white">
                    Localize seus Barris
                </Text>
            </View>            
         </TouchableOpacity>
         <TouchableOpacity className="items-center mt-5 justify-center align-middle ml-6 h-20 rounded-lg bg-reserveColor w-96" onPress={() => navigation.navigate('Reserves')}>
            <View className="items-start ml-20 w-96">
                <Text className="font-bold text-white">
                    RESERVAS
                </Text>
                <Text className="font-bold text-white">
                    Adicionar ou consultar reservas
                </Text>
            </View>            
         </TouchableOpacity>
    </View>
     

    )
}
