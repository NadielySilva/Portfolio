import React from 'react';
import styled from 'styled-components';

//IMPORTING COMPONENTS
import Header from '../Header';
import Footer from '../Footer';

const Content = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  padding: 18px;
`;

const Paragraph = styled.p`
  font-family: 'Exo', sans-serif;
  font-size: 1.15rem;
  text-indent: 3ch;
  line-height: 1.25rem;
  margin-bottom: 10px;
`;

const TitleH2 = styled.h2`
  font-family: 'Maitree', serif;
  widht: 100%;
  height: 5vh;
  margin-top: 18px;
  margin-bottom: 18px;
`;

function AboutMeTxt(){
  return(
    <>
    <TitleH2>Quem sou eu</TitleH2>
    <Paragraph>Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent.Delegadis gente finis, bibendum egestas augue arcu ut est.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Casamentiss faiz malandris se pirulitá.</Paragraph>
    <Paragraph>Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent.Delegadis gente finis, bibendum egestas augue arcu ut est.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Casamentiss faiz malandris se pirulitá.</Paragraph>
    <Paragraph>Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent.Delegadis gente finis, bibendum egestas augue arcu ut est.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Casamentiss faiz malandris se pirulitá.</Paragraph>
    </>
  )
}

export default function AboutMe() {
  return (
    <div>
      <Header />
      <Content>
        <AboutMeTxt />
      </Content>
      <Footer />
    </div>
  )
}
