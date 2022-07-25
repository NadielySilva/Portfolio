import React from 'react';
import styled from 'styled-components';

//IMPORTING ASSETS
import myGithubIcon from "../Assets/github_icon.png"
import myLinkedinIcon from "../Assets/linkedin_icon.png" 

const Container = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Icon = styled.img`
  width: 4vw;
  height: 5vh;
  object-fit: contain;

  :hover{
      cursor: pointer;
  }
`;

const SocialMedia = styled.div`
  width: 20vw;
  height: 10vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default function Footer() {
  return (
    <Container>
      <SocialMedia>
        <a target='_blank' rel="noreferrer" href='https://github.com/NadielySilva'><Icon src={myGithubIcon} alt="" /></a>
        <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/nadielysilva/'><Icon src={myLinkedinIcon} alt="" /></a>
      </SocialMedia>
    </Container>
  )
}
