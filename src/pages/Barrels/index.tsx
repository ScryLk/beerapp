import { Text, View } from "react-native";
import SearchBar from "../../components/SearchBar";
import ComponentBarrels from "../../components/ComponentBarrels";
import HeaderBackPlusBarrels from "../../components/Headers/HeaderBackPlusBarrels";


export default function Barrels() {
    return (
        <View className="mt-10">
            <HeaderBackPlusBarrels title={"Meus Barris"}/>
            <View className="ml-5">
            <SearchBar/>
            </View>
            <ComponentBarrels/>
           
        </View>
        
    );
}