import React, { useState, useEffect } from "react";
import { Text, View, Alert, Linking } from "react-native";
import HeaderBackPlusReserves from "../../components/Headers/HeaderBackPlusReserves";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser, faMap, faCheck } from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Reserves() {
  const [reservesData, setReservesData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzE4NTg3OTkyLCJleHAiOjE3MTg1OTE1OTJ9.gplQZ6ubMDL7mSUD98fMLLMepOOB1mrcYum1gR0GgPQ");

        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow"
        };

        const response = await fetch("http://172.20.10.2:3000/reservas", requestOptions);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await response.json();
        setReservesData(result); // Atualiza o estado com os dados recebidos
      } catch (error) {
        setError(error.toString());
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Função para abrir o Google Maps com a localização específica e notificar
  const openGoogleMaps = async (latitude, longitude, reserveId) => {
    try {
      // Notificar via endpoint /reservas/notify/:id
      const myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzE4NTg3OTkyLCJleHAiOjE3MTg1OTE1OTJ9.gplQZ6ubMDL7mSUD98fMLLMepOOB1mrcYum1gR0GgPQ");
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        redirect: "follow"
      };

      const notifyResponse = await fetch(`http://172.20.10.2:3000/reservas/notify/${reserveId}`, requestOptions);
      if (!notifyResponse.ok) {
        throw new Error('Failed to notify');
      }

      console.log("Notification sent successfully");

      // Abrir o Google Maps
      const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
      Linking.openURL(url);

    } catch (error) {
      console.error("Error opening Google Maps or notifying:", error);
      Alert.alert('Erro', 'Não foi possível abrir o mapa ou notificar.');
    }
  };

  // Função para confirmar a reserva e exibir um alerta
  const confirmReservation = async (id) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzE4NTg3OTkyLCJleHAiOjE3MTg1OTE1OTJ9.gplQZ6ubMDL7mSUD98fMLLMepOOB1mrcYum1gR0GgPQ");
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        redirect: "follow"
      };

      const response = await fetch(`http://172.20.10.2:3000/reservas/${id}`, requestOptions);
      if (!response.ok) {
        throw new Error('Failed to confirm reservation');
      }

      // Atualizar o estado para refletir a reserva confirmada
      const updatedReservesData = [...reservesData];
      const updatedIndex = updatedReservesData.findIndex(reserve => reserve.id === id);
      if (updatedIndex !== -1) {
        updatedReservesData[updatedIndex].confirmada = true; // Supondo que `confirmada` seja um campo na sua estrutura de dados da reserva
        setReservesData(updatedReservesData);
        Alert.alert('Reserva Confirmada', 'A reserva foi confirmada com sucesso!');
      }
    } catch (error) {
      setError(error.toString());
      console.error("Error confirming reservation:", error);
    }
  };

  return (
    <View className="mt-12">
      <HeaderBackPlusReserves title={"Reservas"} />
      {error ? (
        <Text className="ml-5 mt-5 text-red-500">{error}</Text>
      ) : (
        reservesData.map((reserve, index) => (
          <View key={index} className="flex-col bg-gray-200 border-2 border-slate-300 mt-2 w-96 ml-6 rounded-lg h-36 justify-center">
            <View className="flex-row mb-3 ml-5 items-center">
              <Text>{index + 1}</Text>
              <Text className="ml-2 font-bold text-lg">{reserve.barril.codigo}</Text>
            </View>
            <View className="flex-row justify-between px-2">
              <View className="flex-col items-center">
                <View className="bg-slate-300 w-16 h-16 justify-center items-center rounded-full">
                <FontAwesomeIcon icon={faUser} color="black" size={20} />
                <Text>{reserve.cliente.nome}</Text>
                </View>
              </View>
              <View className="flex-col items-center">
              <View className="bg-slate-300 w-16 h-16 justify-center items-center rounded-full">
                <TouchableOpacity onPress={() => openGoogleMaps(reserve.latitude, reserve.longitude, reserve.id)}>
                  <FontAwesomeIcon icon={faMap} color="black" size={20} />
                </TouchableOpacity>
                </View>
              </View>
              <View className="flex-col items-center">
              <View className="bg-slate-300 w-16 h-16 justify-center items-center rounded-full">
                <TouchableOpacity onPress={() => confirmReservation(reserve.id)}>
                  <FontAwesomeIcon icon={faCheck} size={20} color={reserve.confirmada ? "green" : "black"} />
                </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))
      )}
    </View>
  );
}
