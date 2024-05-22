import { TouchableOpacity, Text, View } from "react-native";
import { StyledComponent } from "nativewind";
import { useNavigation } from "@react-navigation/native";


export function SkipButton({ ...rest  }) {
    const navigation = useNavigation();
    return (
        <View className="flex-1 justify-end mt-8">
        <StyledComponent component={TouchableOpacity} {...rest}>
            <TouchableOpacity className="h-9 bg-white border-2 border-inputWeaknessColor w-20 rounded-md ml-60 mb-72 mt-96 items-center justify-center" onPress={() => {
          navigation.navigate("LoginScreen");
        }}>
                <Text className="text-textColor font-medium font-Principal text-md">
                    Pular
                </Text>
            </TouchableOpacity>
        </StyledComponent>
        </View>
    )
}