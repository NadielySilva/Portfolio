import React from 'react';
import styled from 'styled-components';

//IMPORTING COMPONENTS
import Menu from './Menu';

const Container = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.p`
  font-family: 'Rokkitt', serif;
  font-weight: 900;
  font-size: 5rem;
  line-height: 4rem;
  height: 10vh;
  margin-left: 12px;
`;

const SubContainer = styled.div`
  width: 60vw;
  height: 10vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const PrimaryBtn = styled.button`
  font-family: 'Rokkitt', serif;
  font-size: 1.25rem;
  color: #fff;
  width: 10vw;
  height: 8vh;
  border: none;
  border-radius: 10px;
  margin-right: 12px;
  background-color: #000;

  :hover{
      cursor: pointer;
  }
`;

export default function Header() {
  return (
    <Container>
      <Logo>N</Logo>
      <SubContainer>
        <Menu />
        <PrimaryBtn>Hire me!</PrimaryBtn>
      </SubContainer>
    </Container>
  )
}
