import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />

      <div class="row pb-0 pe-lg-0 pt-lg-5align-items-center">
        <div class="col-lg-6 p-3 p-lg-5 pt-lg-5">
          <h1 class="display-4 fw-bold lh-1">
            Let’s Find The Most{" "}
            <span className="active-bold-text">Suitable Home</span> For You !
          </h1>
          <p class="fs-5 mt-3">
            We offer the best resident for you with a strategic location and the
            best home developer. Find your home right now !
          </p>

          <div class="d-flex justify-content-start align-items-center">
            <div className="m-2">
              <div class="d-flex align-items-center w-50">
                <p className="fw-bold fs-2 m-0 score-number">29</p>
                <div className="ms-2 fs-6"> Success Partners</div>
              </div>
            </div>
            <div className="m-2">
              <div class="d-flex align-items-center w-50">
                <p className="fw-bold fs-2 m-0 score-number">92+</p>
                <div className="ms-2 fs-6"> Strategic Location</div>
              </div>
            </div>
            <div className="m-2">
              <div class="d-flex align-items-center w-50">
                <p className="fw-bold fs-2 m-0 score-number">120K</p>
                <div className="ms-2 fs-6"> Satisfying Customer</div>
              </div>
            </div>
          </div>

          <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <button
              type="button"
              class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
            >
              Primary
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Default
            </button>
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1 p-0 overflow-hidden">
          <img
            src={process.env.PUBLIC_URL + "/img/heroImg.png"}
            alt="Logo"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
