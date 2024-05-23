import { View, Text, Image } from "react-native";
import HeaderOnlyBack  from "../../../../components/Headers/HeaderOnlyBack";
import CreateBudgetButtons from "../../../../components/CreateBudgetButtons";


export default function CreateBudgets () {

    const Figure = require("../../../../assets/images/CreateBudget.png");

    return( 
        <View className="flex-1 items-center mt-20">
            <HeaderOnlyBack title={"Criar Orçamento"} />
            <View className="mt-10 items-center">
            <Image source={Figure} />
            <CreateBudgetButtons/>
            </View>
        </View>
        
    )
}