function BooflixCard({ media }) {
  return (
    <div className="col-4 my-3">
      <div className="card  g-2 ">
        <img className="card-img" src={media.image} alt="" />

        <div className="card-body  ">
          <div className="card-title mb-3">
            <h1>{media.title}</h1>
          </div>
          <div className="card-subtitle mb-3 ">{media.originaltitle}</div>
          <div className="card-text mb-3  ">{media.lang}</div>

          <div className="card-text mb-3 ">{media.rate}</div>
        </div>
      </div>
    </div>
  );
}
export default BooflixCard;
