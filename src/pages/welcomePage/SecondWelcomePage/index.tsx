import React from "react";
import { Text, View, Image } from "react-native";
import { SkipButton } from "../../../components/SkipButton";
import Steps from "../../../components/WelcomeStepper";

const Figure = require("../../../assets/images/gestao.png");

export default function FirstWelcomePage({navigation}) {
  return (
    <View className="flex-1 items-center justify-center mt-80 text-black ">
      <SkipButton />
      <View className="flex-1 items-center justify-center mb-96 ">
        {<Image source={Figure} />}
        <View className="mt-20" />
        <Text className="font-bold text-2xl">
          Tenha uma gestão mais organizada
        </Text>
        <View className="mb-20" />
        <Steps 
        actualStep={1}
        navigate={()=>{
          navigation.navigate('ThirdWelcomePage');
        }}/>
      </View>
      <View className="mb-20" />
    </View>
  );
}
