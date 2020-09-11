import React from 'react';
import styled from 'styled-components';

const EmailFormInner = styled.form`
  width: calc(100% - 50px);
  margin: 0 auto;
  padding: 0;
  display: relative;
  margin-bottom: 170px;

  input {
    font-family: Avenir-Medium;
    font-size: 16px;
    color: #000000;
    display: block;
    background: none;
    border: 0;
    border-bottom: 2px solid #C3C3C3;
    padding: 10px 15px;
    width: calc(100% - 30px);
    margin-bottom: 20px;
    border-radius: 0;
  }

  button {
    font-family: Avenir-Black;
    font-size: 14px;
    color: #FFFFFF;
    text-align: center;
    background: black;
    border: 0;
    padding: 10px 35px;
    text-transform: uppercase;
    margin-top: 20px;
  }
`;

const EmailForm = () => {
  return (
    <EmailFormInner action="https://getform.io/f/083ed963-d6c0-4141-8d96-925d97bb86a0" method="POST">
      <input placeholder="E-mail" type="email" name="email" />
      <input placeholder="Zpráva" type="text" name="message" />
      <button type="submit">Odeslat</button>
    </EmailFormInner>
  );
}

export default EmailForm;
