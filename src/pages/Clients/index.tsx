import { Text, View } from "react-native";
import { HeaderBackPlusClient } from "../../components/Headers/HeaderBackPlus";
import SearchBar from "../../components/SearchBar";

export default function Cleints() {
    return (
    <View className="items-center flex-1 mt-10">
        <HeaderBackPlusClient title="Clientes"/>
        <SearchBar />
        <View className="item-center justify-center flex-1">
            <Text className="text-lg">Nenhum Cliente Encontrado</Text>
        </View>
    </View>
    );
}