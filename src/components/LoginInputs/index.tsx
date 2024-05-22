import { Text, View, TextInput } from "react-native";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyledComponent } from "nativewind";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';




export default function EmailInput() {
    const [email, setEmail] = useState('');

    return (
        <View className="bg-inputColor border-2 onFocus:border-inputColor border-gray-200 mt-10 w-80 h-12 rounded-md items-center justify-center">
            <TextInput
                onChangeText={setEmail}
                value={email}
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                className="w-full items-center justify-center text-center text-black font-bold"
            />
        </View>
    );
}


export function PasswordInput() {
    const [password, setPassword] = useState('');

    return (
        <View className="bg-inputColor border-2 onFocus:border-inputColor border-gray-200 mt-5 w-80 h-12 rounded-md items-center justify-center">
            <TextInput
                onChangeText={setPassword}
                value={password}
                placeholder="Digite sua senha"
                keyboardType="visible-password"
                autoCapitalize="none"
                className="w-full items-center justify-center text-center text-black font-bold"
                secureTextEntry={true}
            />
        </View>
    );
}

export function LoginButton() {
    const navigation = useNavigation();
    return (
        <View className="justify-end mt-10">
            <StyledComponent component={TouchableOpacity} >
                <TouchableOpacity className="h-14 bg-primary w-80 rounded-md items-center justify-center"  onPress={() => {navigation.navigate('Services');}}>
                    <Text className="text-white font-medium font-Principal text-md">
                        Login
                    </Text>
                </TouchableOpacity>
            </StyledComponent>
        </View>
    );
}