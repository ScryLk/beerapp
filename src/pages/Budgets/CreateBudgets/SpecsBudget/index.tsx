import { Text, View } from "react-native";
import HeaderOnlyBack from "../../../../components/Headers/HeaderOnlyBack";
import SearchBar from "../../../../components/TextInput";
import { PrintResolution } from "../../../../components/Select/Budgets/PrintResolution";
import { SpeedProcessor } from "../../../../components/Select/Budgets/SpeedProcessor";
import { SelectClients } from "../../../../components/Select/Clients/SelectClients";
import { Memory } from "../../../../components/Select/Budgets/Memory";
import { ControlPainel } from "../../../../components/Select/Budgets/ControlPainel";
import { ScrollView } from "react-native-gesture-handler";
import { FrontBackPrint } from "../../../../components/Select/Budgets/FrontBackPrint";
import { Nfc } from "../../../../components/Select/Budgets/Nfc";
import { SpeedCopy } from "../../../../components/Select/Budgets/SpeedCopy";
import { CopyResolution } from "../../../../components/Select/Budgets/CopyResolution";
import { Tooner } from "../../../../components/Select/Budgets/Tooner";
import { CreateButton } from "../../../../components/PrimaryButton";

export default function SpecsBudget() {
  return (
    <View className="flex-1 mt-20">
      <HeaderOnlyBack title={"Especificações"} />
      <View className="ml-5 mt-10">
        <SearchBar />
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className=" w-full rounded-md items-center flex-1 p-4">
          <View className="mt-8 w-full">
            <Text className="font-bold text-xl mb-1">Cliente</Text>
            <SelectClients />
          </View>
          <View className="mt-8 w-full">
            <Text className="font-bold text-lg mb-1">
              Resolução de Impressão
            </Text>
            <PrintResolution />
          </View>
          <View className="mt-8 w-full">
            <Text className="font-bold text-lg mb-1">
              Velocidade do Processador
            </Text>
            <SpeedProcessor />
          </View>
          <View className="mt-8 w-full">
            <Text className="font-bold text-lg mb-1">
                Memória
            </Text>
            <Memory />
          </View>
          <View className="mt-8 w-full mb-5">
            <Text className="font-bold text-lg mb-1">
                Painel de Controle
            </Text>
            <ControlPainel />
          </View>
          <View className="mt-8 w-full mb-5">
            <Text className="font-bold text-lg mb-1">
              Impressão frente e verso automatica
            </Text>
            <FrontBackPrint />
          </View>
          <View className="mt-6 w-full mb-5">
            <Text className="font-bold text-lg mb-1">
                NFC
            </Text>
            <Nfc />
          </View>
          <View className="mt-8 w-full mb-5">
            <Text className="font-bold text-lg mb-1">
                Velocidade de Cópia
            </Text>
            <SpeedCopy />
          </View>
          <View className="mt-8 w-full mb-5">
            <Text className="font-bold text-lg mb-1">
                Resolução de Cópia
            </Text>
            <CopyResolution />
          </View>
          <View className="mt-8 w-full mb-5">
            <Text className="font-bold text-lg mb-1">
                Tooner Para
            </Text>
            <Tooner />
          </View>
        </View>
        <View className="items-center flex-1 justify-center">
          <CreateButton />
        </View>
      </ScrollView>
    </View>
  );
}
