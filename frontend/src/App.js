import "./App.css";

function App() {
  return (
    <div className="main-wrapper home-two">
      <div id="home-banner" style={{ backgroundColor: "#2d3038" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <div className="banner-content">
                <div className="home-social">
                  <ul className="list-inline">
                    <li>
                      <a
                        style={{ fontSize: "24px", color: "white" }}
                        href="https://www.facebook.com/markfoster314"
                      >
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ fontSize: "24px", color: "white" }}
                        href="https://github.com/markfoster314"
                      >
                        <i className="fa fa-github" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ fontSize: "24px", color: "white" }}
                        href="https://www.linkedin.com/in/markfoster314/"
                      >
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="banner-info">
                  <h1 style={{ color: "white" }}>my name is</h1>
                  <h2 style={{ color: "white" }}>Mark Foster</h2>
                  <h3 style={{ color: "white" }}>
                    explorer. thinker. creator.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
