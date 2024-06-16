import { Text, View, TouchableOpacity } from "react-native";
import HeaderOnlyBack from "../../../components/Headers/HeaderOnlyBack";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { StyledComponent } from "nativewind";

export default function CreateReserves() {
  const [selectedBarrel, setSelectedBarrel] = useState(null);
  const [showBarrelPicker, setShowBarrelPicker] = useState(false);

  const [selectedClient, setSelectedClient] = useState(null);
  const [showClientPicker, setShowClientPicker] = useState(false);

  const Barrels = ["Barril 1", "Barril 2", "Barril 3"];

  const Clients = ["Cliente 1", "Cliente 2"];
  
  const handleBarrelPickerToggle = () => {
    setShowBarrelPicker(!showBarrelPicker);
  };

  const handleClientPickerToggle = () => {
    setShowClientPicker(!showClientPicker);
  };

  const sendData = () => {
    if(selectedBarrel === null || selectedClient === null) {
      alert("Selecione um barril e um cliente para continuar");
      return;
      if(selectedBarrel === null) {
        alert("Selecione um barril para continuar");
        return;
      }
      if(selectedClient === null) {
        alert("Selecione um cliente para continuar");
        return;
      }
    }
  };

  return (
    <View className="mt-10 flex-1">
      <HeaderOnlyBack title={"Adicionar Reserva"} />
      <View>
        <Text className="text-xl font-bold ml-5 mt-4">Barril</Text>
      </View>
      <View className="flex items-center justify-center mt-5">
        <TouchableOpacity
          className="h-12 w-96 -mb-10 bg-white rounded-lg shadow-md flex items-center justify-center"
          onPress={handleBarrelPickerToggle}
        >
          <Text className="text-black">
            {selectedBarrel ? selectedBarrel : "Selecione um barril..."}
          </Text>
        </TouchableOpacity>
        {showBarrelPicker && (
          <Picker
            selectedValue={selectedBarrel}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedBarrel(itemValue);
              setShowBarrelPicker(false);
            }}
            style={{ marginBottom: 90, height: 50, width: "80%" }}
          >
            {Barrels.map((item, index) => (
              <Picker.Item key={index} label={item} value={item} />
            ))}
          </Picker>
        )}
      </View>
      <View className="mt-14">
        <Text className="text-xl font-bold ml-5 mt-4">Clientes</Text>
      </View>
      <View className="flex items-center justify-center mt-5">
        <TouchableOpacity
          className="h-12 w-96 -mb-10 bg-white rounded-lg shadow-md flex items-center justify-center"
          onPress={handleClientPickerToggle}
        >
          <Text className="text-black">
            {selectedClient ? selectedClient : "Selecione um Cliente..."}
          </Text>
        </TouchableOpacity>
        {showClientPicker && (
          <Picker
            selectedValue={selectedClient}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedClient(itemValue);
              setShowClientPicker(false); 
            }}
            style={{ marginBottom: 90, height: 50, width: "80%" }}
          >
            {Clients.map((item, index) => (
              <Picker.Item key={index} label={item} value={item} />
            ))}
          </Picker>
        )}
      </View>
      <View className="mt-14">
        <View className="justify-end mt-10">
          <StyledComponent component={TouchableOpacity} >
            <TouchableOpacity className="h-14 bg-clientsColor w-96 rounded-md items-center justify-center ml-6" onPress={sendData}>
              <Text className="text-white font-medium font-Principal text-md">
                Criar
              </Text>
            </TouchableOpacity>
          </StyledComponent>
        </View>
      </View>
    </View>
  );
}
