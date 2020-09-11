import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => {
  return (
    <Helmet title="PalmMedia / Digitální Agentura">
      <meta name="description" content="Staráme se především o vlastní projekty, rádi ale pomůžeme i Vám. Specializujeme se na tvorbu marketingových kampaní na sociálních sítích a celkovou optimalizaci Vašeho sales funnelu. V minulosti jsme spolupracovali se značkami jako je Queens, XTV, nebo Dennis Rodman." />
      <meta name="format-detection" content="telephone=no" />
    </Helmet>
  );
}

export default Head;
