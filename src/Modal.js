import React from "react";
import "./Modal.css";
import { SocialIcon } from "react-social-icons";

const Modal = ({ toggle }) => {
  const userAuth = () => {
    console.log("clicked");
  };
  return (
    <div className="modal_responsive">
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {toggle ? "Create Account" : "Sign In"}
              </h5>
              <h4
                style={{
                  color: "gray",
                  fontSize: "13px",
                  marginLeft: "100px",
                  marginTop: "11px",
                }}
              >
                {toggle
                  ? "Already have an account?"
                  : "Dont have an account yet?"}
                <span style={{ color: "blue" }}>
                  {toggle ? " Sign In" : " Create New Free"}
                </span>
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://image.shutterstock.com/image-vector/man-use-key-sign-secure-600w-1534518803.jpg"
                alt="..."
                className="modalimg"
              />
              {toggle ? (
                <input
                  type="text"
                  className="inputmodal1"
                  autoComplete="off"
                  placeholder="First Name"
                />
              ) : (
                ""
              )}
              {toggle ? (
                <input
                  type="text"
                  className="inputmodal1"
                  autoComplete="off"
                  placeholder="Last Name"
                />
              ) : (
                ""
              )}

              <br />
              <input
                type="text"
                autoComplete="off"
                className="inputmodal"
                placeholder="Email"
              />
              <br />
              <input
                type="text"
                className="inputmodal"
                autoComplete="off"
                placeholder="Password"
              />
              <br />
              {toggle ? (
                <input
                  type="text"
                  className="inputmodal"
                  autoComplete="off"
                  placeholder="Confirm Password"
                />
              ) : (
                ""
              )}
              <br />
              <button
                type="button"
                className="btn-primary modalbtn"
                onClick={userAuth}
              >
                {toggle ? "Create Account" : "Log In"}
              </button>
              <a href="/" className="modala">
                <SocialIcon
                  url="https://facebook.com/in/jaketrent"
                  style={{ height: 22, width: 22, marginRight: "5px" }}
                />
                Sign Up With Facebook
              </a>
              <br />
              <br />
              <a href="/" className="modala1">
                <SocialIcon
                  url="https://google.com/in/jaketrent"
                  style={{ height: 22, width: 22, marginRight: "5px" }}
                />
                Sign Up With Google
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
