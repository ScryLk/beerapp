import { Text, View } from "react-native";
import HeaderBackPlus from "../../../components/Headers/HeaderBackPlus";
import SearchBar from "../../../components/SearchBar";
import { SelectButton } from "../../../components/PrimaryButton";

export default function MyBudgets() {
    return (
    <View className="items-center flex-1 mt-20">
        <HeaderBackPlus title="Meus Orçamentos"/>
        <SearchBar />
        <View className="item-center justify-center flex-1">
            <Text className="text-lg">Nenhum Orcamento Encontrado </Text>
        </View>
        <SelectButton />
    </View>
    );
}