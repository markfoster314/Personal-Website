import { useEffect, useState } from "react";
import "./Navbar.css";
import useWindowDimensions from "../../hooks/useWindowDimensions.js";

function Navbar() {
  const [navbarClass, setNavbarClass] = useState("navbar");
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width <= 991) {
      setNavbarClass("navbar navbar-fixed-top");
      return;
    }
    const onScroll = () => {
      if (window.pageYOffset > 735) {
        setNavbarClass("navbar navbar-fixed-top");
      } else {
        setNavbarClass("navbar");
      }
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [width]);

  return (
    <div className="container">
      <div id="navigation" className="menu-two">
        <div className={navbarClass}>
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="navbar-brand logo">
              <a href="/">
                <h3 className="topName">Mark L. Foster</h3>
              </a>
            </div>
          </div>
          <div className="collapse navbar-collapse">
            <nav id="mainmenu">
              <ul className="nav navbar-nav">
                <li className="scroll current">
                  <a href="#home-banner">Home</a>
                </li>
                <li className="scroll">
                  <a href="#about">About Me</a>
                </li>
                <li className="scroll">
                  <a href="#skill">Skills</a>
                </li>
                <li className="scroll">
                  <a href="#exprience">Experience</a>
                </li>
                <li className="scroll">
                  <a href="#education">Education</a>
                </li>
                <li className="scroll">
                  <a href="#volunteer">Volunteer</a>
                </li>
                <li className="scroll">
                  <a href="#interests">Interests</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
