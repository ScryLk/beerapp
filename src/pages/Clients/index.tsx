import { Text, View } from "react-native";
import HeaderBackPlusClient from "../../components/Headers/HeaderBackPlusClient";
import ComponentClient from "../../components/ComponentClients";

export default function Clients() {
    return (
    <View className="mt-10">
    <HeaderBackPlusClient title={"Clientes"} />
    <ComponentClient />
    </View>
    
    );
}