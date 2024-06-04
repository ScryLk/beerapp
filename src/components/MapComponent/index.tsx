import {requestForegroundPermissionsAsync, getCurrentPositionAsync, watchPositionAsync, LocationAccuracy} from 'expo-location';
import { useState, useEffect, useRef } from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';


export default function MapComponent() {
  const [location, setLocation] = useState(null);
  const watch = useRef(null);
  const mapRef = useRef(null);

  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();

    if(granted) {
     const currentPosition =  await getCurrentPositionAsync();
     setLocation(currentPosition);
    }
  }

  useEffect(() => { 
    requestLocationPermissions();
  }, []);

  useEffect(() => {
    watch.current = watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1
    }, (response) => {
      setLocation(response);
      mapRef.current?.animateCamera({ 
        pitch: 70, 
        center: response.coords
      })
    });

    return () => {
      if (watch.current) {
        watch.current.remove();
      }
    }
  }, []);

  return (
    <View style={styles.container}>
    {location && 
      <MapView
        style={styles.map}
        ref={mapRef}
        initialRegion={{latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.005, longitudeDelta:0.005}}>
          
        <Marker 
          coordinate={{latitude: location.coords.latitude, longitude: location.coords.longitude}}
        />

        </MapView>
    }
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
  },
});