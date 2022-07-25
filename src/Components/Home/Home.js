import React from 'react';
import styled from 'styled-components';

//IMPORTING COMPONENTS
import Header from '../Header';
import Banner from './Components/Banner';
import Footer from '../Footer';

//IMPORTING ASSETS
import myPhoto from '../../Assets/ThisIsMe.png'

const Container = styled.div`
  width: 100%;
`;

export default function Home() {
  return (
    <Container>
      <Header />
      <Banner 
        image={myPhoto} name="Nady"/>
      <Footer />
    </Container>
  )
}
