import BurgerMenuMaps from 'Components/BurgerMenuMaps';
import SMoreInfo from './styles';
import Seuil from '../../assets/Seuil.jpg';
import Confort from '../../assets/Confort.jpg';

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
            <h2 className="deco title">
              Comfort en fonction de l&apos;humidité et de la température de
              l&apos;air
            </h2>
            <li>
              <img alt="test " src={Confort} />
            </li>
          </ul>
        </article>
      </SMoreInfo>
    </>
  );
}
