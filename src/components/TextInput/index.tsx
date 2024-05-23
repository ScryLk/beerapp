import { useState } from "react";
import { View, TextInput, Text } from "react-native";

export default function SearchBar() {
    const [search, setSearch] = useState('');

    return (
        <View className="w-96">
            <Text className="text-gray-700 font-bold text-lg mb-2">Digite o Título:</Text>
            <View className="bg-inputColor border-2 border-gray-200 h-12 rounded-md flex-row items-center px-2">
                <TextInput
                    onChangeText={setSearch}
                    value={search}
                    placeholder="Digite o Título aqui"
                    keyboardType="default"
                    autoCapitalize="none"
                    className="flex-1 pl-2 text-black font-bold"
                />
            </View>
        </View>
    );
}
