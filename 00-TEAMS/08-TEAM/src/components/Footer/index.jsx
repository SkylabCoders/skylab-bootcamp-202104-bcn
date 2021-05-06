import React from 'react';
import './style.scss';

const Footer = () => {
  const whoURL = 'https://www.who.int/es/campaigns/connecting-the-world-to-combat-coronavirus/healthyathome?gclid=CjwKCAjwhMmEBhBwEiwAXwFoEcj-dzrBl0X7XkzIRq2Tm-cTEppHl2EDqHu1QjI0CRUAZoFgGjfLTxoCxFoQAvD_BwE';
  const covidApiURL = 'https://www.github.com/M-Media-Group/Covid-19-API';
  const restCountriesURL = 'https://www.restcountries.eu/';
  const wikipediaURL = 'https://en.wikipedia.org/wiki/COVID-19';

  const githubGax = 'https://github.com/gaxxrodri';
  const githubIsabel = 'https://github.com/IsabelGomez87';
  const githubDani = 'https://github.com/dmartorell';

  return (
    <footer className="footer-element">
      <div className="resources-element">
        <a className="resources-element__link" href={whoURL}>
          World Health Organization
        </a>
        <a className="resources-element__link" href={covidApiURL}>
          M-Media Group Covid API
        </a>
        <a className="resources-element__link" href={restCountriesURL}>
          Rest Countries
        </a>
        <a className="resources-element__link" href={wikipediaURL}>
          Wikipedia Covid-19
        </a>
      </div>
      <div className="aboutUs">
        <a className="aboutUs__link" href={githubGax}>
          GitHub Gax
        </a>
        <a className="aboutUs__link" href={githubDani}>
          GitHub Dani
        </a>
        <a className="aboutUs__link" href={githubIsabel}>
          GitHub Isabel
        </a>
      </div>
      <div className="madeBy-element"> Made by Isabel, Dani, Gax</div>
    </footer>
  );
};

export default Footer;
