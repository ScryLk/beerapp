import { View, Image, Text, Button, TextInput, TouchableOpacity } from "react-native";
import EmailInput from "../../components/LoginInputs";
import { PasswordInput } from "../../components/LoginInputs";
import { LoginButton } from "../../components/LoginInputs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope, faEye, faEyeSlash, faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { StyledComponent } from "nativewind";
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
  return (
    <View className="flex-1 items-center justify-center mb-60">
      <Image source={Figure} />
      <Text className="font-bold text-2xl mt-10">Acesse sua conta</Text>
      <View className="bg-inputColor border-2 onFocus:border-inputColor  border-gray-200 mt-10 w-80 h-12 rounded-md flex-row items-center px-3">
        <View className="bg-white w-7 h-7 rounded-full items-center justify-center">
          <FontAwesomeIcon icon={faEnvelope} style={{ color: "#407BFF" }} />
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
        <View className="justify-end mt-10">
            <StyledComponent component={TouchableOpacity} >
                <TouchableOpacity className="h-14 bg-blue-500 w-80 rounded-md items-center justify-center" onPress={() => {navigation.navigate('HomePage');}}>
                    <Text className="text-white font-medium font-Principal text-md">
                        Login
                    </Text>
                </TouchableOpacity>
            </StyledComponent>
        </View>
    </View>
  );
}
