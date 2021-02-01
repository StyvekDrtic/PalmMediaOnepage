import React from 'react';
import styled from 'styled-components';

const FooterInner = styled.footer`
  background: black;
  padding: 60px 0;

  .bublina {

  }

  h2 {
    font-family: Avenir-Black;
    font-size: 26px;
    color: #FFFFFF;
    text-align: right;
    width: calc(100% - 50px);
    margin: 0 auto;
    text-transform: uppercase;
    max-width: calc(600px - 50px);
  }

  .footerWrap {
    width: calc(100% - 50px);
    margin: 0 auto;
    margin-top: 30px;
    max-width: calc(600px - 50px);

    div {
      font-family: Avenir-Book;
      font-size: 16px;
      color: #FFFFFF;
      line-height: 28px;
    }

    .bold {
      font-family: Avenir-Heavy;
      color: #FFFFFF;
    }

    a {
      display: inline-block;
      text-decoration: none;
    }

    .meh {
      color: gray;
    }
  }

  .copyright {
    text-align: center;
    text-transform: uppercase;
    border-top: 5px solid white;
    width: calc(100% - 50px);
    margin: 0 auto;
    padding-top: 10px;
    margin-top: 60px;
    max-width: calc(600px - 50px);
    
    span {
      font-family: Avenir-Black;
      font-size: 14px;
      color: #FFFFFF;
    }
  }
`;

const Footer = () => {
  return (
    <FooterInner id="kontakt">
      <div className="bublina"></div>
      <h2>Kontakt</h2>
      <div className="footerWrap">
        <div className="bold">Goodbye s.r.o.</div>
        <div>IČO 08319588</div>
        <div>Na Kopci 164,</div>
        <div>251 62 Svojetice</div>
        <br />
        <div>Národní 135/14 Prague 110 00</div>
        <br />
        <div className="meh"><a href="tel:605176305"className="bold">702 009 441</a> — Goodbye</div>
        <div className="meh"><a href="tel:605176305"className="bold">605 176 305</a> — Agency</div>
        <div className="meh"><a href="tel:732400851"className="bold">732 400 851</a> — Najdi Mazlíčka</div>
        <div className="meh"><a href="tel:+49 89 55209469"className="bold">+49 89 55209469</a> — DE</div>
        <div className="meh"><a href="tel:+41 31 508 76 26"className="bold">+41 31 508 76 26</a> — CH</div>
        <div className="meh"><a href="tel:+43 720 022447"className="bold">+43 720 022447</a> — AT</div>
        <br />
        <div className="meh">jiri@palmmedia.cz</div>
        <div className="meh">podpora@goodbye.cz</div>
        <div className="meh">podpora@najdimazlicka.cz</div>
        <div className="meh">support@findedeinhaustier.de</div>
        <div className="meh">podpora@mojezavet.cz</div>
      </div>
      <div className="copyright">
        <span>Copyright © 2020</span>
      </div>
    </FooterInner>
  );
}

export default Footer;
