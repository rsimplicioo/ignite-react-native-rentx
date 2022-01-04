import React from 'react';

import {
 Container,
 ImageIndexes,
 ImageIdex,
 CarImageWrapper,
 CarImage,
} from './styles';

interface Props{
  imagesUrl: string[];
}

export function ImageSlider({imagesUrl}: Props){
  return(
    <Container>
      <ImageIndexes>
        <ImageIdex active={true} />
        <ImageIdex active={false} />
        <ImageIdex active={false} />
        <ImageIdex active={false} />
      </ImageIndexes>

      <CarImageWrapper>
        <CarImage 
          source={{ uri: imagesUrl[0] }}
          resizeMode="contain"
        />
      </CarImageWrapper>
    </Container>
  );
}