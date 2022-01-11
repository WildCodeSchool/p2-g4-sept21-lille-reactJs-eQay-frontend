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
import AboutPage from './style';

export default function AboutUs() {
  return (
    <AboutPage>
      <main className="container">
        <section className="page-title">
          <h1>Qui sommes-nous?</h1>
        </section>
        <section className="why-createad">
          <h2>Pourquoi avoir créé eQAI ? </h2>
          <p>
            Nous avons créé l&#39;association à but non lucratif (loi 1901) eQAI
            car nous souhaitons fédérer toutes les personnes et organisations
            voulant participer à la création de la première carte interactive de
            la pollution de l&#39;air intérieur des bâtiments.
          </p>
          <figure className="illustration-picture">
            <img src={map} alt="carte" className="total-width" />
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
          <figure className="illustration-picture flex margin-bottom">
            <img
              src={indoorPollution}
              alt="pollution intérieur"
              className="resize-photo"
            />
            <img
              src={publicHealth}
              alt="santé publique france"
              className="resize-photo"
            />
          </figure>
          <figure className="illustration-picture middle margin-bottom">
            <img
              src={didYouKnow}
              alt="Le saviez-vous"
              className="border-half"
            />
          </figure>
          <p className="italic middle margin-bottom">
            En moyenne nous passons quotidiennement 80% de notre temps à
            l&#39;intérieur de bâtiments dans lesquels l&#39;air que nous
            respirons peut être jusqu&#39;à 10x plus pollué qu&#39;à
            l&#39;extérieur.
          </p>
          <figure className="illustration-picture margin-bottom">
            <img src={sources} alt="carte" className="total-width" />
          </figure>
          <p className="margin-bottom">
            eQAI propose une réponse collective et communautaire quant aux
            obligations réglementaires et relative à la Qualité d’air des ERP,
            grâce a un suivi permanent des principaux polluants de l’air
            ambiant. . En effet La loi portant engagement national pour
            l’environnement a rendu obligatoire la surveillance de la qualité de
            l’air intérieur dans certains établissements recevant un public
            sensible (articles L. 221-8 et R. 221-30 et suivants du code de
            l’environnement)
          </p>
          <figure className="illustration-picture middle margin-bottom">
            <img
              src={cloud}
              alt="Le saviez-vous"
              className="resize-photo border"
            />
          </figure>
          <p className="margin-bottom">
            D’autre part, la surveillance de la qualité d’air Intérieur permet
            de prévenir fondamental dans la prévention de la santé et des effets
            sanitaires induis par une pollution intérieure au quotidien.
          </p>
          <figure className="illustration-picture margin-bottom">
            <img src={innerPart} alt="carte" className="total-width" />
          </figure>
          <p className="margin-bottom">
            En effet De nombreuses études internationales mettent en évidence un
            lien entre les particules fines, le taux de CO2 et la transmission
            de tout type de virus dont la COVID-19.
          </p>
          <figure className="illustration-picture flex margin-bottom">
            <img
              src={stopCovid}
              alt="pollution intérieur"
              className="two-thirds border"
            />
            <img
              src={coronavirus}
              alt="santé publique france"
              className="one-third "
            />
          </figure>
        </section>
        <section>
          <h2>La Réglementation QAI en France </h2>
        </section>
        <p className="margin-bottom">
          Récapitulatif des exigences portant suer la qualité d’air Intérieur au
          sein de ERP
        </p>
        <figure className="illustration-picture margin-bottom">
          <img src={erp} alt="carte" className="total-width" />
        </figure>
        <h3>Quels sont les ERP soumis à cette réglementation ? </h3>
        <p className="margin-bottom">
          Cette obligation s’applique notamment aux :{' '}
        </p>
        <ul className="margin-bottom">
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
        <p className="margin-bottom">
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
        <p className="margin-bottom">Une entrée en vigueur progressive</p>
        <p className="margin-bottom">
          L’entrée en vigueur de ce nouveau dispositif est progressive et la
          surveillance devra être achevée avant le :{' '}
        </p>
        <ul className="margin-bottom">
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
      </main>
    </AboutPage>
  );
}
