import HeanderOnlyBack from "../../../components/Headers/HeaderOnlyBack";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { StyledComponent } from "nativewind";

export default function CreateBarrels() {
    const [code, setCode] = useState('');
    const [type, setType] = useState('');
    const [liters, setLiters] = useState('');

    function sendData() {
        if (code === '' || type === '' || liters === '') {
            alert('Preencha todos os campos para continuar');
        } else {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "codigo": code,
                "tipo": type,
                "litragem": liters
            });

            const requestOptions: RequestInit = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch("http://192.168.0.155:3000/barris/", requestOptions)
              .then((response) => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                return response.json(); // Alterado para response.json()
              })
              .then((result) => {
                alert('Barril Criado com Sucesso!');
                console.log(result);
              })
              .catch((error) => {
                alert('Erro ao criar barril');
                console.error(error);
              });
        }
    }

    return (
        <View className="mt-10">
            <HeanderOnlyBack title="Adicionar Barril" />
            <View>
                <Text className="text-xl font-bold ml-5 mt-4">Codigo</Text>
            </View>
            <View className="bg-inputColor ml-5 border-2 border-gray-200 w-96 h-12 rounded-md flex-row items-center px-2">
                <TextInput
                    placeholder="Codigo"
                    keyboardType="default"
                    autoCapitalize="none"
                    className="flex-1 pl-2 text-black font-bold"
                    onChangeText={(text) => setCode(text)}
                />
            </View>
            <View>
                <Text className="text-xl font-bold ml-5 mt-4">Tipo</Text>
            </View>
            <View className="bg-inputColor ml-5 border-2 border-gray-200 w-96 h-12 rounded-md flex-row items-center px-2">
                <TextInput
                    placeholder="Tipo"
                    keyboardType="default"
                    autoCapitalize="none"
                    className="flex-1 pl-2 text-black font-bold"
                    onChangeText={(text) => setType(text)}
                />
            </View>
            <View>
                <Text className="text-xl font-bold ml-5 mt-4">Litragem</Text>
            </View>
            <View className="bg-inputColor ml-5 border-2 border-gray-200 w-96 h-12 rounded-md flex-row items-center px-2">
                <TextInput
                    placeholder="Litragem"
                    keyboardType="default"
                    autoCapitalize="none"
                    className="flex-1 pl-2 text-black font-bold"
                    onChangeText={(text) => setLiters(text)}
                />
            </View>
            <View className="justify-end mt-10 ml-5">
                <StyledComponent component={TouchableOpacity}>
                    <TouchableOpacity className="h-14 bg-clientsColor w-96 rounded-md items-center justify-center" onPress={sendData}>
                        <Text className="text-white font-medium font-Principal text-md">
                            Criar
                        </Text>
                    </TouchableOpacity>
                </StyledComponent>
            </View>
        </View>
    );
}
