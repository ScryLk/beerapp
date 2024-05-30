import { Text, View } from "react-native";
import HeaderOnlyBack from "../../components/Headers/HeaderOnlyBack";
import SearchBar from "../../components/SearchBar";
import ComponentBarrels from "../../components/ComponentBarrels";


export default function Barrels() {
    return (
        <View className="mt-10">
            <HeaderOnlyBack title={"Meus Barris"}/>
            <View className="ml-5">
            <SearchBar/>
            </View>
            <ComponentBarrels/>
           
        </View>
        
    );
}