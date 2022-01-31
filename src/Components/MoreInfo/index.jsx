import BurgerMenuMaps from 'Components/BurgerMenuMaps';
import SMoreInfo from './styles';
import Seuil from '../../assets/Seuil.png';
import Confort from '../../assets/Confort.png';

export default function MoreInfo() {
  return (
    <>
      <BurgerMenuMaps />
      <SMoreInfo>
        <h1 className="moreInfo">En savoir plus </h1>
        <article className="mesure">
          <ul>
            <h2 className="title">Seuils réglementaires et recommandations</h2>
            <li>
              <img alt="test " src={Seuil} />
            </li>
            <div className="confort">
              <h2 className="decoTitle">
                Confort en fonction de l&apos;humidité et de la température de
                l&apos;air
              </h2>
              <li>
                <img className="imgConfort" alt="test" src={Confort} />
              </li>
            </div>
          </ul>
        </article>
      </SMoreInfo>
    </>
  );
}
