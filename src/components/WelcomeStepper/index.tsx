import { TouchableOpacity, Text, View } from "react-native";
import { StyledComponent } from "nativewind";

export function WelcomeStepper({ ...rest  }) {
    return (
        <View className="flex-1 justify-end mb-10">
        <StyledComponent component={TouchableOpacity} {...rest}>
            <TouchableOpacity className="h-14 bg-primary w-80 rounded-md items-center justify-center">
                <Text className="text-white font-medium font-Principal text-md">
                    Avançar
                </Text>
            </TouchableOpacity>
        </StyledComponent>
        </View>
    )
}