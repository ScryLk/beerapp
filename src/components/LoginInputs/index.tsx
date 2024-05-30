import { Text, View, TextInput } from "react-native";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope, faEye, faEyeSlash, faLock } from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import { StyledComponent } from "nativewind";

export default function EmailInput() {
    const [email, setEmail] = useState('');

    return (
        <View className="bg-inputColor border-2 onFocus:border-inputColor  border-gray-200 mt-10 w-80 h-12 rounded-md flex-row items-center px-3">
            <View className="bg-white w-7 h-7 rounded-full items-center justify-center">
                <FontAwesomeIcon icon={faEnvelope} style={{color: "#407BFF"}} />
            </View>
            <TextInput
                onChangeText={setEmail}
                value={email}
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                className="flex-1 ml-2 text-center text-black font-bold"
            />
        </View>
    );
}

export function PasswordInput() {
    const [password, setPassword] = useState('');
    const [secureText, setSecureText] = useState(true);

    function toggleShowPassword() {
        setSecureText(!secureText);
    }

    return (
        <View className="bg-inputColor border-2 onFocus:border-inputColor border-gray-200 mt-5 w-80 h-12 rounded-md flex-row items-center px-3">
            <View className="bg-white w-7 h-7 rounded-full items-center justify-center">
                <FontAwesomeIcon icon={faLock} style={{color: "#407BFF"}} />
            </View>
            <TextInput
                onChangeText={setPassword}
                value={password}
                placeholder="Digite sua senha"
                keyboardType="default"
                autoCapitalize="none"
                className="flex-1 ml-2 text-center text-black font-bold"
                secureTextEntry={secureText}
            />
            <TouchableOpacity onPress={toggleShowPassword}>
                <FontAwesomeIcon icon={secureText ? faEye : faEyeSlash} style={{color: "#407BFF"}} />
            </TouchableOpacity>
        </View>
    );
}

export function LoginButton() {
    const navigation = useNavigation();
    return (
        <View className="justify-end mt-10">
            <StyledComponent component={TouchableOpacity} >
                <TouchableOpacity className="h-14 bg-blue-500 w-80 rounded-md items-center justify-center" onPress={() => {navigation.navigate('HomePage');}}>
                    <Text className="text-white font-medium font-Principal text-md">
                        Login
                    </Text>
                </TouchableOpacity>
            </StyledComponent>
        </View>
    );
}
