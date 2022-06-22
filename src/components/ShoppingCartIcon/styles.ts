import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 5px;
`;

export const ContainerCart = styled(RectButton)`
  right: 20px;
`;

export const ContainerCounter = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;

  position: absolute;
  left: 20px;
  bottom: 15px;
  align-items: center;
  justify-content: center;
  background-color: red;
`;

export const CounterText = styled.Text`
  color: white;
  font-weight: bold;
`;