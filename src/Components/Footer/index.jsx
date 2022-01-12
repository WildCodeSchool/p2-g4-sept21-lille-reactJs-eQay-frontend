import Facebook from 'assets/facebook.png';
import Insta from 'assets/insta.png';
import Twitter from 'assets/twitter.png';
import LinkedIn from 'assets/linkedin.png';
import './style.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <section className="listItemsFooter">
        <a
          id="supportus"
          className="supportUs"
          href="https://www.helloasso.com/associations/eqai"
          target="_blank"
          rel="noreferrer"
        >
          Nous soutenir
        </a>
        <h2 className="contactUs">Contactez-nous</h2>
        <h2 className="mentionLegal">Mentions légales</h2>
      </section>
      <h3 className="copyrightFooter">
        Copyright <span className="copyrightYear"> {currentYear} </span>
      </h3>
      <section className="followUsFooter">
        <h3 className="titleFollow">Suivez-nous</h3>
        <div className="logoFooter">
          <a
            href="https://www.facebook.com/eqai.asso"
            target="_blank"
            rel="noreferrer"
          >
            <img className="socialFooter" src={Facebook} alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/eqai.association/"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <img className="socialFooter" src={Insta} alt="Instagram" />
          </a>
          <a
            href="https://twitter.com/eQAIassociation"
            target="_blank"
            rel="noreferrer"
          >
            <img className="socialFooter" src={Twitter} alt="Twitter" />
          </a>
          <a
            href="https://www.linkedin.com/company/eqai/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="socialFooter" src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
      </section>
    </footer>
  );
}
