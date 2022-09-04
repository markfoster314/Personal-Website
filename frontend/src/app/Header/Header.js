import "./Header.css";

function Header() {
  return (
    <div className="main-wrapper home-two">
      <div id="home-banner" className="banner">
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <div className="banner-content">
                <div className="home-social">
                  <ul className="list-inline">
                    <li>
                      <a
                        className="icon"
                        href="https://www.facebook.com/profile.php?id=100085356490340"
                      >
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="icon"
                        href="https://github.com/markfoster314"
                      >
                        <i className="fa fa-github" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="icon"
                        href="https://www.linkedin.com/in/markfoster314/"
                      >
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="banner-info">
                  <h1 className="white-text">my name is</h1>
                  <h2 className="white-text">Mark Foster</h2>
                  <h3 className="white-text">explorer. thinker. creator.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
