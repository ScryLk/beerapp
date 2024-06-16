import { View, Image, Text, Button, TextInput, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope, faEye, faEyeSlash, faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

const Figure = require("../../assets/images/loginImage.png");

export default function LoginScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureText, setSecureText] = useState(true);

    function toggleShowPassword() {
        setSecureText(!secureText);
    }

    const handleLogin = () => {
        const myHeaders: Headers = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const raw: string = JSON.stringify({
          email: email,
          password: password
        });
        
        const requestOptions: RequestInit = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
        

        fetch("http://192.168.0.155:3000/users/login",   requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                if (result.success) { // Assumindo que a resposta inclui uma propriedade 'success'
                    navigation.navigate('HomePage');
                } else {
                    Alert.alert("Login failed", result.message || "Invalid credentials");
                }
            })
            .catch((error) => {
                console.error(error);
                Alert.alert("Login failed", "An error occurred. Please try again.");
            });
    };

    return (
        <View className="flex-1 items-center justify-center mb-60">
            <Image source={Figure} />
            <Text className="font-bold text-2xl mt-10">Acesse sua conta</Text>
            
            <View className="bg-inputColor border-2 border-gray-200 mt-10 w-80 h-12 rounded-md flex-row items-center px-3">
                <View className="bg-white w-7 h-7 rounded-full items-center justify-center">
                    <FontAwesomeIcon icon={faEnvelope} style={{ color: "#407BFF" }} />
                </View>
                <TextInput
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Digite seu usuário"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    className="flex-1 ml-2 text-center text-black font-bold"
                />
            </View>
            
            <View className="bg-inputColor border-2 border-gray-200 mt-5 w-80 h-12 rounded-md flex-row items-center px-3">
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
            
            <View className="justify-end mt-10">
                <TouchableOpacity
                    className="h-14 bg-blue-500 w-80 rounded-md items-center justify-center"
                    onPress={handleLogin}
                >
                    <Text className="text-white font-medium text-md">
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
