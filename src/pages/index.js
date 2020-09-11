import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Koule from '../components/Koule';
import Aktivita from '../components/Aktivita';
import EmailForm from '../components/EmailForm';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Head from '../components/Head';

import zavet from '../assets/zavet.png';
import mazlicek from '../assets/mazlicek.png';
import agency from '../assets/agency.png';


const Jumbotron = styled.section`
  background: #fff;
  padding-top: 30px;
  padding-bottom: 70px;

  .jumboWrapper {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }
`;

const JumboHeading = styled.h1`
  text-transform: uppercase;
  font-family: Avenir-Black;
  font-size: 43px;
  width: 200px;
  margin-left: 25px;
  margin-top: 45px;

  @media (min-width: 410px) {
    font-size: 55px;
    width: 250px;
  }

  @media (min-width: 550px) {
    font-size: 55px;
    width: 400px;
  }
`;

const JumboP = styled.p`
  font-family: Avenir-Medium;
  font-size: 16px;
  width: calc(100% - 50px);
  max-width: 325px;
  margin-left: 25px;
  color: #000000;
  margin-top: 30px;
  margin-bottom: 40px;

  @media (min-width: 550px) {
    width: calc(100% - 100px);
  }
`;

const Tlacitko = styled(Link)`
  background: #000000;
  font-family: Avenir-Black;
  font-size: 14px;
  color: #FFFFFF;
  letter-spacing: 1px;
  text-align: center;
  padding: 11px 0;
  padding-top: 12px;
  width: 180px;
  display: block;
  text-transform: uppercase;
  text-decoration: none;
  margin-left: 25px;
  margin-bottom: 30px;
`;

const Nostalgie = styled.div`
  font-family: Avenir-Roman;
  font-size: 16px;
  color: #C1C1C1;
  border-top: 1px solid #C1C1C1;
  padding-top: 5px;
  width: calc(100% - 50px);
  margin-left: 25px;
  margin-top: 40px;
  margin-bottom: 0px;
`;

const Aktivity = styled.section`
  margin: 0 auto;
  margin-top: 80px;
  max-width: 600px;
  position: relative;
`;

export default function Home() {

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <div>
      <Head />
      <Jumbotron>
        <div className="jumboWrapper">
          <Header />
          <JumboHeading daata-sal="slide-down" daata-sal-duration="500">the future is now</JumboHeading>
          <Koule />
          <JumboP dataa-sal="fade" dataa-sal-duration="2000">— staráme se především o vlastní projekty, rádi ale pomůžeme i Vám.</JumboP>
          <Tlacitko to="#aktivity">naše aktivity</Tlacitko>
          <Nostalgie>‘17 - 20©</Nostalgie>
        </div>
      </Jumbotron>
      <Aktivity id="aktivity">
        <Aktivita nadpis="Najdi mazlíčka" img={mazlicek}>
          <p>Pomáháme lidem hledat ztracená zvířata s pomocí reklam na sociálních sítích. Do pár hodin tak o ztrátě informujeme tisíce lidí v oblasti, kde se zvíře pohybuje.</p>
          <a href="http://najdimazlicka.cz">najdimazlicka.cz</a>
          <a href="http://findedeinhaustier.de">findedeinhaustier.de</a>
          <a href="http://findedeinhaustier.at">findedeinhaustier.at</a>
          <a href="http://findedeinhaustier.ch">findedeinhaustier.ch</a>
        </Aktivita>
        <Aktivita nadpis="Moje Závěť" img={zavet}>
          <p>Vytvořte si vlastní závěť do 15 minut.<br/>Jednoduše. Přes internet. Bez notáře.</p>
          <a href="https://mojezavet.cz">mojezavet.cz</a>
        </Aktivita>
        <Aktivita posledni nadpis="AGENCY" img={agency}>
          <p>Specializujeme se na tvorbu marketingových kampaní na sociálních sítích a celkovou optimalizaci Vašeho sales funnelu.<br/><br/>V minulosti jsme spolupracovali se značkami jako je Queens, XTV, nebo Dennis Rodman.<br/><br/>Zajímá Vás více? Pojďme se spojit.</p>
        </Aktivita>
        <EmailForm />
      </Aktivity>
      <Footer />
    </div>
  );
}
