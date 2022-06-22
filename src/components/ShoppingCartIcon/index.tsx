import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import { useShoppingCart } from '../../hooks/shoppingCart';

import {
 Container,
 ContainerCart,
 ContainerCounter,
 CounterText
} from './styles';

export function ShoppingCartIcon(){
  const { totalProducts } = useShoppingCart();
  const navigation = useNavigation<any>();

  function handleNavigationShoppingCart(){
    navigation.navigate('ShoppingCart');
  }

  return(
    <Container>
      <ContainerCart onPress={handleNavigationShoppingCart}>
        <Feather size={30} name="shopping-cart" />
        <ContainerCounter>
          <CounterText>
            { totalProducts }
          </CounterText>
        </ContainerCounter>
      </ContainerCart>
    </Container>
  );
}