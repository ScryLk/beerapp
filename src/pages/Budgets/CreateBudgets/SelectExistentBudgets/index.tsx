import { Text, View } from "react-native";
import SearchBar from "../../../../components/SearchBar";
import SelectExistingMachinesInput from "../../../../components/SelectExistingMachinesInput";
import  { SelectButton }  from "../../../../components/PrimaryButton";
import HeaderBackFilter from "../../../../components/Headers/HeaderBackFilter";

export default function SelectExistent() {
    return (
        <View className="items-center flex-1 mt-10"> 
                <HeaderBackFilter title={"Criar Orçamento"}/>
                <SearchBar />
                <SelectExistingMachinesInput />
                <SelectExistingMachinesInput />
                <SelectButton />
        </View>
    );
}