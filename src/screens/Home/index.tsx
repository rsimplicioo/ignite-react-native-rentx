import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
 Container
} from './styles';
import { HighlightCard } from '../../components/HighlightCard';
import { Header } from '../../components/Header';

export function Home(){
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation<any>();

  useEffect(() => {
    
  }, []);

  return(
    <Container>

    </Container>
  );
}