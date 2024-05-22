import { View, Text, Image } from "react-native";
import { HeaderOnlyBack } from "../../../../components/Headers/HeaderOnlyBack";
import CreateBudgetButtons from "../../../../components/CreateBudgetButtons";


export default function CreateBudgets () {

    const Figure = require("../../../../assets/images/CreateBudget.png");

    return( 
        <View className="flex-1 items-center mt-20">
            <HeaderOnlyBack />
            <View className="mt-10 items-center">
            <Image source={Figure} />
            <Text className="font-bold text-2xl mt-10">Criar Orcamento</Text>
            <CreateBudgetButtons/>
            </View>
        </View>
        
    )
}