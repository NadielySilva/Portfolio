import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 80vh;
    background-color: black;
`;

const Photo = styled.img`
    width: 30vw;
    height: 45vh;
    object-fit: contain;
`;

export default function Banner({image, name, size}) {
  return (
    <Container>
      <Photo 
        src={image}
        alt={name} 
        />
    </Container>
  )
}
