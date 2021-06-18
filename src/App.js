import React from "react";
import "./App.css";

import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import dennis from "./reviews/dennis-karuri.jpg";
import ty from "./reviews/Ty.jpg";
import cole from "./reviews/cole.jpg";
import Form from "./Form.js";

const App = () => {
  return (
    <div className="app">
      {/* --------------------HEADER COMPONENT----------------------------- */}
      <div className="lets-go">
        <span>Sign up as host</span>

        <button className="lets-go-button">
          <a href="#host-signup">Join</a>
        </button>
      </div>
      <div className="app-header">
        <div className="app-logo">
          <img
            src="pink.png"
            alt="experince background"
            className="app-image"
          />
          <p className="app-name">HostGuest</p>
        </div>

        <h4 className="app-header-title">
          Earn up to
          <br /> Ksh. 105,000 a month doing what you love
        </h4>

        <div className="app-benefits">
          <h4 className="app-list-item">Why host an experience?</h4>

          <ul className="app-list">
            <li className="app-list-item">
              <span className="list-item-div">
                <CheckCircleOutlineIcon className="item-icon" />
                Set your own schedule: Only host when it works for you. There’s
                no office and no boss. That means you’ll always work on your
                time—because with HostGuest, you’re in charge.
              </span>
            </li>
            <li className="app-list-item">
              <span className="list-item-div">
                <CheckCircleOutlineIcon className="item-icon" />
                Signing up is easy; Set up is easy with no costs on your part.
                After your account activation is complete, you can start
                earning.
              </span>
            </li>
            <li className="app-list-item">
              <span className="list-item-div">
                <CheckCircleOutlineIcon className="item-icon" />
                Earn anytime, anywhere: You can host when you want, where you
                want, and how you want. Accept bookings and cash out via Mpesa.
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* --------------------HEADER COMPONENT----------------------------- */}

      {/* --------------------- FORM COMPONENT------------------------------ */}

      <div className="app-form">
        <Form />
      </div>

      {/* --------------------- FORM COMPONENT------------------------------ */}

      {/* --------------------------- REVIEW COMPONENT------------------------ */}
      <div className="app-reviews">
        <div className="reviews-title">
          <h1>Reviews</h1>

          <p className="reviews-intro">
            Join a group of young people who want to share experiences this
            group has some really awesome activities they want to engage their
            commmunities and share with them.
          </p>
        </div>

        <div className="reviews-list">
          <div className="app-review-card oneK">
            <img
              src={dennis}
              alt="experince background"
              className="img-fluid review-image"
            />
            <span className="review-name">Dennis Karuri</span>{" "}
            <span className="job">Make Up artist</span>
            <p className="review-bio">
              Dennis is dedicated to sharing his passion for make-up through a
              private masterclass. He teaches guests how to recreate the hottest
              looks and how to do the season’s top shades and trends
            </p>
          </div>

          <div className="app-review-card twoC">
            <img
              src={cole}
              alt="experince background"
              className="img-fluid review-image"
            />
            <span className="review-name">Cole Agneta</span>{" "}
            <span className="job">Poet</span>
            <p className="review-bio">
              “As a multifaceted artist, I recognize that art is a powerful tool
              in communication, connection, healing and expression. I hope those
              that take the ride with me find more of themselves along the way.
              " Nairobi resident and poetry host Cole believes poetry can bring
              happiness. She invites guests to go through beautiful poetry
              pieces, teach them how to rhyme with random sentences and
              introduce them to the healing balm that is art.
            </p>
          </div>

          <div className="app-review-card threeT">
            <img
              src={ty}
              alt="experince background"
              className="img-fluid review-image"
            />
            <span className="review-name">Ty Ngachira</span>{" "}
            <span className="job"> Stand-up comedian</span>
            <p className="review-bio">
              A few hours with Ty ensures lots of laughter after which guests
              are immersed in a Standup masterclass. Ty teaches guests how to
              write their own jokes, how to transform stories of pain and shame
              into comedic gold and the basic principles of connecting
              emotionally with an audience.
            </p>
          </div>
        </div>
      </div>

      {/* --------------------------- REVIEW COMPONENT------------------------ */}

      {/* --------------------------- FOOTER COMPONENT -------------------------- */}

      <footer className="app-footer">
        <div className="footer-left">
          <span className="footer-column-title">Socials</span>
          <ul className="contacts">
            <li className="footer-list-item">
              {" "}
              <a href="teeka" target="_" className="footer-link">
                Facebook{" "}
              </a>
            </li>
            <li className="footer-list-item">
              {" "}
              <a
                href="https://twitter.com/Hostguest_?s=09"
                target="_"
                className="footer-link"
              >
                Twitter
              </a>{" "}
            </li>
            <li className="footer-list-item">
              {" "}
              <a
                href="https://www.instagram.com/explore/tags/hostguest/?hl=en"
                target="_"
                className="footer-link"
              >
                Instagram
              </a>{" "}
            </li>
          </ul>
        </div>

        <hr />

        <div className="footer-left">
          <span className="footer-column-title">Contacts</span>
          <ul className="contacts">
            <li className="footer-list-item">
              {" "}
              <span>Email</span> info@hostguest
            </li>
            <li className="footer-list-item">
              {" "}
              <span>Telephone : </span> +254700000000{" "}
            </li>
            <li className="footer-list-item">
              {" "}
              <span>Linkedin</span> /HostGuest{" "}
            </li>
          </ul>
        </div>

        <hr />

        <div className="footer-left">
          <span className="footer-column-title">Adress Info</span>
          <ul className="contacts">
            <li className="footer-list-item">
              {" "}
              <span>Location</span> Kilimani
            </li>
            <li className="footer-list-item">
              {" "}
              <span>Street</span> Kilimani Road
            </li>
            <li className="footer-list-item">
              {" "}
              <span>Building</span> Kilimani Heights{" "}
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default App;
