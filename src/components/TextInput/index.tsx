import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";

export default function InputText({ label }) {
    const [inputValue, setInputValue] = useState('');

    return (
        <View className="w-80">

            <View className="bg-inputColor border-2 border-gray-200 h-12 rounded-md flex-row items-center px-2">
                <TextInput
                    onChangeText={setInputValue}
                    value={inputValue}
                    placeholder={label}
                    keyboardType="default"
                    autoCapitalize="none"
                    className="flex-1 pl-2 text-black font-bold"
                />
            </View>
        </View>
    );
}
