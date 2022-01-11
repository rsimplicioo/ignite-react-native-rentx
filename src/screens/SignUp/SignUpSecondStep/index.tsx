import React, { useState } from 'react';
import { 
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { PasswordInput } from '../../../components/PasswordInput';
import { Button } from '../../../components/Button';

import {
 Container,
 Header,
 Steps,
 Title,
 Subtitle,
 Form,
 FormTitle
} from './styles';

interface Params {
  user: {
    name: string;
    email: string; 
    driverLicense: string;
  }
}

export function SignUpSecondStep(){
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const navigation = useNavigation<any>();
  const route = useRoute();
  const theme = useTheme();

  const { user } = route.params as Params;
  console.log(user);

  function handleBack() {
    navigation.goBack();
  }

  function handleRegister() {
    if(!password || !passwordConfirm){
      return Alert.alert('Informe a senha e a confirmação');
    }

    if(password != passwordConfirm){
      return Alert.alert('As senhas não são iguais');
    }

    navigation.navigate('Confirmation', { 
      params: {
        title: 'Conta Criada!', 
        message: `Agora é só fazer o login\ne aproveitar`, 
        nextScreenRoute: 'SignIn' 
      }
    });
  }
  
  return(
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={handleBack} />
            <Steps>
              <Bullet active />
              <Bullet active={false} />
            </Steps>
          </Header>

          <Title>
            Crie sua{'\n'}conta
          </Title>
          <Subtitle>
            Faça seu cadastro{'\n'}
            de forma rápida e fácil
          </Subtitle>

          <Form>
            <FormTitle>2. Senha</FormTitle>
            <PasswordInput 
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
            <PasswordInput 
              iconName="lock"
              placeholder="Repetir Senha"
              onChangeText={setPasswordConfirm}
              value={passwordConfirm}
            />
          </Form>

          <Button 
            color={theme.colors.sucess}
            title="Cadastrar"
            onPress={handleRegister}
          />

        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}