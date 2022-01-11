import React, { useState, useRef } from 'react';
import { FlatList, ViewToken } from 'react-native';

import { Bullet } from '../../components/Bullet';

import {
 Container,
 ImageIndexes,
 CarImageWrapper,
 CarImage,
} from './styles';

interface Props{
  imagesUrl: string[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImageSlider({imagesUrl}: Props){
  const [imageIdex, setImageIdex] = useState(0);

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!;
    setImageIdex(index);
  });

  return(
    <Container>
      <ImageIndexes>
        {
          imagesUrl.map((_, index) => (
            <Bullet 
              key={String(index)}
              active={index === imageIdex} 
            />
          ))
        }
      </ImageIndexes>
      
      <FlatList 
        data={imagesUrl}
        keyExtractor={key => key}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage 
              source={{ uri: item }}
              resizeMode="contain"
            />
          </CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}  
        onViewableItemsChanged={indexChanged.current}
      />
      
    </Container>
  );
}