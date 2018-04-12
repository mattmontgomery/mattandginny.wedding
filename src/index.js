import React from "react";
import { render } from "react-dom";
import "./index.scss";
import mattAndGinny from "./mattandginny.svg";
import invite from "./invite.svg";
import gift from "./gift.svg";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const Main = () => {
  return (
    <div className="grid">
      <Invitation>
        <Registry />
        <EmailSignup />
      </Invitation>
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
        <h4>{"April 28, 2018"}</h4>
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
        <h4>{"May 11, 2018"}</h4>
        <h3>{"Salt Lake City"}</h3>
        <div className="directions-content">
          <p className="directions-content-address">
            {"4th West Apartments"}
            <br />
            {"255 N. 400 W."}
            <br />
            {"Salt Lake City, UT"}
          </p>
          <p>
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
      <h4>{"Sign-up for email updates"}</h4>
      <form
        action="https://instagram.us17.list-manage.com/subscribe/post?u=0f053e3093d7bf7019324ee48&amp;id=2d4882412a"
        method="post"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div>
          <div>
            <label htmlFor="mce-EMAIL">{"Email Address"}</label>
            <input type="email" defaultValue="" name="EMAIL" />
          </div>
          <div style={{ display: "none" }} aria-hidden="true">
            <input
              type="text"
              name="b_0f053e3093d7bf7019324ee48_2d4882412a"
              tabIndex="-1"
              value=""
            />
          </div>
          <div>
            <input type="submit" value="Subscribe" name="subscribe" />
          </div>
        </div>
      </form>
    </div>
  );
};

render(Main(), document.getElementById("main"));
