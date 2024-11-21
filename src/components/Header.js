import './customStyle.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container-fluid mx-5">
        <a className="navbar-brand" href="/">
            <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="Logo" className="logoHeader" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
          <ul className="navbar-nav mb-2 mb-md-0 text-uppercase">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                About US
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Information
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
