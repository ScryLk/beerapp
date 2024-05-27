import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export const LanguageSelect = () => {
  const [selectedValue, setSelectedValue] = useState('Português');

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
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
          style={{
            inputIOS: styles.inputIOS,
            inputAndroid: styles.inputAndroid,
          }}
        />
      </View>
      <View style={styles.iconContainer}>
        <FontAwesomeIcon icon={faChevronDown} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0', // Substitua 'inputColor' pela cor desejada
    flexDirection: 'row',
    width: '100%',
    height: 56, // Altura em pixels (equivalente a 14 * 4)
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: 'grey'
  },
  pickerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  inputIOS: {
    fontSize: 16,
    color: '#000', // Cor da label no iOS
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  inputAndroid: {
    fontSize: 16,
    color: '#000', // Cor da label no Android
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  iconContainer: {
    marginRight: 20,
  },
});
