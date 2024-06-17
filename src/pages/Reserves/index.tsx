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

        const response = await fetch("http://192.168.0.155:3000/reservas", requestOptions);
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

      const notifyResponse = await fetch(`http://192.168.0.155:3000/reservas/notify/${reserveId}`, requestOptions);
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

      const response = await fetch(`http://192.168.0.155:3000/reservas/${id}`, requestOptions);
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
    <View style={{ marginTop: 50 }}>
      <HeaderBackPlusReserves title={"Reservas"} />
      {error ? (
        <Text style={{ marginLeft: 5, marginTop: 5, color: 'red' }}>{error}</Text>
      ) : (
        reservesData.map((reserve, index) => (
          <View key={index} style={{ alignItems: 'center', backgroundColor: '#f0f0f0', marginTop: 10, width: 320, marginLeft: 5, borderRadius: 10, height: 140, justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', marginLeft: 10, alignItems: 'center' }}>
              <Text>{index + 1}</Text>
              <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 18 }}>{reserve.barril.codigo}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center', marginLeft: 10 }}>
              <FontAwesomeIcon icon={faUser} style={{ color: "gray" }} size={20} />
              <Text style={{ marginLeft: 10 }}>{reserve.cliente.nome}</Text>
            </View>
            <TouchableOpacity style={{ marginTop: 10 }} onPress={() => openGoogleMaps(reserve.latitude, reserve.longitude, reserve.id)}>
              <FontAwesomeIcon icon={faMap} style={{ color: "gray" }} size={20} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => confirmReservation(reserve.id)}>
              <FontAwesomeIcon icon={faCheck} size={20} color={reserve.confirmada ? "green" : "gray"} />
            </TouchableOpacity>
          </View>
        ))
      )}
    </View>
  );
}
