import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { StyledComponent } from 'nativewind';
import InputText from '../TextInput';

export default function CustomModal({ isVisible, onClose }) {
    return (
        <StyledComponent component={Modal} isVisible={isVisible}>
            <View className="bg-white h-96 rounded-md p-6">
                <View className="items-start mb-4">
                    <Text className="text-black font-bold text-xl">Filtros</Text>
                </View>
                
                <View className="mb-4 w-full">
                    <Text className="mb-2">Impressão Mensal</Text>
                    <InputText label="Impressão Mensal" />
                </View>
                <View className="mb-4 w-full">
                    <Text className="mb-2">Impressão Duplex</Text>
                    <InputText label="Impressão Duplex" />
                </View>
                <View className="mb-4 w-full">
                    <Text className="mb-2">Cópia Duplex</Text>
                    <InputText label="Cópia Duplex" />
                </View>
                <View className="flex-row justify-end space-x-4">
                    <TouchableOpacity className="bg-white border-2 border-slate-300 py-2 px-4 rounded-sm items-center justify-center" onPress={onClose}>
                        <Text className="text-black">Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-primary  py-2 px-4 rounded-sm items-center justify-center" onPress={onClose}>
                        <Text className="text-white">FIltrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </StyledComponent>
    );
}
