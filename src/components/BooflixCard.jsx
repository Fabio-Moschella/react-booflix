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
      <div className="card bg-black  g-2 ">
        <img className="card-img" src={media.image} alt="" />

        <div className="card-body  ">
          <div className="card-title mb-3">
            <h1 className="text-danger">{media.title}</h1>
          </div>
          <div className="card-subtitle mb-3 text-light">
            {media.originaltitle}
          </div>
          <div className="card-text mb-3 text-light ">{media.lang}</div>

          <div className="card-text mb-3 text-light">{media.rate}</div>
        </div>
      </div>
    </div>
  );
}
export default BooflixCard;
