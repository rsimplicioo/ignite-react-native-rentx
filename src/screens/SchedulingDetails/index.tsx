import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { format } from 'date-fns'; 

import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { api } from '../../services/api';

import {
 Container,
 Header,
 CarImages,
 Content,
 Details,
 Description,
 Brand,
 Name,
 Rent,
 Period,
 Price,
 Acessories,
 Footer,
 RentalPeriod,
 CalendarIcon,
 DateInfo,
 DateTitle,
 DateValue,
 RentalPrice,
 RentalPriceLabel,
 RentalPriceDetail,
 RentalPriceQuota,
 RentalPriceTotal,
} from './styles';

interface Params {
  car: CarDTO;
  dates: string[];
}

interface RentalPeriod {
  start: string;
  end: string;
}

export function SchedulingDetails(){
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);

  const route = useRoute();
  const { car, dates } = route.params as Params;

  const rentTotal = Number(dates.length * car.rent.price);

  const navigation = useNavigation<any>();
  const theme = useTheme();

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      end: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
    })
  }, [])

  async function handleConfirmRental() {
    const schedulesByCar = await api.get(`/schedules/${car.id}`);

    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates
    ];

    api.put(`/schedules/${car.id}`, {
      id: car.id,
      unavailable_dates
    })
    .then(() => navigation.navigate('SchedulingComplete'))
    .catch(() => Alert.alert('Não foi possível confirmar o agendamento.'))
  }

  function handleBack() {
    navigation.goBack();
  }

  return(
    <Container>
      <Header>
        <BackButton onPress={handleBack} />
      </Header>

      <CarImages>
        <ImageSlider 
          imagesUrl={car.photos}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Acessories>
          { 
            car.accessories.map(accessory => (
              <Accessory 
                key={accessory.type}
                name={accessory.name}
                icon={getAccessoryIcon(accessory.type)} 
              />
            ))
          }
        </Acessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather 
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>

          <Feather 
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RentalPriceDetail>
            <RentalPriceQuota>{`R$ ${car.rent.price} x${dates.length} diárias`}</RentalPriceQuota>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
          </RentalPriceDetail>
        </RentalPrice>
      </Content>

      <Footer>
        <Button 
          title='Alugar agora' 
          color={theme.colors.sucess} 
          onPress={handleConfirmRental}
        />
      </Footer>

    </Container>
  );
}