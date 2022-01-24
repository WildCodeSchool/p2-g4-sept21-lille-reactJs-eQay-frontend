import sources from 'assets/sources-pollution.png';
import cloud from 'assets/images.png';
import innerPart from 'assets/Pollution-interieure.jpg';
import stopCovid from 'assets/sifr_cov14_2_std.lang.all.jpg';
import coronavirus from 'assets/coronavirus.png';
import erp from 'assets/erp.png';
import moreInformations from 'assets/info.png';
import allTogether from 'assets/5-astuces-pour-améliorer-la-communauté-de-son-blog.jpg';

import { useEffect } from 'react';
import AOS from 'aos';
import AboutPage from './style';
import 'aos/dist/aos.css';

export default function AboutUsContents() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <AboutPage>
        <main>
          <section className="sources">
            <figure className="illustrationPicture" data-aos="fade-right">
              <img
                src={sources}
                alt="Sources de pollution de l'air intérieur"
                className="totalWidth"
              />
            </figure>
          </section>
          <section className="relative">
            <figure className="illustrationPicture">
              <img src={innerPart} alt="carte" className="totalWidth" />
            </figure>
            <article className="absolute illustrationText fontColorWhite container">
              <p className="marginBottomBig textShadow">
                eQAI propose une réponse collective et communautaire quant aux
                obligations réglementaires et relative à la Qualité d’air des
                ERP, grâce a un suivi permanent des principaux polluants de
                l’air ambiant. . En effet La loi portant engagement national
                pour l’environnement a rendu obligatoire la surveillance de la
                qualité de l’air intérieur dans certains établissements recevant
                un public sensible (articles L. 221-8 et R. 221-30 et suivants
                du code de l’environnement)
              </p>
              <figure className="illustrationPicture middle flexCenter">
                <img
                  src={cloud}
                  alt="Le saviez-vous"
                  className="resizeSmallPhoto"
                />
                <p className="marginLeft textShadow">
                  D’autre part, la surveillance de la qualité d’air Intérieur
                  permet de prévenir fondamental dans la prévention de la santé
                  et des effets sanitaires induis par une pollution intérieure
                  au quotidien.
                </p>
              </figure>
            </article>
          </section>
          <section className="backgroundGreen covid" data-aos="fade-right">
            <p
              className="marginBottom container fontColorWhite textShadow"
              data-aos="fade-right"
            >
              En effet De nombreuses études internationales mettent en évidence
              un lien entre les particules fines, le taux de CO2 et la
              transmission de tout type de virus dont la COVID-19.
            </p>
            <figure
              className="illustrationPicture flexCenter"
              data-aos="fade-left"
            >
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
            <h2 className="marginBottom middle">
              La Réglementation QAI en France
            </h2>
            <p className="marginBottom middle">
              Récapitulatif des exigences portant suer la qualité d’air
              Intérieur au sein de ERP
            </p>
            <figure className="illustrationPicture">
              <img src={erp} alt="carte" className="totalWidth" />
            </figure>
          </section>
          <section className="erp backgroundGreen fontColorWhite textShadow">
            <h3 className="middle marginBottom" data-aos="fade-right">
              Quels sont les ERP soumis à cette réglementation ?
            </h3>
            <p className="marginBottom container" data-aos="fade-right">
              Cette obligation s’applique notamment aux :
            </p>
            <ul className="marginBottom container" data-aos="fade-left">
              <li>
                Établissements d&#39;accueil collectif d&#39;enfants de moins de
                six ans (crèches, halte-garderie, jardins d&#39;enfants, etc.) ;
              </li>
              <li>
                Établissements d&#39;enseignement ou de formation
                professionnelle du premier et du second degrés (écoles
                maternelles, élémentaires, collèges, lycées généraux et
                professionnels, établissements régionaux d&#39;enseignement
                adapté) ;
              </li>
              <li>
                Établissements sanitaires et sociaux prenant en charge les
                mineurs éloignés de leur famille en raison des difficultés
                d&#39;ordre social ou éducatif, les mineurs handicapés, les
                mineurs délinquants (mentionnés aux 1°, 2°, 4° du I de l’article
                L 312-1 du code de l’action sociale et des familles).
              </li>
            </ul>
            <p className="marginBottom container" data-aos="fade-right">
              <span>A noter:</span> cette réglementation vise aussi bien les
              établissements publics, gérés par les collectivités (mairies,
              communautés de commune ou d’agglomération, département, région,
              etc.) que les établissements privés (crèches privées, garderies,
              écoles privées, etc.). C’est le propriétaire du bâtiment qui est
              visé au premier chef par la réglementation, et non son exploitant.
              Cependant, il est impossible de mener à bien les actions
              nécessaires à une mise en conformité réglementaire sans impliquer
              tous les acteurs du bâtiment: le propriétaire, le gestionnaire, et
              les usagers eux-mêmes. Dans le cas où le propriétaire de
              l’établissement ne pourrait être identifié, alors le gestionnaire
              de l’établissement sera la personne de référence pour le suivi de
              ces actions.
            </p>
            <p className="marginBottom container" data-aos="fade-left">
              Une entrée en vigueur progressive
            </p>
            <p className="marginBottom container" data-aos="fade-left">
              L’entrée en vigueur de ce nouveau dispositif est progressive et la
              surveillance devra être achevée avant le :
            </p>
            <ul className="marginBottom container" data-aos="fade-right">
              <li>
                1er janvier 2018 pour les établissements d’accueil collectif
                d’enfants de moins de six ans, les écoles maternelles et les
                écoles élémentaires ;
              </li>
              <li>
                1er janvier 2020 pour les centres de loisirs et les
                établissements d&#39;enseignement ou de formation
                professionnelle du second degré (collèges, lycées, etc.) ;
              </li>
              <li>1er janvier 2023 pour les autres établissements visés.</li>
            </ul>
            <figure className="flexCenter marginBottom" data-aos="fade-left">
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
            <p className="marginBottom container" data-aos="fade-right">
              Parce qu’une meilleur qualité d’air est une priorité et qu’il est
              possible d’agir ensemble.
            </p>
            <p className="marginBottom container" data-aos="fade-right">
              Rejoignez la communauté eQAI pour agir collectivement face à une
              problématique reconnue de santé publique.
            </p>
            <figure className="illustrationPicture" data-aos="fade-right">
              <img
                src={allTogether}
                alt="Tous ensemble"
                className="totalWidth"
              />
            </figure>
            <p className="marginBottom container" data-aos="fade-right">
              Seul on va plus vite, mais ensemble on va plus loin !! Nous avons
              besoin d’une association la plus large possible.
            </p>
            <p className="marginBottom container" data-aos="fade-right">
              Le modèle associatif a été choisi pour regrouper et agir plus
              facilement qu&#39;au travers d&#39;une société potentiellement
              jugée partie. Les pouvoirs publics ne peuvent également et
              légitimement pas porté cette mission et charge de surveillance.
            </p>
          </section>
        </main>
      </AboutPage>
    </>
  );
}
