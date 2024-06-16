import React, { useState } from "react";
import HeaderOnlyBack from "../../../components/Headers/HeaderOnlyBack";
import { Text, View, TouchableOpacity, TextInput, Alert } from "react-native";
import { StyledComponent } from "nativewind";

export default function CreateClients() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  function sendCoordinates() {
    console.log(address);
  }

  const validateData = () => {
    if (name === "" || number === "" || address === "") {
      Alert.alert("Erro", "Todos os campos devem ser preenchidos.");
      return false;
    }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "nome": name,
      "numero": number,
      "endereco": address
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://192.168.0.155:3000/clientes/", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text();
      })
      .then((result) => {
        Alert.alert("Sucesso", "Cliente Cadastrado com sucesso");
        console.log(result);
      })
      .catch((error) => {
        Alert.alert("Erro", "Erro ao cadastrar cliente");
        console.error(error);
      });

    return true;
  };

  return (
    <View className="mt-10">
      <HeaderOnlyBack title="Adicionar Cliente" />
      <View>
        <Text className="text-xl font-bold ml-5 mt-4">Nome</Text>
      </View>
      <View className="flex-row justify-center items-center">
        <View className="bg-inputColor border-2 border-gray-200 w-96 h-12 rounded-md flex-row items-center px-2">
          <TextInput
            placeholder="Nome"
            keyboardType="default"
            autoCapitalize="none"
            value={name}
            onChangeText={setName}
            className="flex-1 pl-2 text-black font-bold"
          />
        </View>
      </View>
      <View>
        <Text className="text-xl font-bold ml-5 mt-4">Número</Text>
      </View>
      <View className="flex-row justify-center items-center">
        <View className="bg-inputColor border-2 border-gray-200 w-96 h-12 rounded-md flex-row items-center px-2">
          <TextInput
            placeholder="Número"
            keyboardType="default"
            autoCapitalize="none"
            value={number}
            onChangeText={setNumber}
            className="flex-1 pl-2 text-black font-bold"
          />
        </View>
      </View>
      <View>
        <Text className="text-xl font-bold ml-5 mt-4">Endereço</Text>
        <View className="flex-row justify-center items-center">
          <View className="bg-inputColor border-2  border-gray-200 w-96 h-12 rounded-md flex-row items-center px-2">
            <TextInput
              placeholder="Endereço"
              keyboardType="default"
              autoCapitalize="none"
              value={address}
              onChangeText={setAddress}
              className="flex-1 pl-2 text-black font-bold"
            />
          </View>
        </View>
      </View>
      <View className="flex-row justify-center items-center">
        <View className="justify-end mt-10">
          <StyledComponent component={TouchableOpacity}>
            <TouchableOpacity
              className="h-14 bg-clientsColor w-96 rounded-md items-center justify-center"
              onPress={validateData}
            >
              <Text className="text-white font-medium font-Principal text-md">
                Criar
              </Text>
            </TouchableOpacity>
          </StyledComponent>
        </View>
      </View>
    </View>
  );
}
