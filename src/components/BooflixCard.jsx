import ItFlag from "../assets/img/it.png";
import UsFlag from "../assets/img/us.png";

function BooflixCard({ media }) {
  const flag = () => {
    const flagCountries = ["it", "en"];
    if (media.lang === flagCountries[0]) {
      media.lang = ItFlag;
    } else if (media.lang === flagCountries[1]) {
      media.lang = UsFlag;
    } else {
      media.lang = "";
    }
  };
  return (
    <div className="col-4 my-3">
      <div className="card bg-black position-relative overflow-hidden">
        <div className="img-hover-container position-relative">
          <img className="card-img" src={media.image} alt={media.title} />

          <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-light p-3">
            <h5 className="text-danger">{media.title}</h5>
            <div>{media.originaltitle}</div>
            <div className="my-2">{media.lang}</div>
            <div>Voto: {Math.floor(media.rate / 2) + 1} / 5</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BooflixCard;
