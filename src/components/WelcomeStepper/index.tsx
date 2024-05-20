import {ProgressStep, ProgressSteps} from 'react-native-progress-steps';
import { TouchableOpacity, Text, View } from "react-native";
import PrimaryButton from '../PrimaryButton';
import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';

const activeStepIconBorderColor = '#6359E7';
const progressBarColor = 'white';
const activeStepIconColor = '#6359E7';
const activeLabelColor = "red";
const labelFontSize = 2;
const labelColor = 'white'

interface StepsProps {
    navigate: () => void;
    actualStep: number;
}

export default function Steps({actualStep, navigate}: StepsProps) {
    

    function onNext() {
        navigate();
    }

    return (
        <View style={{flex: 1}}>
            <ProgressSteps 
                activeStep={actualStep}
                activeStepIconBorderColor={activeStepIconBorderColor}
                progressBarColor={progressBarColor}
                activeStepIconColor={activeStepIconColor}
                activeLabelColor={activeLabelColor}
                labelColor={labelColor}
            >
                <ProgressStep label="First Step" nextBtnTextStyle={{ color: 'white'}} previousBtnTextStyle={{color: 'white'}} labelStyle={{fontSize: labelFontSize}} renderStepIndicator={() => <View />}>
                    <View style={{ alignItems: 'center' }} />
                </ProgressStep>
                <ProgressStep label="Second Step" nextBtnTextStyle={{color: 'white'}} previousBtnTextStyle={{color: 'white'}} labelStyle={{fontSize: labelFontSize}} renderStepIndicator={() => <View />}>
                    <View style={{ alignItems: 'center' }} />
                </ProgressStep>
                <ProgressStep label="Third Step" nextBtnTextStyle={{color: 'white'}} previousBtnTextStyle={{color: 'white'}} labelStyle={{fontSize: labelFontSize}} renderStepIndicator={() => <View />}>
                    <View style={{ alignItems: 'center' }} />
                </ProgressStep>
            </ProgressSteps>
            <PrimaryButton onPress={onNext} />
        </View>
    )
}