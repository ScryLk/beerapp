import HeanderOnlyBack from '../../../components/Headers/HeaderOnlyBack';
import { Text, View } from 'react-native';
import InputText from '../../../components/TextInput';
import { CreateButton } from '../../../components/Buttons';


export default function CreateClients() {
    return (
        <View className='mt-10'>
            <HeanderOnlyBack title="Adicionar Cliente" />
            <View>
                <Text className="text-xl font-bold ml-5 mt-4">Nome</Text>
            </View>
            <View className="flex-row justify-center items-center">
            <InputText />
            </View>
            <View>
                <Text className="text-xl font-bold ml-5 mt-4">Número</Text>
            </View>
            <View className="flex-row justify-center items-center">
            <InputText />
            </View>
            <View>
                <Text className="text-xl font-bold ml-5 mt-4">Endereco</Text>
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