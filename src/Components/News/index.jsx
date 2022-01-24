import indoorPollution from 'assets/pollution-interieur-air-sain_6098113.jpg';
import publicHealth from 'assets/sante-publique-france.png';
import didYouKnow from 'assets/didYouKnow.png';
import BurgerMenuMaps from 'Components/BurgerMenuMaps';
import SNews from './style';

export default function News() {
  return (
    <>
      <BurgerMenuMaps />
      <SNews>
        <h1 className="headNews"> Infos</h1>
        <article className="news">
          <h3>Oui, notre santé commence par l&#39;air que nous respirons !</h3>
          <div>
            <img
              className="imgDidYouKnow"
              src={didYouKnow}
              alt="Le saviez-vous"
            />
            <div className="imgContent">
              <p className="contentNews">
                En moyenne nous passons quotidiennement 80% de notre temps à
                l&#39;intérieur de bâtiments dans lesquels l&#39;air que nous
                respirons peut être jusqu&#39;à 10x plus pollué qu&#39;à
                l&#39;extérieur.
              </p>

              <img
                className="imgIndoorPollution"
                src={indoorPollution}
                alt="pollution intérieur"
              />
            </div>
            <img
              className="imgPublicHealth"
              src={publicHealth}
              alt="santé publique france"
            />
          </div>
        </article>
      </SNews>
    </>
  );
}
