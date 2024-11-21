import "./customStyle.css";

const CardComponents = ({
  image,
  location,
  titleHouse,
  bedRoomCount,
  prelaunchStatus,
  desc
}) => {
  return (
    <div className="card ms-2">
      <img
        className="card-img-top"
        src={image}
        alt="house-image"
        style={{ objectFit: 'contain', height: 'auto'}}
      />
      <div className="card-body">
        <span>{location}</span>
        <h3 className="card-title my-2">{titleHouse}</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="d-flex flex-column">
              <span className="fw-bold">{bedRoomCount}</span>
              <span className="fw-light">{prelaunchStatus}</span>
            </div>
          </div>

          <div className="col-md-8">
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponents;
