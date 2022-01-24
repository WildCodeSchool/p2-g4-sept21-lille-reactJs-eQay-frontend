import sources from 'assets/sources-pollution.png';
import cloud from 'assets/images.png';
import innerPart from 'assets/Pollution-interieure.jpg';
import stopCovid from 'assets/sifr_cov14_2_std.lang.all.jpg';
import coronavirus from 'assets/coronavirus.png';

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

          <p className="marginBottom container" data-aos="fade-right">
            Rejoignez la communauté eQAI pour agir collectivement face à une
            problématique reconnue de santé publique.
          </p>
          <figure className="illustrationPicture" data-aos="fade-right">
            <img src={allTogether} alt="Tous ensemble" className="totalWidth" />
          </figure>
          <p className="marginBottom container" data-aos="fade-right">
            Seul on va plus vite, mais ensemble on va plus loin !! Nous avons
            besoin d’une association la plus large possible.
          </p>
          <p className="marginBottom container" data-aos="fade-right">
            Le modèle associatif a été choisi pour regrouper et agir plus
            facilement qu&#39;au travers d&#39;une société potentiellement jugée
            partie. Les pouvoirs publics ne peuvent également et légitimement
            pas porté cette mission et charge de surveillance.
          </p>
        </main>
      </AboutPage>
    </>
  );
}
