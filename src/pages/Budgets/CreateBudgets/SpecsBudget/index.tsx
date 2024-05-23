import { Text, View } from "react-native";
import HeaderOnlyBack from "../../../../components/Headers/HeaderOnlyBack";
import SearchBar from "../../../../components/TextInput";

export default function SpecsBudget() {
    return (
        <View className="mt-20">
        <HeaderOnlyBack title={"Especificações"} />
        <View className="ml-5 mt-10">
        <SearchBar />
        </View>
        
        </View>
    );
}
