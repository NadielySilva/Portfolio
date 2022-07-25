import React from 'react';
import styled from 'styled-components';

//IMPORTING COMPONENTS
import Header from '../Header';
import Footer from '../Footer';

//IMPORTING ASSETS
import Todoflix from "../../Assets/Todoflix.png"
import GirlInGreen from "../../Assets/GirlInGreen.png"
import ODSVilaNasser from "../../Assets/ODSVilaNasser.png"

const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 18px;
`;

const CaseContainer = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  margin-bottom: 10px;
`;

const Screenshot = styled.img`
  width: 30vw;
  height: 30vh;
  object-fit: cover;
  border: none;
  border-radius: 16px;
  margin-right: 10px;
`;

const Paragraph = styled.p`
  font-family: 'Exo', sans-serif;
  font-size: 1.15rem;
  text-indent: 3ch;
  line-height: 1.25rem;
  margin-bottom: 10px;
`;

function PortfolioLink({ image, title, proposal, tools, link }) {
  return (
    <CaseContainer>
      <a target="_blank" rel="noreferrer" href={link}>
        <Screenshot src={image} alt={`Screenshot do site ${title}.Click para ir para o site.`} />
      </a>
      <Paragraph>A proposta deste projeto foi {proposal} em torno do framework ReactJS usando {tools}.</Paragraph>
    </CaseContainer>
  )
}

export default function CaseStudies() {
  return (
    <div>
      <Header />
      <Content>
        <PortfolioLink
          image={Todoflix}
          name="Todoflix"
          link={"https://todoflixx.netlify.app"}
          proposal={"criar uma to-do list de filmes"}
          tools="HTML, styled-components e JavaScript"
        />
        <PortfolioLink
          image={GirlInGreen}
          name="Girl In Green"
          link={"https://thegirlingreen.netlify.app"}
          proposal={"desenvolver uma landing page resonsiva"}
          tools="HTML, styled-components e JavaScript"
        />
        <PortfolioLink
          image={ODSVilaNasser}
          name="ODS Vila Nasser"
          link={"https://odsvilanasser.netlify.app"}
          proposal={"eleborar o design, interface e o conteúdo de uma página clone do website de Objetivos de Desenvolvimento Sustentável da ONU, porém usando o próprio bairro como foco para criar os objetivos"}
          tools="HTML, styled-components e JavaScript"
        />
      </Content>
      <Footer />
    </div>
  )
}
