import map from 'assets/atlas-obscura-cartes-interactive-merveilles-monde-visiter-une.jpg';
import indoorPollution from 'assets/pollution-interieur-air-sain_6098113.jpg';
import publicHealth from 'assets/sante-publique-france.png';
import didYouKnow from 'assets/bubble-title2.jpg';
import sources from 'assets/sources-pollution.png';
import cloud from 'assets/images.png';
import innerPart from 'assets/Pollution-interieure.jpg';
import stopCovid from 'assets/sifr_cov14_2_std.lang.all.jpg';
import coronavirus from 'assets/coronavirus.png';
import erp from 'assets/erp.png';
import moreInformations from 'assets/info.png';
import allTogether from 'assets/5-astuces-pour-améliorer-la-communauté-de-son-blog.jpg';
import indoorAir from 'assets/pollution_interieur.jpg';
import maskedChild from 'assets/unnamed.jpg';
import openData from 'assets/89_1079_open_data_large.jpg';
import volunteers from 'assets/1554288633350.jpg';
import sensors from 'assets/sensors.JPEG';
import happyChild from 'assets/happyChild.png';
import greenBuildings from 'assets/La-pollution-de-l-air-interieur-touche-les-ecoconstructions1.jpg';

import { useEffect } from 'react';
import AOS from 'aos';
import AboutPage from './style';
import 'aos/dist/aos.css';

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <AboutPage>
      <main>
        <section className="pageTitle container">
          <h1>Qui sommes-nous?</h1>
        </section>
        <section className="whyCreatead container">
          <h2 data-aos="fade-up">Pourquoi avoir créé eQAI ? </h2>
          <p>
            Nous avons créé l&#39;association à but non lucratif (loi 1901) eQAI
            car nous souhaitons fédérer toutes les personnes et organisations
            voulant participer à la création de la première carte interactive de
            la pollution de l&#39;air intérieur des bâtiments.
          </p>
          <figure className="illustrationPicture">
            <img src={map} alt="carte" className="totalWidth" />
          </figure>
          <p className="middle">
            Accessible à toute et tous, gratuite, elle est un véritable outil de
            communication dans un objectif de répondre à une problématique
            encore trop méconnue ou sous-estimée.
          </p>
          <h3>
            <span>Car</span> oui, notre santé commence par l&#39;air que nous
            respirons !
          </h3>
          <figure
            className="illustrationPicture flexCenter marginBottom"
            data-aos="fade-up"
          >
            <img
              src={indoorPollution}
              alt="pollution intérieur"
              className="resizePhoto"
            />
            <img
              src={publicHealth}
              alt="santé publique france"
              className="resizePhoto"
            />
          </figure>
          <figure className="illustrationPicture middle marginBottom">
            <img
              src={didYouKnow}
              alt="Le saviez-vous"
              className="border-half resizePhoto"
            />
          </figure>
          <p className="italic middle marginBottom">
            En moyenne nous passons quotidiennement 80% de notre temps à
            l&#39;intérieur de bâtiments dans lesquels l&#39;air que nous
            respirons peut être jusqu&#39;à 10x plus pollué qu&#39;à
            l&#39;extérieur.
          </p>
          <figure className="illustrationPicture marginBottom">
            <img
              src={sources}
              alt="Sources de pollution de l'air intérieur"
              className="totalWidth"
            />
          </figure>
          <p className="marginBottom">
            eQAI propose une réponse collective et communautaire quant aux
            obligations réglementaires et relative à la Qualité d’air des ERP,
            grâce a un suivi permanent des principaux polluants de l’air
            ambiant. . En effet La loi portant engagement national pour
            l’environnement a rendu obligatoire la surveillance de la qualité de
            l’air intérieur dans certains établissements recevant un public
            sensible (articles L. 221-8 et R. 221-30 et suivants du code de
            l’environnement)
          </p>
          <figure className="illustrationPicture middle marginBottom">
            <img
              src={cloud}
              alt="Le saviez-vous"
              className="resizePhoto border"
            />
          </figure>
          <p className="marginBottom">
            D’autre part, la surveillance de la qualité d’air Intérieur permet
            de prévenir fondamental dans la prévention de la santé et des effets
            sanitaires induis par une pollution intérieure au quotidien.
          </p>
          <figure className="illustrationPicture marginBottom">
            <img src={innerPart} alt="carte" className="totalWidth" />
          </figure>
          <p className="marginBottom">
            En effet De nombreuses études internationales mettent en évidence un
            lien entre les particules fines, le taux de CO2 et la transmission
            de tout type de virus dont la COVID-19.
          </p>
          <figure className="illustrationPicture flexCenter marginBottom">
            <img
              src={stopCovid}
              alt="pollution intérieur"
              className="resizePhoto"
            />
            <img
              src={coronavirus}
              alt="santé publique france"
              className="resizePhoto"
            />
          </figure>
        </section>
        <section>
          <h2>La Réglementation QAI en France </h2>
        </section>
        <p className="marginBottom">
          Récapitulatif des exigences portant suer la qualité d’air Intérieur au
          sein de ERP
        </p>
        <figure className="illustrationPicture marginBottom">
          <img src={erp} alt="carte" className="totalWidth" />
        </figure>
        <h3>Quels sont les ERP soumis à cette réglementation ? </h3>
        <p className="marginBottom">
          Cette obligation s’applique notamment aux :{' '}
        </p>
        <ul className="marginBottom">
          <li>
            Établissements d&#39;accueil collectif d&#39;enfants de moins de six
            ans (crèches, halte-garderie, jardins d&#39;enfants, etc.) ;
          </li>
          <li>
            Établissements d&#39;enseignement ou de formation professionnelle du
            premier et du second degrés (écoles maternelles, élémentaires,
            collèges, lycées généraux et professionnels, établissements
            régionaux d&#39;enseignement adapté) ;{' '}
          </li>
          <li>
            Établissements sanitaires et sociaux prenant en charge les mineurs
            éloignés de leur famille en raison des difficultés d&#39;ordre
            social ou éducatif, les mineurs handicapés, les mineurs délinquants
            (mentionnés aux 1°, 2°, 4° du I de l’article L 312-1 du code de
            l’action sociale et des familles).
          </li>
        </ul>
        <p className="marginBottom">
          <span>A noter:</span> cette réglementation vise aussi bien les
          établissements publics, gérés par les collectivités (mairies,
          communautés de commune ou d’agglomération, département, région, etc.)
          que les établissements privés (crèches privées, garderies, écoles
          privées, etc.). C’est le propriétaire du bâtiment qui est visé au
          premier chef par la réglementation, et non son exploitant. Cependant,
          il est impossible de mener à bien les actions nécessaires à une mise
          en conformité réglementaire sans impliquer tous les acteurs du
          bâtiment: le propriétaire, le gestionnaire, et les usagers eux-mêmes.
          Dans le cas où le propriétaire de l’établissement ne pourrait être
          identifié, alors le gestionnaire de l’établissement sera la personne
          de référence pour le suivi de ces actions.
        </p>
        <p className="marginBottom">Une entrée en vigueur progressive</p>
        <p className="marginBottom">
          L’entrée en vigueur de ce nouveau dispositif est progressive et la
          surveillance devra être achevée avant le :{' '}
        </p>
        <ul className="marginBottom">
          <li>
            1er janvier 2018 pour les établissements d’accueil collectif
            d’enfants de moins de six ans, les écoles maternelles et les écoles
            élémentaires ;
          </li>
          <li>
            1er janvier 2020 pour les centres de loisirs et les établissements
            d&#39;enseignement ou de formation professionnelle du second degré
            (collèges, lycées, etc.) ;
          </li>
          <li>1er janvier 2023 pour les autres établissements visés.</li>
        </ul>
        <figure className="flexCenter marginBottom">
          <div>
            <img
              src={moreInformations}
              alt="Plus d'information"
              className="resizeSmallPhoto border"
            />
          </div>
          <div className="flexColumn">
            <a
              href=" https://jurad-bat.net/collectivites/reglementation-QAI-france"
              className="small-marginBottom"
            >
              https://jurad-bat.net/collectivites/reglementation-QAI-france
            </a>
            <a href="https://www.ecologie.gouv.fr/qualite-lair-interieur">
              https://www.ecologie.gouv.fr/qualite-lair-interieur
            </a>
          </div>
        </figure>
        <p className="marginBottom">
          Parce qu’une meilleur qualité d’air est une priorité et qu’il est
          possible d’agir ensemble.
          <br />
          <br />
          Rejoignez la communauté eQAI pour agir collectivement face à une
          problématique reconnue de santé publique.
        </p>
        <figure className="illustrationPicture">
          <img src={allTogether} alt="Tous ensemble" className="totalWidth" />
        </figure>
        <p className="marginBottom">
          Seul on va plus vite, mais ensemble on va plus loin !! Nous avons
          besoin d’une association la plus large possible.
          <br />
          <br />
          Le modèle associatif a été choisi pour regrouper et agir plus
          facilement qu&#39;au travers d&#39;une société potentiellement jugée
          partie. Les pouvoirs publics ne peuvent également et légitimement pas
          porté cette mission et charge de surveillance.
        </p>
        <section className="whyEqai">
          <h2>Que signifie eQAI ? </h2>
          <p className="marginBottom">
            &#34;e&#34; pour le digital et &#34;QAI&#34; pour Qualité d&#39;Air
            Intérieur.
          </p>
          <figure className="illustrationPicture flexCenter marginBottom">
            <img
              src={indoorAir}
              alt="Qualité d'Air Intérieur"
              className="resizePhoto"
            />
            <img
              src={maskedChild}
              alt="enfant masqué "
              className="resizePhoto"
            />
          </figure>
          <h3>Présentation de l&#39;association </h3>
          <p className="marginBottom">
            L&#39;association œuvre dans le monde digital en collectant les
            mesures de qualité d&#39;air effectuées par ses adhérents. Ces
            données sont anonymisées puis proposées en open source à toutes
            personnes et organisations ayant le même objectif.
          </p>
          <figure className="illustrationPicture middle marginBottom">
            <img src={openData} alt="open Data" className="resizePhoto" />
          </figure>
          <p className="marginBottom">
            Des bénévoles en informatique codent un programme qui est
            régulièrement adapté en fonction du modèle de données qui nous est
            proposé. Nous accueillons toutes les personnes physiques et morales
            avec une compétence en informatique, droit ou communication !
          </p>
          <figure className="illustrationPicture middle marginBottom">
            <img src={volunteers} alt="bénévoles" className="resizePhoto" />
          </figure>
          <p className="marginBottom">
            La gestion de la base des adhérents est facilitée par HelloAsso.
          </p>
        </section>
        <section className="founders">
          <h2>Les fondateurs</h2>
          <p className="marginBottom">
            Cédric Brugnon et Guillaume Frémion ont travaillé pendant des années
            à la réduction de la consommation d&#39;énergie des bâtiments et se
            sont lancés dans cette problématiques sanitaire mondiale.
            <br />
            <br />
            <br />
            &#34;Nos parcours salariaux dans des filiales de grands groupes
            énergétiques nous ont convaincu de vouloir une structure légère et
            efficace.
            <br />
            <br />
            <br />
            Nous entreprenons en parallèle avec la création de BATeMOB qui est
            une société qui propose des tableaux de bord de qualité d&#39;air et
            énergie pour faciliter le passage à l&#39;action des propriétaires
            des bâtiments collectifs (publics et privés) et dans le projet Le
            Capteur Français qui créé des objets électroniques utiles à la
            compréhension de notre environnement&#34;
          </p>
          <figure className="illustrationPicture flexCenter marginBottom">
            <img src={sensors} alt="capteurs" className="resizePhoto" />
            <img
              src={happyChild}
              alt="un enfant heureux"
              className="resizePhoto"
            />
          </figure>
          <figure className="illustrationPicture middle marginBottom">
            <img
              src={greenBuildings}
              alt="Batiments végétalisés"
              className="border-half resizePhoto"
            />
          </figure>
        </section>
      </main>
    </AboutPage>
  );
}
