import React, { useState } from "react";
import HeaderOnlyBack from "../../../components/Headers/HeaderOnlyBack";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { CreateButton } from "../../../components/Buttons";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { StyledComponent } from "nativewind";

export default function CreateClients() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  const navigation = useNavigation();
  const [markerPosition, setMarkerPosition] = useState({
    latitude: -28.2901,
    longitude: -53.4909,
  });

  const handleMapPress = (e) => {
    setMarkerPosition({
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
    });
  };

  function sendCoordinates() {
    console.log(address);
  }

  function sendData() {
    console.log(name, number, address);
  }

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
        <View className="flex justify-center items-center">
          <MapView
            className="w-96 h-60"
            initialRegion={{
              latitude: -28.2901,
              longitude: -53.4909,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onPress={handleMapPress}
            onTouchEndCapture={sendCoordinates}
            onMarkerSelect={() => setAddress(markerPosition)}
          >
            <Marker coordinate={markerPosition} />
          </MapView>
        </View>
      </View>
      <View className="flex-row justify-center items-center">
        <View className="justify-end mt-10">
          <StyledComponent component={TouchableOpacity}>
            <TouchableOpacity
              className="h-14 bg-clientsColor w-96 rounded-md items-center justify-center"
              onPress={() => sendData()}
            >
              <Text className="text-white font-medium font-Principal text-md" onPress={() => {sendData()}}> 
                Criar
              </Text>
            </TouchableOpacity>
          </StyledComponent>
        </View>
      </View>
    </View>
  );
}
