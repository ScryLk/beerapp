import { Button, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';


export default function MapInput({ navigation }) {
    return( 
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('MapComponent')}>
                <Text>Mapa</Text>
            </TouchableOpacity>
        </View>
    )
}