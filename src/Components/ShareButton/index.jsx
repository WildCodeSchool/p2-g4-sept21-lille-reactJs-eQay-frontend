import PropTypes from 'prop-types';
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';
import SShareButton from './style';

export default function Share({ data }) {
  return (
    <>
      <SShareButton>
        <FacebookShareButton
          url="https://www.eqai.org/"
          quote={`La qualité de l'air est de:
                aqi: ${data.aqi}
                pm1: ${data.pm1}
                pm10: ${data.pm10}
                pm25: ${data.pm25}
                ppm: ${data.ppm}
                `}
        >
          <FacebookIcon size={35} round />
        </FacebookShareButton>

        <LinkedinShareButton
          url="https://www.eqai.org/"
          title="La qualité de l'air est de:"
          summary={` aqi: ${data.aqi}
                pm1: ${data.pm1}
                pm10: ${data.pm10}
                pm25: ${data.pm25}
                ppm: ${data.ppm}
                `}
        >
          <LinkedinIcon size={35} round />
        </LinkedinShareButton>
        <TwitterShareButton
          title={`La qualité de l'air est de:
                aqi: ${data.aqi}
                pm1: ${data.pm1}
                pm10: ${data.pm10}
                pm25: ${data.pm25}
                ppm: ${data.ppm}
                `}
          url="https://www.eqai.org/"
        >
          <TwitterIcon size={35} round />
        </TwitterShareButton>
        <EmailShareButton
          subject="La qualité de l'air"
          body={`La qualité de l'air est de:
                aqi: ${data.aqi}
                pm1: ${data.pm1}
                pm10: ${data.pm10}
                pm25: ${data.pm25}
                ppm: ${data.ppm}
                `}
          url="https://www.eqai.org/"
          separator=" "
        >
          <EmailIcon size={35} round />
        </EmailShareButton>
      </SShareButton>
    </>
  );
}

Share.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()),
};

Share.defaultProps = {
  data: [],
};
