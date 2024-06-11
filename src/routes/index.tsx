import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../pages/LoginScreen';
import HomePage from '../pages/HomePage';

import Map from '../pages/Map';

import Barrels from '../pages/Barrels';
import CreateBarrels from '../pages/Barrels/CreateBarrels';


import Clients from '../pages/Clients';
import CreateClients from '../pages/Clients/CreateClients';

import Reserves from '../pages/Reserves';
import CreateReserves from '../pages/Reserves/CreateReserves';


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
          <Tab.Screen name='CreateClients' component={CreateClients} />
          <Tab.Screen name='CreateBarrels' component={CreateBarrels} />
          <Tab.Screen name='CreateReserves' component={CreateReserves} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}