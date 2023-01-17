import React from "react";
import CircleLinkButton from "../../components/CircleLinkButton/CircleLinkButton";
import logo from "../../logo.svg";
import Opener from "../opener/Opener";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="navBar-shadow">
        <div className="navBar-main">
          <ul>
            <li className="navBar-title-main">
              <h1 className="navBar-title-name">Jacob Lurie</h1>
              <h3 className="navBar-title-subtitle">Developer & Student</h3>
            </li>
            <li>
              <a href="www.google.com">Projects</a>
            </li>
            <li>
              <a href="www.google.com">Experience</a>
            </li>
            <li>
              <a href="www.google.com">Skills</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="body-one-main-background">
        <div className="body-one-main-left">
          <div className="body-one-title">
            <h1>Connect with me.</h1>
            <div className="body-one-links-container">
              <CircleLinkButton
                siteLink={"www.google.com"}
                imageLink={"/githubIcon.png"}
              />
              <CircleLinkButton
                siteLink={"www.google.com"}
                imageLink={"/linkedinIcon.png"}
              />
              <CircleLinkButton
                siteLink={"www.google.com"}
                imageLink={"/mailIcon.png"}
              />
            </div>
          </div>
        </div>
        <div className="body-one-main-right">
          <div className="body-one-main-right-content">
            <h1>Who am I<span className="punctuation">?</span></h1>
            <ul className="body-one-main-right-list">
              <li>Passionate programmer and designer&nbsp;&#128187;</li>
              <br />
              <li>
                Studying computer science at Vanderbilt
                University&nbsp;&#128212;
              </li>
              <br />
              <li>Prospective full-stack developer&nbsp;&#128119;</li>
              <br />
              <li>Division-one football player&nbsp;&#127944;</li>
              <br />
            </ul>
            <div className="body-one-main-right-images">
              <img src="/footballImage.jpg" alt="football player" className="image-left" />
              <img src="/personalImage.jpg" alt="Jacob Lurie" className="image-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
