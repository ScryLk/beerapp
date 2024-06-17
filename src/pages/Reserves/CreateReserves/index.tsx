import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { StyledComponent } from "nativewind";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { FontAwesome } from "@expo/vector-icons";

import HeaderOnlyBack from "../../../components/Headers/HeaderOnlyBack";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CreateReserves() {
  const [selectedBarrel, setSelectedBarrel] = useState(null);
  const [showBarrelPicker, setShowBarrelPicker] = useState(false);
  const [barrels, setBarrels] = useState([]);

  const [selectedClient, setSelectedClient] = useState(null);
  const [showClientPicker, setShowClientPicker] = useState(false);
  const [clients, setClients] = useState([]);

  const [region, setRegion] = useState({
    latitude: -28.2901,
    longitude: -53.4909,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [markerPosition, setMarkerPosition] = useState({
    latitude: -23.5505,
    longitude: -46.6333,
  });

  const [address, setAddress] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [isStartDatePickerVisible, setStartDatePickerVisibility] =
    useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);

  useEffect(() => {
    fetch("http://172.20.10.2:3000/barris/")
      .then((response) => response.json())
      .then((result) => setBarrels(result))
      .catch((error) => console.error(error));

    fetch("http://172.20.10.2:3000/clientes/")
      .then((response) => response.json())
      .then((result) => setClients(result))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    setStartDate(new Date());
  }, []);

  const handleBarrelPickerToggle = () => {
    setShowBarrelPicker(!showBarrelPicker);
  };

  const handleClientPickerToggle = () => {
    setShowClientPicker(!showClientPicker);
  };

  const sendData = async () => {
    if (selectedBarrel === null) {
      Alert.alert("Selecione um barril para continuar");
      return;
    }
    if (selectedClient === null) {
      Alert.alert("Selecione um cliente para continuar");
      return;
    }
    if (startDate === null) {
      Alert.alert("Selecione uma data de início para continuar");
      return;
    }
    if (endDate === null) {
      Alert.alert("Selecione uma data de término para continuar");
      return;
    }

    const oneHourInMillis = 60 * 60 * 1000;

    const dataToSend = {
      dataFinal: endDate.toISOString(),
      dataIncial: startDate.toISOString(),
      clienteId: selectedClient,
      barrilId: selectedBarrel,
      latitude: markerPosition.latitude,
      longitude: markerPosition.longitude,
    };

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
        let token = await AsyncStorage.getItem('token');
        myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzE4NTg3OTkyLCJleHAiOjE3MTg1OTE1OTJ9.gplQZ6ubMDL7mSUD98fMLLMepOOB1mrcYum1gR0GgPQ"
    );

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(dataToSend),
      redirect: "follow",
    };

    fetch("http://172.20.10.2:3000/reservas/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        Alert.alert("Reserva criada com sucesso!");
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("Erro ao criar reserva.");
      });
  };

  const handleMapPress = async (e) => {
    const newCoordinate = e.nativeEvent.coordinate;
    setMarkerPosition(newCoordinate);
    try {
      const [reverseGeocode] =
        await Location.reverseGeocodeAsync(newCoordinate);
      const formattedAddress = `${reverseGeocode.street}, ${reverseGeocode.city}, ${reverseGeocode.region}, ${reverseGeocode.country}`;
      setAddress(formattedAddress);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePlaceSelect = async (data, details) => {
    const { lat, lng } = details.geometry.location;
    const newCoordinate = { latitude: lat, longitude: lng };
    setMarkerPosition(newCoordinate);
    setRegion({
      ...region,
      latitude: lat,
      longitude: lng,
    });
    try {
      const [reverseGeocode] =
        await Location.reverseGeocodeAsync(newCoordinate);
      const formattedAddress = `${reverseGeocode.street}, ${reverseGeocode.city}, ${reverseGeocode.region}, ${reverseGeocode.country}`;
      setAddress(formattedAddress);
    } catch (error) {
      console.error(error);
    }
  };

  const showStartDatePicker = () => {
    setStartDatePickerVisibility(true);
  };

  const hideStartDatePicker = () => {
    setStartDatePickerVisibility(false);
  };

  const handleStartDateConfirm = (date) => {
    setStartDate(date);
    hideStartDatePicker();
  };

  const showEndDatePicker = () => {
    setEndDatePickerVisibility(true);
  };

  const hideEndDatePicker = () => {
    setEndDatePickerVisibility(false);
  };

  const handleEndDateConfirm = (date) => {
    const oneHourInMillis = 60 * 60 * 1000;
  
      setEndDate(date);

    hideEndDatePicker();
  };

  return (
    <SafeAreaView className="flex-1">
      <HeaderOnlyBack title={"Adicionar Reserva"} />
      <ScrollView className="flex-1 mt-10">
        <View>
          <Text className="text-xl font-bold ml-5 mt-4">Barril</Text>
        </View>
        <View className="flex items-center justify-center mt-5">
          <TouchableOpacity
            className="h-12 w-96 -mb-10 bg-white rounded-lg shadow-md flex items-center justify-center"
            onPress={handleBarrelPickerToggle}
          >
            <Text className="text-black">
              {selectedBarrel ? selectedBarrel : "Selecione um barril..."}
            </Text>
          </TouchableOpacity>
          {showBarrelPicker && (
            <Picker
              selectedValue={selectedBarrel}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedBarrel(itemValue);
                setShowBarrelPicker(false);
              }}
              style={{ marginBottom: 90, height: 50, width: "80%" }}
            >
              {barrels.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={`${item.codigo}`}
                  value={item.id}
                />
              ))}
            </Picker>
          )}
        </View>
        <View className="mt-14">
          <Text className="text-xl font-bold ml-5 mt-4">Clientes</Text>
        </View>
        <View className="flex items-center justify-center mt-5">
          <TouchableOpacity
            className="h-12 w-96 -mb-10 bg-white rounded-lg shadow-md flex items-center justify-center"
            onPress={handleClientPickerToggle}
          >
            <Text className="text-black">
              {selectedClient ? selectedClient : "Selecione um Cliente..."}
            </Text>
          </TouchableOpacity>
          {showClientPicker && (
            <Picker
              selectedValue={selectedClient}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedClient(itemValue);
                setShowClientPicker(false);
              }}
              style={{ marginBottom: 90, height: 80, width: "80%" }}
            >
              {clients.map((item, index) => (
                <Picker.Item key={index} label={item.nome} value={item.id} />
              ))}
            </Picker>
          )}
        </View>
        <View className="mt-14 w-96 ml-6">
          <Text className="text-xl font-bold  mt-4">Endereço</Text>
          <GooglePlacesAutocomplete
            placeholder="Pesquisar endereço"
            onPress={handlePlaceSelect}
            query={{
              key: "YOUR_GOOGLE_MAPS_API_KEY", // substitua pela sua chave API do Google Maps
              language: "pt-BR",
            }}
            fetchDetails={true}
            styles={{
              textInput: {
                height: 50,
                borderColor: "#ccc",
                borderWidth: 1,
                borderRadius: 5,
                marginBottom: 10,
                paddingLeft: 10,
              },
            }}
          />
          <View style={{ height: 400, marginVertical: 10 }}>
            <MapView
              style={{ flex: 1 }}
              region={region}
              onPress={handleMapPress}
            >
              <Marker coordinate={markerPosition} />
            </MapView>
          </View>
          <Text className="text-xl font-bold ml-5 mt-4">{address}</Text>
        </View>
        <View className="mt-14 w-96 ml-6">
          <Text className="text-xl font-bold mt-4">Data de Início</Text>
          <TouchableOpacity
            onPress={showStartDatePicker}
            className="flex-row items-center mt-2"
          >
            <FontAwesome name="calendar" size={24} color="black" />
            <Text className="ml-2">
              {startDate
                ? startDate.toLocaleString()
                : "Selecione a data e hora de início"}
            </Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isStartDatePickerVisible}
            mode="datetime"
            onConfirm={handleStartDateConfirm}
            onCancel={hideStartDatePicker}
          />
        </View>
        <View className="mt-14 w-96 ml-6">
          <Text className="text-xl font-bold mt-4">Data de Término</Text>
          <TouchableOpacity
            onPress={showEndDatePicker}
            className="flex-row items-center mt-2"
          >
            <FontAwesome name="calendar" size={24} color="black" />
            <Text className="ml-2">
              {endDate
                ? endDate.toLocaleString()
                : "Selecione a data e hora de término"}
            </Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isEndDatePickerVisible}
            mode="datetime"
            onConfirm={handleEndDateConfirm}
            onCancel={hideEndDatePicker}
          />
        </View>
        <View className="mt-14 mb-10">
          <View className="justify-end mt-10">
            <StyledComponent component={TouchableOpacity}>
              <TouchableOpacity
                className="h-14 bg-clientsColor w-96 rounded-md items-center justify-center ml-6"
                onPress={sendData}
              >
                <Text className="text-white font-medium font-Principal text-md">
                  Criar
                </Text>
              </TouchableOpacity>
            </StyledComponent>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
