import React from 'react';
import styled from 'styled-components';

const AktivitaInner = styled.div`
  border-bottom: 3px solid black;
  width: calc(100% - 50px);
  margin: 0 auto;
  display: block;
  padding-bottom: 35px;
  margin-bottom: 90px;

  h2 {
    font-family: Avenir-Black;
    font-size: 20px;
    color: #000000;
    text-align: right;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  img {
    width: calc(100%);
    margin: 0 auto;
    display: block;
  }

  div {
    width: calc(100%);
    margin: 0 auto;
    display: block;

    a {
      font-family: Avenir-Medium;
      font-size: 16px;
      color: #000000 !important;
      line-height: 24px;
      margin-top: 5px;

    }

    p {
      font-family: Avenir-Medium;
      font-size: 16px;
      color: #000000;
      line-height: 24px;
      margin-bottom: 20px;
      margin-top: 20px;
    }
  }

  ${({ posledni }) => posledni && `
    border-bottom: none;
    margin-bottom: 0px;
  `}
`;

const Aktivita = props => {
  return (
    <AktivitaInner posledni={props.posledni}>
      <h2 data-sal="fade" data-sal-duration="500">{props.nadpis}</h2>
      <img alt={props.nadpis} data-sal="slide-up" data-sal-duration="500" src={props.img} />
      <div data-sal="fade" data-sal-duration="700">
        {props.children}
      </div>
    </AktivitaInner>
  );
}

export default Aktivita;
