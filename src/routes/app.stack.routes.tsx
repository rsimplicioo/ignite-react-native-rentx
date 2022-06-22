import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ShoppingCartIcon } from '../components/ShoppingCartIcon';

import { Home } from '../screens/Home';
import { ShoppingCart } from '../screens/ShoppingCart';

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
  return(
    <Navigator initialRouteName="Home">
      <Screen 
        name="Home"
        component={Home}
        options={{
          headerTitle:"",
          headerRight: (props) => <ShoppingCartIcon counterMarket={5} {...props} />
        }}
      />
      <Screen 
        name="ShoppingCart"
        component={ShoppingCart}
        options={{
          headerTitle:""
        }}
      />
    </Navigator>
  )
}