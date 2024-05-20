import { Text, View } from "react-native";
import { StyledComponent } from "nativewind";


export default function Texto() {
    return (
       <View>
        <StyledComponent component={Text}>
            <Text className="text-black bg-white font-medium font-Principal text-md">
                Bem-vindo ao Guard
            </Text>
        </StyledComponent>
        <Text className="text-black bg-white font-medium font-Principal text-md">
            Bem-vindo ao Guard
        </Text>
        </View>
    )
}