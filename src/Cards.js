import React from "react";
import "./Cards.css";
import { SocialIcon } from "react-social-icons";

const Cards = ({ imgsrc, margins }) => {
  return (
    <div className="card" style={{ marginTop: margins, marginBottom: "23px" }}>
      <img src={imgsrc} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title"> ✍️ Article</h5>
        <p className="card-text">
          What if famous brands had regular fonts? Meet RegularBrands!
        </p>
        <p className="card-text">
          <small className="text-muted">
            I have worked on UX for the better part of a decade.From now on I
            plan to rei...
          </small>
        </p>
        <img
          className="img_cards"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="Cards"
        />
        <h4> Sarthak Kamra </h4>
        <small className="text-muted" style={{ marginLeft: "55px" }}>
          1.4k Views
        </small>
        <SocialIcon
          url="https://www.example.com"
          style={{ height: 30, width: 30, marginLeft: "10px" }}
        />
      </div>
    </div>
  );
};

export default Cards;
