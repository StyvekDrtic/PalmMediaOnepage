import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Gif = (props) => {

  const [url, setUrl] = useState("https://media.tenor.com/images/5165033b7af0b173d9ea5eb40ddebe96/tenor.gif");
  const [randomCislo, setRandom] = useState(Math.round(Math.random() * 30));
  const [data, setData] = useState();
  const klikac = useRef(null);

  function generateRandom() {
    let cislo = randomCislo;

    if (randomCislo < 30) {
      cislo++;
    }

    else {
      cislo = 0;
    }

    return cislo;
  }

  function updatePic() {
    if (data) {
      setRandom(generateRandom());
      setUrl(data.data.results[randomCislo].media[0].gif.url);
    }
  }

  useEffect(() => {
    if (!data) {
      const slovo = "fire";
      const query = `https://api.tenor.com/v1/search?q=${slovo}&key=D8HMLBAPZPUC&limit=31`;
      axios(query)
        .then((e) => {
          setData(e);
          const noveUrl = e.data.results[randomCislo].media[0].gif.url;
          setUrl(noveUrl);
          updatePic();
        })
        .catch();
    }
  });


  useEffect(() => {
    const interval = setInterval(() => {
      klikac.current.click();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="klikac" ref={klikac} role="none" onClick={updatePic} onKeyDown={updatePic}>
      <img alt="WOOOOOO gif" src={url} />
    </div>
  );
};


const KouleOuter = styled.div`
  img {
    object-fit: cover;
    clip-path: circle(50% at 50% 50%);
    width: 167px;
    height: 167px;
    position: absolute;
    top: 80px;
    right: -50px;
  }
`;

const Koule = () => {
  return (
    <KouleOuter>
      <Gif />
    </KouleOuter>
  );
}

export default Koule;
