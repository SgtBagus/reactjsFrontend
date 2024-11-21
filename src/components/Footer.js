import "./customStyle.css";

const Footer = () => {
  return (
    <div className="row">
        <div className="d-flex justify-content-around m-4 align-items-center">
          <a className="navbar-brand" href="/">
            <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="Logo" className="logoHeader" />
          </a>
          <span className="badge rounded-pill border border-primary text-primary">&#x2022; Properly Indonesia</span>

          <div className="d-flex align-items-center">
            <img src={process.env.PUBLIC_URL + '/img/location.png'} alt="Logo" className="me-2" style={{ width: '24px', height: '24px' }} />
            Yogyakarta, Bali
          </div>

        </div>
        <div className="col-lg-12">
          <img
            src={process.env.PUBLIC_URL + "/img/footer.png"}
            alt="Logo"
            style={{ objectFit: "contain", width: '100%', height: 'auto' }}
          />
        </div>
      </div>
  );
};

export default Footer;
