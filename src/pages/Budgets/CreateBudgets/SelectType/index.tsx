import { View, Text, Image } from "react-native";
import { BackButton } from "../../../../components/Buttons";
import CreateBudgetButtons from "../../../../components/CreateBudgetButtons";


export default function CreateBudgets () {

    const Figure = require("../../../../assets/images/CreateBudget.png");

    return( 
        <View className="flex-1 items-center mt-20">
            <BackButton />
            <View className="mt-10 items-center">
            <Image source={Figure} />
            <Text className="font-bold text-2xl mt-10">Criar Orcamento</Text>
            <CreateBudgetButtons/>
            </View>
        </View>
        
    )
}