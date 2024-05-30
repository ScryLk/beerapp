import { useNavigation } from "@react-navigation/native";
import { StyledComponent } from "nativewind";
import { TouchableOpacity, View, Text } from "react-native";

export function CreateButton() {
    const navigation = useNavigation();
    return (
        <View className="justify-end mt-10">
            <StyledComponent component={TouchableOpacity} >
                <TouchableOpacity className="h-14 bg-clientsColor w-96 rounded-md items-center justify-center">
                    <Text className="text-white font-medium font-Principal text-md">
                        Criar
                    </Text>
                </TouchableOpacity>
            </StyledComponent>
        </View>
    );
}
