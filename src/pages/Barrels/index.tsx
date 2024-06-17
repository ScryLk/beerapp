import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import SearchBar from "../../components/SearchBar";
import ComponentBarrels from "../../components/ComponentBarrels";
import HeaderBackPlusBarrels from "../../components/Headers/HeaderBackPlusBarrels";
import { faClipboard, faDroplet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function Barrels() {
    const [barrels, setBarrels] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://172.20.10.2:3000/barris")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => setBarrels(data))
            .catch(error => {
                setError(error.toString());
                console.error('Erro ao buscar dados:', error);
            });
    }, []);

    return (
        <View className="mt-10">
            <HeaderBackPlusBarrels title={"Meus Barris"} />
            <View className="ml-5">
                <SearchBar />
            </View>
            {error ? (
                <Text className="text-red-500 ml-5 mt-5">{error}</Text>
            ) : (
                <View>
                    {barrels.map((barrel, index) => (
                        <View key={index} className="items-center bg-inputColor mt-5 w-96 ml-5 rounded-lg h-28 justify-center">
                            <View className="flex-row w-96 mb-3 ml-5 items-center">
                                <View className="mr-4">
                                    <Text>{index + 1}</Text>
                                </View>
                                <View className="ml-5">
                                    <Text className="font-bold text-lg">{barrel.codigo}</Text>
                                </View>
                            </View>
                            <View className="flex-row w-96 mb-2 ml-32 items-center">
                                <FontAwesomeIcon icon={faClipboard} style={{ color: "gray" }} />
                                <Text className="ml-2">{barrel.tipo}</Text>
                                <View className="bg-red-500 w-6 h-6 ml-auto rounded-full"></View>
                            </View>
                            <View className="flex-row w-96 mb-2 ml-32 items-center">
                                <FontAwesomeIcon icon={faDroplet} style={{ color: "gray" }} />
                                <Text className="ml-2">{barrel.litragem}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            )}
        </View>
    );
}
