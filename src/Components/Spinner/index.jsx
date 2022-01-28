import Sspinner from './style';

export default function Spinner() {
  return (
    <>
      <Sspinner>
        <div className="spinner-box">
          <div className="pulse-container">
            <p>Chargement&nbsp;</p>
            <div className="pulse-bubble pulse-bubble-1" />
            <div className="pulse-bubble pulse-bubble-2" />
            <div className="pulse-bubble pulse-bubble-3" />
          </div>
        </div>
      </Sspinner>
    </>
  );
}
