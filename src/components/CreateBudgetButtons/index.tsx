import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPrint, faList } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

export default function CreateBudgetButtons() {
    const navigation = useNavigation();
    return(
        <View>
            <TouchableOpacity className="bg-slate-300 mt-10 w-80 h-20 py-2 px-4 rounded-lg items-start align-middle justify-center" onPress={() => {navigation.navigate('SelectExistent');}}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                    <FontAwesomeIcon icon={faPrint} />
                    <Text className="text-black ml-5">Selecionar máquina existente</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity className="bg-slate-300 mt-5 w-80 h-20 py-2 px-4 rounded-lg items-start align-middle justify-center">
                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                    <FontAwesomeIcon icon={faList} />
                    <Text className="text-black ml-5">Inserir os dados manualmente</Text>
                </View>
            </TouchableOpacity>
        </View>
    ); 
}


