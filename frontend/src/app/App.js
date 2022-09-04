import "./App.css";
import { Helmet } from "react-helmet";

import amazonRobotics from "../images/ar.png";
import badBeat from "../images/badbeat.png";
import bsa from "../images/bsa.png";
import explore from "../images/explore.png";
import fruityLoops from "../images/fruityloops.png";
import gt from "../images/gt.png";
import helpingHands from "../images/hh.png";
import hiking from "../images/hiking.png";
import lambert from "../images/lambert.png";
import nextWrk from "../images/nextwork.png";
import nintendo from "../images/nintendo.png";
import pennyWhale from "../images/pennywhale.png";
import philosophy from "../images/philosophy.png";
import poker from "../images/poker.png";
import sae from "../images/sae.png";
import snowboard from "../images/snowboard.png";

function App() {
  return (
    <div>
      <Helmet>
        <script src="../javascript/bootstrap.min.js"></script>
        <script src="../javascript/counterup.min.js"></script>
        <script src="../javascript/easypiechart.js"></script>
        <script src="../javascript/inview.min.js"></script>
        <script src="../javascript/jquery.min.js"></script>
        <script src="../javascript/magnific-popup.min.js"></script>
        <script src="../javascript/main.js"></script>
        <script src="../javascript/waypoints.min.js"></script>
      </Helmet>
      <div>
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
                            <i
                              className="fa fa-facebook"
                              aria-hidden="true"
                            ></i>
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
                            <i
                              className="fa fa-linkedin"
                              aria-hidden="true"
                            ></i>
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

        <div className="container">
          <div id="navigation" className="menu-two">
            <div className="navbar">
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
                  <a href="index.html">
                    <h3 className="topName">Mark L. Foster</h3>
                  </a>
                </div>
              </div>
              <div className="collapse navbar-collapse">
                <nav id="mainmenu">
                  <ul className="nav navbar-nav">
                    <li className=" scroll current">
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

        <div id="about" className="about-section section-padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="section-title">
                  <h1>About Me </h1>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="about-info">
                  <h2> Hi, I'm Mark.</h2>
                  <p>
                    I'm a student in the Georgia Institute of Technology Class
                    of 2022 looking for exciting internships and projects to
                    immerse myself in. I'm currently studying Computer Science
                    with concentrations in Artificial Intelligence and Modeling
                    & Simulation.
                  </p>
                  <p>
                    I aspire to help companies streamline business and create
                    innovative solutions with my experience in software
                    development and interest in entrepreneurship. I've launched
                    my first startup through Georgia Tech's Create-X Startup
                    Launch and always aim to explore the breadth of innovation
                    through computer science and my personal projects.
                  </p>
                  <p>
                    In my free time, I'm working on a number of personal
                    projects, including{" "}
                    <a
                      style={{ color: "#3b9ad5" }}
                      href="https://github.com/markfoster314/Rushbetter"
                    >
                      RushBetter
                    </a>
                    , an application to help streamline Greek Recruitment, and
                    <a style={{ color: "#3b9ad5" }} href="https://nextwrk.com">
                      NextWrk
                    </a>
                    , a startup I co-founded to make gig working and freelancing
                    as accessible as possible. In the period between when I quit
                    my first traditional job as a fast food worker at age 16 and
                    started my first Co-op with Amazon Robotics at age 20, I was
                    able to achieve and maintain financial independence and
                    stability through a collection of gig jobs: from charging
                    scooters to software development freelancing and everything
                    in between. This gave me the freedom to pursue my own
                    projects and the ability to develop a variety of
                    professional software development skills during a period
                    where most of my classmates were bogged down with part time
                    jobs completely unrelated to their field of study. I want to
                    make this atypical working model as accessible as possible
                    so others can realize these same opportunities.
                  </p>
                </div>
                <address>
                  <p>
                    <span>Email:</span> markfoster314@yahoo.com
                  </p>
                  <p>
                    <span>Date of Birth:</span> Nov 2, 1998
                  </p>
                </address>
              </div>
            </div>
          </div>
        </div>

        <div id="skill" className="skill-section bg-color section-padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="section-title">
                  <h1>My Skills</h1>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="section-content">
                  <div className="text-info">
                    <h4>Programming</h4>
                    <p>
                      Through my lifetime of projects, both personal and
                      academic, I've continually become proficient a variety of
                      skills that I can apply to my new adventures. I've been
                      programming since my fourth grade Lego Mindstorms
                      Tournament days. It remains a hobby and passion of mine as
                      I constantly refine my craft.
                    </p>
                  </div>
                  <div className="progress-content">
                    <div className="rating-bar bar-left">
                      <label>Java</label>
                      <div className="skill-progress">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <label>ReactJS</label>
                      <div className="skill-progress">
                        <div className="progress">
                          <div
                            className="progress-bar bar1"
                            role="progressbar"
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <label>Python</label>
                      <div className="skill-progress">
                        <div className="progress">
                          <div
                            className="progress-bar bar2"
                            role="progressbar"
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="skill rating-bar bar-right">
                      <label>JavaScript</label>
                      <div className="skill-progress">
                        <div className="progress">
                          <div
                            className="progress-bar bar3"
                            role="progressbar"
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <label>HTML/CSS</label>
                      <div className="skill-progress">
                        <div className="progress">
                          <div
                            className="progress-bar bar4"
                            role="progressbar"
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <label>Full Stack Development</label>
                      <div className="skill-progress">
                        <div className="progress">
                          <div
                            className="progress-bar bar5"
                            role="progressbar"
                            aria-valuenow="70"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="exprience" className="exprience-section section-padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="section-title">
                  <h1>Experience</h1>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="text-info">
                  <h4>Professional</h4>
                </div>
                <div className="exprience">
                  <div className="exprience-image">
                    <img
                      className="img-responsive"
                      src={amazonRobotics}
                      alt="Amazon Robotics"
                    />
                  </div>
                  <div className="exprience-info">
                    <h3>Software Engineer Intern</h3>
                    <h5>
                      May 2020 - August 2020
                      <br />
                      North Reading, MA
                    </h5>
                    <p>Coming Soon!</p>
                  </div>
                </div>
                <hr />
                <div className="exprience">
                  <div className="exprience-image">
                    <img
                      className="img-responsive"
                      src={pennyWhale}
                      alt="PennyWhale"
                    />
                  </div>
                  <div className="exprience-info">
                    <h3>Software Engineer</h3>
                    <h5>
                      March 2020 - Present
                      <br />
                      Atlanta, GA
                    </h5>
                    <p>
                      {" "}
                      I worked as a Part Time (10-20 hr/wk) Software Engineer
                      for PennyWhale, an Atlanta based Software Development
                      Collective, developing, updating and maintaining websites
                      and mobile apps for clients such as{" "}
                      <a
                        style={{ color: "#3b9ad5" }}
                        href="https://www.facebook.com/KeyPleaz/"
                      >
                        KeyPleaz
                      </a>
                      .
                    </p>
                  </div>
                </div>
                <hr />
                <div className="exprience">
                  <div className="exprience-image">
                    <img
                      className="img-responsive"
                      src={amazonRobotics}
                      alt="Amazon Robotics"
                    />
                  </div>
                  <div className="exprience-info">
                    <h3>Software Engineering Co-op</h3>
                    <h5>
                      June 2019 - December 2019
                      <br />
                      North Reading, MA
                    </h5>
                    <p>
                      {" "}
                      I completed two three-month terms as a Full Stack Software
                      Engineering Co-op on Amazon Robotics' Technical Ops team,
                      and aided in delivery of a robotic drive manufacturing
                      automation project by developing key software services
                      which allowed manufacturing workers to interface with
                      drives and set up automated processes.
                    </p>
                    <p>
                      Through this co-op, I gained a deeper understanding of
                      Systems Design, Full Stack Development, Distributed
                      Systems, DynamoDB, Angular, Spring, Java and AWS,
                      troubleshot ~2 high severity issues a month while on call
                      24/7 as support, and met with the heads of the
                      manufacturing department weekly to gather useful feedback
                      for designing and developing continuous updates. One such
                      update, which allowed drives to charge autonomously,
                      reduced our testing and verification bottlenecks by over 5
                      percent, and allowed for an extra $225,000+ in daily
                      productive output.
                    </p>
                  </div>
                </div>
                <hr />
                <div className="text-info">
                  <h4>Personal</h4>
                </div>
                <div className="exprience">
                  <div className="exprience-image">
                    <img
                      className="img-responsive"
                      src={nextWrk}
                      alt="NextWrk"
                    />
                  </div>
                  <div className="exprience-info">
                    <h3>NextWrk Services LLC</h3>
                    <h5>March 2020 - Present</h5>
                    <p>
                      I'm a co-founder and CEO of{" "}
                      <a
                        style={{ color: "#3b9ad5" }}
                        href="https://nextwrk.com"
                      >
                        NextWrk
                      </a>
                      , a service to connect individuals with their best avenues
                      for success in the gig economy. We secured initial funding
                      from Georgia Tech's Create-X Startup Launch and are
                      currently developing a mobile app for nextwrk.com.
                    </p>{" "}
                    <p>
                      I handled all the initial UI/UX design and front end
                      development, creating designs and vector graphics with
                      Figma and Adobe Illustrator and robust, scalable
                      infrastructure with Redux, Sagas, SEO and international
                      support, and aided my CTO in designing our initial back
                      end.
                    </p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>

        <div
          id="education"
          className="education-section bg-color section-padding"
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="section-title">
                  <h1>Education</h1>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="section-content">
                  <div className="education-info">
                    <img
                      className="img-responsive school"
                      src={gt}
                      alt="Georgia Tech"
                    />
                    <h3>Georgia Institute of Technology (Undergraduate)</h3>
                    <h5>Atlanta, GA</h5>
                    <h6>2017 - Present</h6>
                    <p>
                      Degree: B.S. in Computer Science - May 2022 (tentative)
                    </p>
                    <p>
                      Concentrations: Artificial Intelligence and Modeling &
                      Simulation
                    </p>
                    <p>
                      Awards: Zell Miller Scholarship and Georgia Phi Foundation
                      Scholarship Recipient, National Merit Scholarship
                      Finalist, Dean's List
                    </p>
                  </div>
                  <hr />
                  <div className="education-info">
                    <img
                      className="img-responsive school"
                      src={lambert}
                      alt="Lambert"
                    />
                    <h3>Lambert High School (High School)</h3>
                    <h5>Cumming, GA</h5>
                    <h6>2013 - 2017</h6>
                    <p>GPA: 4.4/4.0</p>
                    <p>
                      Test Scores: SAT 1590/1600, ACT 35/36, AP Calc AB & BC,
                      ES, Lang, Gov and Econ 5/5, AP Psych 4/5
                    </p>
                    <p>
                      Activities and Societies: Philosophy Club (Co-Founder),
                      Boy Scouts of America (Senior Patrol Leader), National
                      Honors Society
                    </p>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="volunteer" className="education-section section-padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="section-title">
                  <h1>Volunteer</h1>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="section-content">
                  <div className="education-info">
                    <img
                      className="img-responsive school"
                      src={helpingHands}
                      alt="Helping Hands"
                    />
                    <h3>Helping Hands Disaster Relief</h3>
                    <h6>2012 - Present</h6>
                    <p>
                      Helping Hands provides immediate aid to struggling
                      families following natural disasters.
                    </p>
                    <p>
                      Over the last few years volunteering with this
                      organization, I gutted and repaired water damaged homes
                      following hurricanes in Louisiana multiple times, and
                      chopped up and cleared fallen trees and debris for
                      homeowners after devastating tornadoes in Alabama.
                    </p>
                  </div>
                  <hr />
                  <div className="education-info">
                    <img
                      className="img-responsive school"
                      src={bsa}
                      alt="Boy Scouts of America"
                    />
                    <h3>Boy Scouts of America</h3>
                    <h6>2007 - 2019</h6>
                    <p>
                      I got involved in scouting when I turned 8 and became a
                      Cub Scout. After organizing a project to secure, sort and
                      transport over 2,000 pounds of food and resources for a
                      local food bank, "The Place," I earned my Eagle Scout
                      Award, the highest achievement attainable in Boy Scouts,
                      at age 14.
                    </p>
                    <p>
                      I stayed active in the program through Venture Scouts and
                      finally as an Eagle Scout Project Volunteer, guiding
                      younger scouts through the process of planning and
                      executing a successful Eagle Scout Project.
                    </p>
                  </div>
                  <hr />
                  <div className="education-info">
                    <img
                      className="img-responsive school"
                      src={sae}
                      alt="SAE"
                    />
                    <h3>Sigma Alpha Epsilon Fraternity</h3>
                    <h6>2017 - Present</h6>
                    <p>
                      As a member of both the Scholarship and Philanthropy
                      Committees for Sigma Alpha Epsilon, I created academic
                      resources and services to propel us from #14 Georgia Tech
                      IFC GPA to #1, and helped organize several philanthropic
                      events to raise $11,440 for Children's Healthcare of
                      Atlanta in 2019.
                    </p>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="interests"
          className="education-section bg-color section-padding"
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="section-title">
                  <h1>Interests</h1>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="section-content">
                  <div className="education-info">
                    <table>
                      <tbody>
                        <tr>
                          <td style={{ width: "200px", maxWidth: "25vw" }}>
                            <img
                              className="img-responsive school"
                              src={fruityLoops}
                              style={{
                                width: "200px",
                                maxWidth: "25vw",
                                height: "auto",
                                borderRadius: "10px",
                              }}
                              alt="Fruity Loops"
                            />
                          </td>
                          <td>
                            <div style={{ paddingLeft: "20px" }}>
                              <h3>Music Production</h3>
                              <p>
                                My interest in music started when I taught
                                myself piano in kindergarten. As time went on, I
                                picked up more instruments and eventually
                                stumbled upon Fruity Loops, which I used to
                                produce{" "}
                                <a
                                  style={{ color: "#3b9ad5" }}
                                  href="https://www.youtube.com/watch?v=tQ-OcQWinO4"
                                >
                                  my own edm
                                </a>{" "}
                                and sell
                                <a
                                  style={{ color: "#3b9ad5" }}
                                  href="https://www.youtube.com/watch?v=OyVb2EIJEis"
                                >
                                  beats online
                                </a>
                                .
                              </p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <hr />
                    <table>
                      <tbody>
                        <tr>
                          <td valign="bottom">
                            <img
                              className="img-responsive school"
                              src={explore}
                              style={{
                                width: "auto",
                                height: "auto",
                                verticalAlign: "bottom",
                                maxHeight: "300px",
                                borderRadius: "10px",
                              }}
                              alt="Rock Climbing"
                            />
                          </td>
                          <td valign="bottom">
                            <img
                              className="img-responsive school"
                              src={hiking}
                              style={{
                                width: "auto",
                                height: "auto",
                                verticalAlign: "bottom",
                                maxHeight: "300px",
                                borderRadius: "10px",
                              }}
                              alt="Hiking"
                            />
                          </td>
                          <td valign="bottom">
                            <img
                              className="img-responsive school"
                              src={snowboard}
                              style={{
                                width: "auto",
                                height: "auto",
                                verticalAlign: "bottom",
                                maxHeight: "300px",
                                borderRadius: "10px",
                              }}
                              alt="Hiking"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <div style={{ paddingLeft: "20px" }}>
                              <h3>Exploring the Outdoors</h3>
                              <p>
                                Living in North Georgia and being a Boy Scout
                                ingrained a respect and love for the outdoors in
                                me. The opportunities for outdoor recreation
                                became slim when I moved to Atlanta, but me and
                                a few friends still carve out a few weeks every
                                year to hike the Appalachian Trail.
                              </p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <hr />
                    <table>
                      <tbody>
                        <tr>
                          <td style={{ width: "200px", maxWidth: "25vw" }}>
                            <img
                              className="img-responsive school"
                              src={philosophy}
                              style={{
                                width: "200px",
                                height: "auto",
                                maxWidth: "25vw",
                                borderRadius: "10px",
                              }}
                              alt="Philosophy"
                            />
                          </td>
                          <td>
                            <div style={{ paddingLeft: "20px" }}>
                              <h3>Philosophy</h3>
                              <p>
                                My friends and I created a club in high school
                                to discuss philosophy, religion politics etc,
                                and in college I stay sharp through personal
                                study and niche courses like{" "}
                                <a
                                  style={{ color: "#3b9ad5" }}
                                  href="http://honorsprogram.gatech.edu/content/iac-2002-science-engineering-religion"
                                >
                                  IAC 2002
                                </a>
                                , where each class is an interfaith dialogue
                                grounded in science.
                              </p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <hr />
                    <table>
                      <tbody>
                        <tr>
                          <td valign="bottom">
                            <img
                              className="img-responsive school"
                              src={poker}
                              style={{
                                width: "auto",
                                height: "auto",
                                verticalAlign: "bottom",
                                maxHeight: "300px",
                                borderRadius: "10px",
                              }}
                              alt="Poker"
                            />
                          </td>
                          <td valign="bottom">
                            <img
                              className="img-responsive school"
                              src={badBeat}
                              style={{
                                width: "auto",
                                height: "auto",
                                verticalAlign: "bottom",
                                maxHeight: "300px",
                                borderRadius: "10px",
                              }}
                              alt="Bad Beat"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table>
                      <tbody>
                        <tr>
                          <div style={{ paddingLeft: "20px" }}>
                            <h3>Poker</h3>
                            <p>
                              When I was living in Boston for my Amazon Robotics
                              Co-op, I studied Game Theory Optimal Poker
                              Strategy and grinded $2/5 blinds in the New
                              Hampshire card rooms. I'm currently using my
                              knowledge to create a{" "}
                              <a
                                href="https://github.com/markfoster314/Pkrcrnchr"
                                style={{ color: "#3b9ad5" }}
                              >
                                GTO Poker Solver
                              </a>
                              .
                            </p>
                          </div>
                        </tr>
                      </tbody>
                    </table>
                    <hr />
                    <table>
                      <tbody>
                        <tr>
                          <td style={{ width: "200px", maxWidth: "25vw" }}>
                            <img
                              className="img-responsive school"
                              src={nintendo}
                              style={{
                                width: "200px",
                                height: "auto",
                                maxWidth: "25vw",
                                borderRadius: "10px",
                              }}
                              alt="Nintendo"
                            />
                          </td>
                          <td>
                            <div style={{ paddingLeft: "20px" }}>
                              <h3>Classic Video Games</h3>
                              <p>
                                I started my first business in high school
                                buying and reselling classic video games. While
                                the local market eventually dried up, my friend
                                Burke and I are currently developing an eBay
                                resell bot using values{" "}
                                <a
                                  href="https://github.com/markfoster314/Pricecharting-Scraper"
                                  style={{ color: "#3b9ad5" }}
                                >
                                  scraped from the internet
                                </a>
                                .
                              </p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="footer">
          <div className="container text-center">
            <div className="footer">
              <p>
                {" "}
                &copy; 2020 <a href="#">Mark Foster.</a> All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
