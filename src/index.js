import React from "react";
import { render } from "react-dom";
import ImageGallery from "react-image-gallery";

import "./index.scss";

import mattAndGinny from "./mattandginny.svg";
import invite from "./invite.svg";
import gift from "./gift.svg";
import vertical01 from "./images/vertical01.jpg";
import vertical02 from "./images/vertical02.jpg";
import vertical03 from "./images/vertical03.jpg";
import vertical04 from "./images/vertical04.jpg";
import vertical05 from "./images/vertical05.jpg";

const Main = () => {
  return (
    <div className="grid">
      <Invitation>
        <Registry />
        <EmailSignup />
      </Invitation>
      <Gallery />
      <Directions />
    </div>
  );
};

const Registry = () => {
  return (
    <div className="registry">
      <div className="registry-content">
        <h3>
          <a href="https://www.amazon.com/wedding/share/matt-and-ginny">
            <img src={gift} className="gift-icon" />
            {"Registered on Amazon"}
          </a>
        </h3>
      </div>
    </div>
  );
};
const Invitation = props => {
  return (
    <div className="invitation">
      <div className="invitation-logo">
        <img src={mattAndGinny} />
      </div>
      <div className="invitation-content">
        <p>{"Together with their families"}</p>
        <p>{"Virginia Leigh Romney &"}</p>
        <p>{"Matthew Howard Montgomery"}</p>
        <p>{"announce their forthcoming marriage:"}</p>
        <p>{"April 28, 2018"}</p>
        <p>{"in the Mesa Arizona Temple."}</p>
        {props.children}
      </div>
    </div>
  );
};
const Directions = () => {
  return (
    <div className="directions">
      <div className="directions-arizona">
        <h4>{"April 28, 2018, 5:30 p.m."}</h4>
        <h3>{"Mesa, Ariz."}</h3>
        <div className="directions-content">
          <p className="directions-content-address">
            {"2604 S. Benton"}
            <br />
            {"Mesa, AZ 85209"}
          </p>
          <p>
            <a href="https://goo.gl/maps/MDTUT4JED472">{"Directions"}</a>
          </p>
        </div>
      </div>
      <div className="directions-slc">
        <h4>{"May 11, 2018, 6 p.m."}</h4>
        <h3>{"Salt Lake City"}</h3>
        <div className="directions-content">
          <p className="directions-content-address">
            {"4th West Apartments"}
            <br />
            {"255 N. 400 W."}
            <br />
            {"Salt Lake City, UT"}
            <hr />
            {
              "Please park outside of the apartment complex. Parking options include: "
            }
            <br />
            {"- West High School"}
            <br />
            {"- Along 400 West"}
            <br />
            {"- Along 300 North"}
            <br />
            <a href="https://goo.gl/maps/PjyYo2kpcD82">{"Directions"}</a>
          </p>
        </div>
      </div>
      <div className="directions-soutah">
        <h4>{"May 26, 2018"}</h4>
        <h3>{"Toquerville, Utah"}</h3>
        <div className="directions-content">
          <p className="directions-content-address">
            {"Montgomery Home"}
            <br />
            {"1008 S. Peachtree Drive"}
            <br />
            {"Toquerville, UT"}
          </p>
          <p>
            <a href="https://goo.gl/maps/2oPpzsk4Em92">{"Directions"}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

const EmailSignup = () => {
  return (
    <div id="mc_embed_signup" className="signup">
      <p>
        <em>{"Sign-up for email updates"}</em>
      </p>
      <form
        action="https://instagram.us17.list-manage.com/subscribe/post?u=0f053e3093d7bf7019324ee48&amp;id=2d4882412a"
        method="post"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div>
          <p>
            <input type="email" defaultValue="" name="EMAIL" />
          </p>
          <div style={{ display: "none" }} aria-hidden="true">
            <input
              type="text"
              name="b_0f053e3093d7bf7019324ee48_2d4882412a"
              tabIndex="-1"
              value=""
            />
          </div>
          <p>
            <input type="submit" value="Subscribe" name="subscribe" />
          </p>
        </div>
      </form>
    </div>
  );
};
const Gallery = () => {
  const images = [
    {
      original: vertical01
    },
    {
      original: vertical02
    },
    {
      original: vertical03
    },
    {
      original: vertical04
    },
    {
      original: vertical05
    }
  ];
  return (
    <div className="gallery">
      <ImageGallery items={images} showThumbnails={false} />
    </div>
  );
};

render(Main(), document.getElementById("main"));
