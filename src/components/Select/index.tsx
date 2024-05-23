import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export const LanguageSelect = () => {
  const [selectedValue, setSelectedValue] = useState('Português');

  return (
    <View style={styles.container}>
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
        style={pickerSelectStyles}
        useNativeAndroidPickerStyle={false} // Use custom styles for Android
        placeholder={{}} // No placeholder
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 3,
    color: 'black',
    paddingRight: 30, // To ensure the text is never behind the icon
    backgroundColor: 'white',
    width: '100%', // Full width
    textAlign: 'center', // Center text
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: '#6750A4',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // To ensure the text is never behind the icon
    backgroundColor: '#6750A4',
    width: '100%', // Full width
    textAlign: 'center', // Center text
  },
  iconContainer: {
    top: 10,
    right: 12,
  },
});
