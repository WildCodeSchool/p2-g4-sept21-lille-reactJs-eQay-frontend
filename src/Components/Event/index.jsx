import BurgerMenuMaps from 'Components/BurgerMenuMaps';
import actu from 'assets/actu.png';
import imgFrontBack from 'assets/frontBackEnd.png';
import EqaiLogo from 'Components/eqaiLogo';
import SEvent from './style';

export default function Event() {
  return (
    <>
      <BurgerMenuMaps />
      <EqaiLogo />
      <SEvent>
        <h1 className="headEvent"> Evénements</h1>
        <img className="imgActu" src={actu} alt="carte" />
        <section className="post">
          <div className="contentPost">
            <p>
              Afin de pouvoir se développer largement et dans les plus brefs
              délais, nous sommes actuellement à la recherche d&#39;un(e)
              développeur/euse front et back-end afin d&#39;optimiser le
              fonctionnement du service d&#39;information eQAI.
            </p>
            <img
              className="imgFrontBack"
              src={imgFrontBack}
              alt="front-end et back-end"
            />
          </div>
        </section>
      </SEvent>
    </>
  );
}
