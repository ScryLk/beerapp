import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SelectButton from "../PrimaryButton";

export default function SelectExistingMachinesInput(title) {
    const [selected, setSelected] = useState(false);

    return (
        <View className="mt-5">
            <TouchableOpacity
                className="bg-slate-300 w-96  h-20 py-2 px-4 rounded-lg justify-center"
                onPress={() => setSelected(!selected)}
            >
                <View className="flex-row items-center justify-between">
                    <Text className="text-black">Equipamento 1</Text>
                    <View className="flex-row items-center">
                        <View
                            className={`w-6 h-6 rounded-full border-2 border-gray-500 ${selected ? 'bg-blue-500' : 'bg-white'}`}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}
