import React from 'react';
import { useWindowDimensions, StatusBar } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { ConfirmButton } from '../../components/ConfirmButton';

import {
 Container,
 Content,
 Title,
 Message,
 Footer
} from './styles';

interface Params {
  params: {
    title: string;
    message: string;
    nextScreenRoute: 'SignIn' | 'Home'
  }
}

export function Confirmation(){
  const route = useRoute();

  const navigation = useNavigation<any>();
  const { width } = useWindowDimensions();

  const { params } = route.params as Params;

  function handleConfirm() {
    navigation.navigate(params.nextScreenRoute);
  }

  return(
    <Container>
      <StatusBar 
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>{params.title}</Title>

        <Message>{params.message}</Message>
      </Content>

      <Footer>
        <ConfirmButton 
          title="OK"
          onPress={handleConfirm} 
        />
      </Footer>
    </Container>
  );
}