import PropTypes from 'prop-types';
// import SMailto from './style';

export default function Mailto({ email }) {
  return (
    <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
      Contactez-nous
    </a>
  );
}

Mailto.propTypes = {
  email: PropTypes.string,
};

Mailto.defaultProps = {
  email: '',
};
