import HeanderOnlyBack from '../../../components/Headers/HeaderOnlyBack';
import { Text, View } from 'react-native';
import InputText from '../../../components/TextInput';
import { CreateButton } from '../../../components/Buttons';


export default function CreateBarrels() {
    return (
        <View className='mt-10'>
            <HeanderOnlyBack title="Adicionar Barril" />
            <View>
                <Text className="text-xl font-bold ml-5 mt-4">Codigo</Text>
            </View>
            <View className="flex-row justify-center items-center">
            <InputText />
            </View>
            <View>
                <Text className="text-xl font-bold ml-5 mt-4">Tipo</Text>
            </View>
            <View className="flex-row justify-center items-center">
            <InputText />
            </View>
            <View>
                <Text className="text-xl font-bold ml-5 mt-4">Litragem</Text>
            </View>
            <View className="flex-row justify-center items-center">
            <InputText />
            </View>
            <View className='flex-row justify-center items-center'>
                <CreateButton />
            </View>
        </View>
    );
}