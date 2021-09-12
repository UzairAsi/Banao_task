import React from "react";
import "./Location.css";

const Location = () => {
  return (
    <div className="location">
      <i class="fa fa-map-marker fa-lg" aria-hidden="true"></i>
      <input
        type="text"
        className="locationinput"
        placeholder="     Noida,India"
      />
      <i class="fas fa-pencil-alt"></i>
      <br />
      <small className="text-muted mb-5">
        Your Location will help us serve better and extend a personalised
        experience.
      </small>
      <br />
      <div className="location2">
        <h4 className="locationh">
          <i class="fas fa-thumbs-up"></i> Recomended Groups
        </h4>
        <div className="groups">
          <img
            src="https://images.unsplash.com/photo-1512552288940-3a300922a275?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVpc3VyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="..."
            className="groupimage"
          />
          <h4 className="profilename"> Leisure </h4>
          <button className="groupbutton">Follow</button>
        </div>
        <div className="groups">
          <img
            src="https://images.unsplash.com/photo-1512552288940-3a300922a275?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVpc3VyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="..."
            className="groupimage"
          />
          <h4 className="profilename"> Activism </h4>
          <button className="groupbutton">Follow</button>
        </div>
        <div className="groups">
          <img
            src="https://images.unsplash.com/photo-1512552288940-3a300922a275?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVpc3VyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="..."
            className="groupimage"
          />
          <h4 className="profilename"> MBA </h4>
          <button className="groupbutton">Follow</button>
        </div>
        <div className="groups">
          <img
            src="https://images.unsplash.com/photo-1512552288940-3a300922a275?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVpc3VyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="..."
            className="groupimage"
          />
          <h4 className="profilename"> Philosophy </h4>
          <button className="groupbutton">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default Location;
