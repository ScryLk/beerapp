import { useState } from "react";
import { View, TextInput } from "react-native";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";



export default function SearchBar() {
    const [search, setSearch] = useState('');

    return (
        <View className="bg-inputColor border-2 border-gray-200 w-96 h-12 rounded-md flex-row items-center px-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <TextInput
                onChangeText={setSearch}
                value={search}
                placeholder="Procurar"
                keyboardType="default"
                autoCapitalize="none"
                className="flex-1 pl-2 text-black font-bold"
            />
        </View>
    );
}