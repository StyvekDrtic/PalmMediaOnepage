import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => {
  return (
    <Helmet title="PalmMedia">
      <meta name="description" content="Digitální agentura PalmMedia" />
      <meta name="format-detection" content="telephone=no" />
    </Helmet>
  );
}

export default Head;
