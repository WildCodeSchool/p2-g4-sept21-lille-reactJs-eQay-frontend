import indoorPollution from 'assets/pollution-interieur-air-sain_6098113.jpg';
// import publicHealth from 'assets/sante-publique-france.png';
import didYouKnow from 'assets/didYouKnow.png';
import logoEcologie from 'assets/logoEcologie.png';
import logoJuraBat from 'assets/logoJuraBat.png';
import erp from 'assets/erp.png';
import moreInformations from 'assets/info.png';
import BurgerMenuMaps from 'Components/BurgerMenuMaps';
import SNews from './style';

export default function News() {
  return (
    <>
      <BurgerMenuMaps />
      <SNews>
        <h1 className="headNews"> Infos</h1>
        <article className="news">
          <div className="title">
            <img
              className="imgDidYouKnow"
              src={didYouKnow}
              alt="Le saviez-vous"
            />
            <h3>
              Oui, notre santé commence par l&#39;air que nous respirons !
            </h3>
          </div>

          <div className="imgContent">
            <p className="contentNews">
              En moyenne nous passons quotidiennement 80% de notre temps à
              l&#39;intérieur de bâtiments dans lesquels l&#39;air que nous
              respirons peut être jusqu&#39;à 10x plus pollué qu&#39;à
              l&#39;extérieur.
            </p>
          </div>
          <img
            className="imgIndoorPollution"
            src={indoorPollution}
            alt="pollution intérieur"
          />
        </article>
        <section>
          <div className="headRegulation">
            {/* <img
              className="imgPublicHealth"
              src={publicHealth}
              alt="santé publique france"
            /> */}
            <div className="titleRegulation">
              <h2>La Réglementation QAI en France</h2>
              <p>
                Récapitulatif des exigences portant suer la qualité d&#39;air
                Intérieur au sein de ERP
              </p>
              <img className="organigramme" src={erp} alt="organigramme" />
            </div>
          </div>
        </section>
        <section className="regulation">
          <h3>Quels sont les ERP soumis à cette réglementation ?</h3>
          <p>Cette obligation s&#39;applique notamment aux :</p>
          <ul>
            <li>
              Établissements d&#39;accueil collectif d&#39;enfants de moins de
              six ans (crèches, halte-garderie, jardins d&#39;enfants, etc.) ;
            </li>
            <li>
              Établissements d&#39;enseignement ou de formation professionnelle
              du premier et du second degrés (écoles maternelles, élémentaires,
              collèges, lycées généraux et professionnels, établissements
              régionaux d&#39;enseignement adapté) ;
            </li>
            <li>
              Établissements sanitaires et sociaux prenant en charge les mineurs
              éloignés de leur famille en raison des difficultés d&#39;ordre
              social ou éducatif, les mineurs handicapés, les mineurs
              délinquants (mentionnés aux 1°, 2°, 4° du I de l&#39;article L
              312-1 du code de l&#39;action sociale et des familles).
            </li>
          </ul>
          <p className="toKnow">
            <span>A noter:</span> cette réglementation vise aussi bien les
            établissements publics, gérés par les collectivités (mairies,
            communautés de commune ou d&#39;agglomération, département, région,
            etc.) que les établissements privés (crèches privées, garderies,
            écoles privées, etc.). C&#39;est le propriétaire du bâtiment qui est
            visé au premier chef par la réglementation, et non son exploitant.
            Cependant, il est impossible de mener à bien les actions nécessaires
            à une mise en conformité réglementaire sans impliquer tous les
            acteurs du bâtiment: le propriétaire, le gestionnaire, et les
            usagers eux-mêmes. Dans le cas où le propriétaire de
            l&#39;établissement ne pourrait être identifié, alors le
            gestionnaire de l&#39;établissement sera la personne de référence
            pour le suivi de ces actions.
          </p>
          <h3>Une entrée en vigueur progressive</h3>
          <p>
            L&#39;entrée en vigueur de ce nouveau dispositif est progressive et
            la surveillance devra être achevée avant le :
          </p>
          <ul>
            <li>
              1er janvier 2018 pour les établissements d&#39;accueil collectif
              d&#39;enfants de moins de six ans, les écoles maternelles et les
              écoles élémentaires ;
            </li>
            <li>
              1er janvier 2020 pour les centres de loisirs et les établissements
              d&#39;enseignement ou de formation professionnelle du second degré
              (collèges, lycées, etc.) ;
            </li>
            <li>1er janvier 2023 pour les autres établissements visés.</li>
          </ul>
          <figure>
            <div className="moreInformation">
              <img
                className="moreInformationLogo"
                src={moreInformations}
                alt="Plus d'information"
              />
              <div className="link">
                <a href=" https://jurad-bat.net/collectivites/reglementation-QAI-france">
                  <img className="linkLogo" src={logoJuraBat} alt="logoJura" />
                </a>
                <a href="https://www.ecologie.gouv.fr/qualite-lair-interieur">
                  <img className="linkLogo" src={logoEcologie} alt="logoGouv" />
                </a>
              </div>
            </div>
          </figure>
          <p className="footNews">
            Parce qu&#39;une meilleur qualité d&#39;air est une priorité et
            qu&#39;il est possible d&#39;agir ensemble.
          </p>
        </section>
      </SNews>
    </>
  );
}
