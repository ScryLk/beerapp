import React, { useEffect, useState, useCallback } from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import HeaderBackPlusClient from "../../components/Headers/HeaderBackPlusClient";
import { faPhone, faMap, faMapPin, faSync } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [error, setError] = useState(null);

  const fetchClients = useCallback(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch("http://172.20.10.2:3000/clientes/", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((result) => {
        setClients(result);
        setError(null);
      })
      .catch((error) => {
        setError(error.toString());
        console.error('Erro ao buscar dados:', error);
      });
  }, []);

  useEffect(() => {
    fetchClients();
  }, [fetchClients]);

  return (
    <SafeAreaView className="flex-1">
      <HeaderBackPlusClient title={"Clientes"} />
      <View className="flex-row justify-between items-center mx-5 mt-5">
        <Text className="text-2xl font-bold">Clientes</Text>
        <TouchableOpacity onPress={fetchClients}>
          <FontAwesomeIcon icon={faSync} size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {error ? (
          <Text className="text-red-500 ml-5 mt-5">{error}</Text>
        ) : (
          clients.map((client, index) => (
            <View key={index} className="items-center bg-inputColor mt-5 w-96 ml-5 rounded-lg h-28 justify-center">
              <View className="flex-row w-96 mb-3 ml-5 items-center">
                <View className="mr-4">
                  <Text>{index + 1}</Text>
                </View>
                <View className="ml-5">
                  <Text className="font-bold text-lg">{client.nome}</Text>
                </View>
              </View>
              <View className="flex-row w-96 mb-2 ml-32 items-center">
                <FontAwesomeIcon icon={faPhone} style={{ color: "gray" }} />
                <Text className="ml-2">{client.numero}</Text>
                <View className="bg-slate-300 w-6 h-6 ml-auto justify-center items-center rounded-full">
                  <TouchableOpacity>
                    <FontAwesomeIcon icon={faMap} color="gray" />
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex-row w-96 mb-2 ml-32 items-center">
                <FontAwesomeIcon icon={faMapPin} style={{ color: "gray" }} />
                <Text className="ml-2">{client.endereco}</Text>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
