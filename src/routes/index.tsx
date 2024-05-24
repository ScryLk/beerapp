import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import FirstWelcomePage from '../pages/welcomePage/FirstWelcomePage';
import SecondWelcomePage from '../pages/welcomePage/SecondWelcomePage';
import ThirdWelcomePage from '../pages/welcomePage/ThirdWelcomePage';
import LoginScreen from '../pages/LoginScreen';
import Services from '../pages/Services';
import MyBudgets from '../pages/Budgets/MyBudgets';
import CreateBudgets from '../pages/Budgets/CreateBudgets/SelectType';
import SelectExistent from '../pages/Budgets/CreateBudgets/SelectExistentBudgets';

import Configurations from '../pages/Configurations';
import Access from '../pages/Configurations/ConfigTypes/Access';
import Language from '../pages/Configurations/ConfigTypes/Language';
import Accessibility from '../pages/Configurations/ConfigTypes/Accessibility';
import SpecsBudget from '../pages/Budgets/CreateBudgets/SpecsBudget';

import Clients from '../pages/Clients';


const Tab = createStackNavigator();

export default function Menu() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false  }}>
          <Tab.Screen name="FirstWelcomePage" component={FirstWelcomePage} />
          <Tab.Screen name="SecondWelcomePage" component={SecondWelcomePage} />
          <Tab.Screen name="ThirdWelcomePage" component={ThirdWelcomePage} />
          <Tab.Screen name="LoginScreen" component={LoginScreen} />
          <Tab.Screen name="Services" component={Services} />
          <Tab.Screen name="MyBudgets" component={MyBudgets} />
          <Tab.Screen name="CreateBudgets" component={CreateBudgets} />
          <Tab.Screen name="SelectExistent" component={SelectExistent} />
          <Tab.Screen name="Configurations" component={Configurations} />
          <Tab.Screen name="Access" component={Access} />
          <Tab.Screen name="language" component={Language} />
          <Tab.Screen name="Accessibility" component={Accessibility} />
          <Tab.Screen name="SpecsBudget" component={SpecsBudget} />
          <Tab.Screen name="Clients" component={Clients} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}