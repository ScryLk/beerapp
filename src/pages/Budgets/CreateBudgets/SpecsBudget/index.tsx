import { Text, TouchableOpacity, View } from "react-native";
import HeaderOnlyBack from "../../../../components/Headers/HeaderOnlyBack";
import SearchBar from "../../../../components/TextInput";
import { PrintResolution } from "../../../../components/Select/Budgets/PrintResolution";
import { SelectClients } from "../../../../components/Select/Clients/SelectClients";

export default function SpecsBudget() {
  return (
    <View className="mt-20">
      <HeaderOnlyBack title={"Especificações"} />
      <View className="ml-5 mt-10">
        <SearchBar />
      </View>
      <View className="bg-inputColor w-96 h-14 rounded-md items-center ml-5 justify-between flex-1">
        <View className="h-20 mt-12 ml-14">
            <View>
            <Text className="font-bold ml-8 text-xl">Cliente</Text>
            </View>
          <SelectClients />
        
        </View>
      </View>
    </View>
  );
}
