import BurgerMenuMaps from 'Components/BurgerMenuMaps';
import map from 'assets/homeMap.png';
import volunteers from 'assets/1554288633350.jpg';
import sensors from 'assets/sensors.JPEG';
import openData from 'assets/89_1079_open_data_large.jpg';
import happyChild from 'assets/happyChild.png';
import greenBuildings from 'assets/La-pollution-de-l-air-interieur-touche-les-ecoconstructions1.jpg';
import AOS from 'aos';
import { useEffect } from 'react';
import SAboutUs from './style';
import 'aos/dist/aos.css';

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <BurgerMenuMaps />
      <SAboutUs>
        <h1 className="headAboutUs">Qui sommes-nous?</h1>
        <article className="whyEqai">
          <img className="imgMap" src={map} alt="carte" />
          <section className="contentWhyEqai">
            <h2>Pourquoi avoir créé eQAI ? </h2>
            <p>
              Nous avons créé l&#39;association à but non lucratif (loi 1901)
              eQAI car nous souhaitons fédérer toutes les personnes et
              organisations voulant participer à la création de la première
              carte interactive de la pollution de l&#39;air intérieur des
              bâtiments.
            </p>
            <p>
              Accessible à toute et tous, gratuite, elle est un véritable outil
              de communication dans un objectif de répondre à une problématique
              encore trop méconnue ou sous-estimée.
            </p>
          </section>
        </article>
        <article className="presAsso">
          <img src={openData} alt="open Data" className="imgData" />
          <section className="contentPresAsso">
            <h2>Présentation de l&#39;association</h2>
            <p>
              L&#39;association œuvre dans le monde digital en collectant les
              mesures de qualité d&#39;air effectuées par ses adhérents. Ces
              données sont anonymisées puis proposées en open source à toutes
              personnes et organisations ayant le même objectif.
            </p>
          </section>
        </article>
        <section className="benevole">
          <img src={volunteers} alt="bénévoles" className="imgBenevole" />
          <section className="contentBenevole">
            <p>
              Des bénévoles en informatique codent un programme qui est
              régulièrement adapté en fonction du modèle de données qui nous est
              proposé. Nous accueillons toutes les personnes physiques et
              morales avec une compétence en informatique, droit ou
              communication !
            </p>

            <p>
              La gestion de la base des adhérents est facilitée par HelloAsso.
            </p>
          </section>
        </section>
        <article className="presFounder">
          <h2 className="titleFoudner">Les fondateurs</h2>
          <section className="contentFounder">
            <p>
              Cédric Brugnon et Guillaume Frémion ont travaillé pendant des
              années à la réduction de la consommation d&#39;énergie des
              bâtiments et se sont lancés dans cette problématiques sanitaire
              mondiale.
            </p>

            <p>
              &#34;Nos parcours salariaux dans des filiales de grands groupes
              énergétiques nous ont convaincu de vouloir une structure légère et
              efficace.
            </p>

            <p>
              Nous entreprenons en parallèle avec la création de BATeMOB qui est
              une société qui propose des tableaux de bord de qualité d&#39;air
              et énergie pour faciliter le passage à l&#39;action des
              propriétaires des bâtiments collectifs (publics et privés) et dans
              le projet Le Capteur Français qui créé des objets électroniques
              utiles à la compréhension de notre environnement&#34;
            </p>
          </section>
          <div className="img">
            <img src={sensors} alt="capteurs" className="imgFounder" />
            <img
              src={happyChild}
              alt="un enfant heureux"
              className="imgFounder"
            />
            <img
              src={greenBuildings}
              alt="Batiments végétalisés"
              className="imgFounder"
            />
          </div>
        </article>
      </SAboutUs>
    </>
  );
}
