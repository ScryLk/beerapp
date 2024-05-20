import React from "react";
import { Text, View, Image } from "react-native";
import { SkipButton } from "../../../components/SkipButton";
import Steps from "../../../components/WelcomeStepper";

const Figure = require("../../../assets/images/boy.png");

export default function FirstWelcomePage({navigation}) {
  return (
    <View className="flex-1 items-center justify-center mt-80 text-black ">
      <SkipButton />
      <View className="flex-1 items-center justify-center mb-96 ">
        {<Image source={Figure} />}
        <View className="mt-20" />
        <Text className="font-bold text-2xl">
          Vamos lá
        </Text>
        <View className="mb-20" />
        <Steps actualStep={2  } navigate={()=>{
          navigation.navigate('LoginScreen');
        }}/>
      </View>
      <View className="mb-20" />
    </View>
  );
}
