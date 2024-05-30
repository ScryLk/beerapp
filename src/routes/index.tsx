import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../pages/LoginScreen';
import HomePage from '../pages/HomePage';
import Barrels from '../pages/Barrels';
import Clients from '../pages/Clients';
import Map from '../pages/Map';
import Reserves from '../pages/Reserves';

const Tab = createStackNavigator();

export default function Menu() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false  }}>
          <Tab.Screen name="LoginScreen" component={LoginScreen} />
          <Tab.Screen name="HomePage" component={HomePage} />
          <Tab.Screen name="Barrels" component={Barrels} />
          <Tab.Screen name="Clients" component={Clients} />
          <Tab.Screen name="Map" component={Map} />
          <Tab.Screen name="Reserves" component={Reserves} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}