import { Text, View } from "react-native";
import  HeaderOnlyBack from "../../components/Headers/HeaderOnlyBack";
import SearchBar from "../../components/SearchBar";

export default function Financial () {
    return(
        <View className="items-center flex-1 mt-10">
        <HeaderOnlyBack title="Financeiro"/>
        <SearchBar />
        <View className="item-center justify-center flex-1">
            <Text className="text-lg"> Nenhum Orçamento Encontrado </Text>
        </View>
    </View>
    )
}

