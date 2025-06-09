import React from "react";
import HealthCss from "../css/department.module.css";
import { Container, Row, Col } from "react-grid-system";
import Navigation from "../Navigation/Navigation";
import Image2 from "../Images/photos.png";

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className={HealthCss.MainContext}>
        <h1>Welcome to Health Department Website Page</h1>
      </div>
      {/* About session */}
      <div className={HealthCss.AboutMain}>
        <h1>About the Coding</h1>
        <h3>Key Feature of our coding</h3>
        <Row>
          <Col sm={3}>
            <img src={Image2} />
            <h4 style={{ color: "blue" }}>Learning coding</h4>
            <p className={HealthCss.BodyText}></p>
          </Col>
        </Row>
      </div>
      {/* Team session */}
      <div className={HealthCss.CodingTeam}>
        <h2>The Team</h2>
        <p>This is our team</p>
      </div>
      {/* Work session */}
      <div className={HealthCss.WorkMain}>
        <h3>Working experience</h3>
        <Row>
          <Col sm={6}>
            <p>
              I started to learn coding it was only one year already. I just
              learn like beigner to learn HTML, CSS and basic Javascript.
            </p>

            <h4>Frontend developer (Learning from SheCodes)</h4>
            <p>
              🗓️ Start learning from Feburary 2023 to <strong>present</strong>
            </p>
            <br />
            <br />
            <h4>React js (Learning from partner organization)</h4>
            <p>
              🗓️ Start learning from November 2022 to <strong>present</strong>
            </p>
          </Col>
          <Col sm={6}>
            <h4>Continues to learn extra course</h4>
            <p>📷 Web Design</p>
            <p>🙅‍♂️ Phtotography</p>
            <p>🕹️ Photoshop</p>
          </Col>
        </Row>
      </div>
      {/* Footer session */}

      <div className={HealthCss.Footer}>
        <h1>Choose a work that you would to exporing</h1>
        <Row>
          <Col sm={4}>
            <div className={HealthCss.BodyFooter}>
              <h3>Introduction to Basic coding</h3>
              <ol>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React JS</li>
                <li>Vue JS</li>
                <li>Angular</li>
                <li>WordPress</li>
              </ol>
            </div>
          </Col>
          <Col sm={4}>
            <div className={HealthCss.BodyFooter}>
              <h3>Responsive coding</h3>
              <ol>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React JS</li>
                <li>Vue JS</li>
                <li>Angular</li>
                <li>WordPress</li>
              </ol>
            </div>
          </Col>
          <Col sm={4}>
            <div className={HealthCss.BodyFooter}>
              <h3>React </h3>
              <ol>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React JS</li>
                <li>Vue JS</li>
                <li>Angular</li>
                <li>WordPress</li>
              </ol>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <h2>
          This project was make
          <a href="https://github.com/Hsa-moo344/React-Final-Project">
            Open Source Code by{" "}
          </a>
          Hsa Moo Moo
        </h2>
      </div>
    </div>
  );
};

export default Home;
