/*
 *
 * Home
 *
 */

import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import Header from "components/Header";
import FlatButton from "material-ui/Button";

import "./style.css";
import "./styleM.css";

export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
      user: JSON.parse(localStorage.getItem("user")),
      quote: ""
    };
  }

  componentWillMount() {
    this.getQuote();
  }

  getQuote = () => {
    fetch(
      "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1",
      {
        method: "GET",
        headers: {
          "X-Mashape-Key": "3q4u3rgPbBmsh9W05tFAIGURztVzp1EQKTQjsn7MOO0DmFOcqn"
        }
      }
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          quote: json
        });
      });
  };

  renderSignIn = () => {
    if (!this.state.token && !this.state.user) {
      return (
        <div className="homeHeaderContent">
          <h2 className="homeHeaderContentTitle">
            Discover Great Collaborative Spaces
          </h2>
          <h3 className="homeHeaderContentSubtitle">
            Find amazing places to work, network, and innovate.
          </h3>
          <div className="homeHeaderContentSearchBar">
            <div className="homeSignButtons">
              <Link
                to={"/spaces"}
                style={{ margin: "7.5px", minWidth: "200px" }}
              >
                <FlatButton
                  style={{
                    width: "100%",
                    background: "#FFFFFF",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    color: "#ff4d58",
                    fontWeight: "bold"
                  }}
                >
                  Sign Up
                </FlatButton>
              </Link>
              <Link
                to={"/signIn"}
                style={{ margin: "7.5px", minWidth: "200px" }}
              >
                <FlatButton
                  style={{
                    width: "100%",
                    background: "#ff4d58",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    color: "#FFFFFF",
                    fontWeight: "bold"
                  }}
                >
                  Sign In
                </FlatButton>
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="homeHeaderContent">
          <h2 className="homeHeaderContentTitle">
            Hey There,{" "}
            <span style={{ color: "#ff4d58" }}>{this.state.user.name}!</span>
          </h2>
          <h3
            className="homeHeaderContentSubtitle"
            style={{ margin: "1em 2em", textAlign: "center" }}
          >
            {this.state.quote.quote}
            <span
              style={{
                marginLeft: "10px",
                fontSize: "0.9em",
                fontStyle: "italic"
              }}
            >
              - {this.state.quote.author}
            </span>
          </h3>
        </div>
      );
    }
  };
  render() {
    const { spaceName } = this.props;
    return (
      <div className="container">
        <Helmet>
          <title>Mesh Network of Innovation</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
        <header className="homeHeaderContainer">
          <div className="homeHeaderBar">
            <Header textColor="#FFFFFF" space={spaceName} />
          </div>
          {this.renderSignIn()}
        </header>

        <main>
          <div className="homeMainSection">
            <h4 className="homeMainSectionTitle">
              What are you interested in?
            </h4>
            <p className="homeMainSectionSubtitle">
              Explore some of the best features of collaboration from our
              partners and friends.
            </p>
            <div className="homeMainSectionContent">
              <div
                className="homeMainSectionBlockOne"
                style={{
                  background:
                    "linear-gradient(rgba(0, 0, 0, 0.65),rgba(0, 0, 0, 0.65)),url(http://h4z.it/Image/7e9818_-11-15.05.27.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center center"
                }}
              >
                <img
                  alt=""
                  src="http://h4z.it/Image/093903_cowork.PNG"
                  sizes="(max-width: 425px) 200px, auto"
                />
                <div
                  className="homeMainSectionBlockTitle"
                  style={{ color: "#FFFFFF" }}
                >
                  CoWork
                </div>
              </div>
              <div
                className="homeMainSectionBlockOne"
                style={{
                  background:
                    "linear-gradient(rgba(0, 0, 0, 0.65),rgba(0, 0, 0, 0.65)),url(http://h4z.it/Image/67b755_fablabpng.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center center"
                }}
              >
                <img alt="" src="http://h4z.it/Image/2b608a_hack.PNG" />
                <div
                  className="homeMainSectionBlockTitle"
                  style={{ color: "#FFFFFF" }}
                >
                  Code
                </div>
              </div>
              <div
                className="homeMainSectionBlockOne"
                style={{
                  background:
                    "linear-gradient(rgba(0, 0, 0, 0.65),rgba(0, 0, 0, 0.65)),url(http://h4z.it/Image/4f56fa_ebridge2_660.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center center"
                }}
              >
                <img alt="" src="http://h4z.it/Image/6d9807_3Dprinting.PNG" />
                <div
                  className="homeMainSectionBlockTitle"
                  style={{ color: "#FFFFFF" }}
                >
                  Make
                </div>
              </div>
              <div
                className="homeMainSectionBlockOne"
                style={{
                  background:
                    "linear-gradient(rgba(0, 0, 0, 0.65),rgba(0, 0, 0, 0.65)),url(http://h4z.it/Image/7e9818_-11-15.05.27.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center center"
                }}
              >
                <img alt="" src="http://h4z.it/Image/0cf50f_studio.PNG" />
                <div
                  className="homeMainSectionBlockTitle"
                  style={{ color: "#FFFFFF" }}
                >
                  Create
                </div>
              </div>
            </div>
          </div>
          {/*<div className="homeMainSection" style={{ background: "#EEEEEE" }}>
            <div className="homeMainSectionTitle">
              Best Things to Do at a Space
            </div>
            <div className="homeMainSectionSubtitle">
              Find the best events among our participating spaces.
            </div>

            <div className="homeMainSectionContent" />
              </div>*/}
          <div className="homeMainSection" style={{ background: "#EEEEEE" }}>
            <h4 className="homeMainSectionTitle">See How It Works</h4>
            <p className="homeMainSectionSubtitle">
              Discover how the Mesh Network can help you find everything you
              want.
            </p>
            <div className="homeMainSectionContentTwo">
              <div className="homeMainSectionBlockTwo">
                <img alt="" src="http://h4z.it/Image/af1a08_how1.PNG" />
                <h5 className="homeMainSectionBlockTitle">
                  Choose What You Do
                </h5>
                <p className="homeMainSectionBlockContent">
                  Creating a new workspace? Whether you are just starting out or
                  joining your local community, the Mesh Network has something
                  to offer.
                </p>
              </div>
              <div className="homeMainSectionBlockTwo">
                <img alt="" src="http://h4z.it/Image/3889d9_how2.PNG" />
                <h5 className="homeMainSectionBlockTitle">
                  Find What You Want
                </h5>
                <p className="homeMainSectionBlockContent">
                  Search and filter hundreds of listings, read reviews, explore
                  photos and find the perfect spot.
                </p>
              </div>
              <div className="homeMainSectionBlockTwo">
                <img alt="" src="http://h4z.it/Image/79caa9_how3.PNG" />
                <h5 className="homeMainSectionBlockTitle">
                  Explore Awesome Places
                </h5>
                <p className="homeMainSectionBlockContent">
                  Go and have a productive time or even make a booking directly
                  from the listing page. All of those, thanks to the Mesh
                  Network!
                </p>
              </div>
            </div>
          </div>
          {/*<div className="homeMainSection" style={{ background: "#EEEEEE" }}>
            <h4 className="homeMainSectionTitle">Tips & Articles</h4>
            <p className="homeMainSectionSubtitle">
              Browse the latest helpful Articles and Tips
            </p>
            <div className="homeMainSectionContent" />
            </div>*/}
        </main>

        <footer className="homeFooterContainer">
          Copyright © 2018 theClubhou.se
          <address style={{ margin: "0 .5em" }}>• 540 Telfair Street •</address>
          Tel: (706) 723-5782
        </footer>
      </div>
    );
  }
}
