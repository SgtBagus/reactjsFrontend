import "./customStyle.css";

const Hero = () => {
  return (
    <div className="row pb-0 pe-lg-0 align-items-center">
      <div className="col-lg-6 p-3 p-lg-5 d-flex flex-column justify-content-between">
        <div>
          <h1 className="display-4 fw-bold lh-1">
            Let’s Find The Most{" "}
            <span className="active-bold-text">Suitable Home</span> For You !
          </h1>
          <p className="fs-5 mt-3">
            We offer the best resident for you with a strategic location and the
            best home developer. Find your home right now !
          </p>

          <div className="d-flex justify-content-start align-items-center">
            <div className="m-2">
              <div className="d-flex align-items-center w-50">
                <p className="fw-bold fs-2 m-0 score-number">29</p>
                <div className="ms-2 fs-6"> Success Partners</div>
              </div>
            </div>
            <div className="m-2">
              <div className="d-flex align-items-center w-50">
                <p className="fw-bold fs-2 m-0 score-number">92+</p>
                <div className="ms-2 fs-6"> Strategic Location</div>
              </div>
            </div>
            <div className="m-2">
              <div className="d-flex align-items-center w-50">
                <p className="fw-bold fs-2 m-0 score-number">120K</p>
                <div className="ms-2 fs-6"> Satisfying Customer</div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-5 mb-lg-3">
          <div className="card w-100 border-0 shadow">
            <div className="card-body py-2">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <img
                    src={process.env.PUBLIC_URL + "/img/location.png"}
                    alt="Logo"
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "contain",
                    }}
                  />
                  <div className="d-flex flex-column">
                    <span className="ms-2 fw-bold">Location</span>
                    <input
                      type="text"
                      className="form-control input-sm border-0"
                      placeholder="Type your location"
                    />
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src={process.env.PUBLIC_URL + "/img/type.png"}
                    alt="Logo"
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "contain",
                    }}
                  />
                  <div className="d-flex flex-column">
                    <span className="ms-2 fw-bold">Type</span>
                    <input
                      type="text"
                      className="form-control input-sm border-0"
                      placeholder="Select your type"
                    />
                  </div>
                </div>
                  <button type="button" className="btn btn-primary bt-lg">
                    <i className="fa fa-search me-2" />Search
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-5 offset-lg-1 p-0 overflow-hidden">
        <img
          src={process.env.PUBLIC_URL + "/img/heroImg.png"}
          alt="Logo"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Hero;
