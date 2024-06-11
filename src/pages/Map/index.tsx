import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import HeaderOnlyBack from "../../components/Headers/HeaderOnlyBack";

export default function Localizate() {
    return (
        <View className="mt-10">
            <HeaderOnlyBack title={"Localizar"} />
            <View className="items-center justify-center h-screen">
            <MapView
            className="w-96 h-4/5 mb-36 rounded-lg"
            initialRegion={{
              latitude: -28.2901,
              longitude: -53.4909,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            {/*<Marker coordinate={""} />*/}
          </MapView>
            </View>
        </View>
    );
}