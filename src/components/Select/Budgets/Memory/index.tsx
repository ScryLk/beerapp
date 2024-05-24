import React, { useState } from 'react';
import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export const Memory = () => {
  const [selectedValue, setSelectedValue] = useState('Português');

  return (
    <View  className='bg-inputColor flex-row w-96 mr-20 ml-1 h-14  rounded-md items-center justify-between flex-1'>
        <View className='items-center'> 
      </View>
      <View> 
      <RNPickerSelect
        onValueChange={(value) => {
          setSelectedValue(value);
          console.log(value);
        }}
        items={[
          { label: 'Português', value: 'Português' },
          { label: 'Inglês', value: 'Inglês' }
        ]}
        value={selectedValue}
        useNativeAndroidPickerStyle={false} // Use custom styles for Android
        placeholder={{}} // No placeholder
      />
      </View>
      <View className='mr-5'>
      <FontAwesomeIcon icon={faChevronDown} />
      </View>
     
    </View>
  );
};



