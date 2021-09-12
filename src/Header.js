import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header
      className="Header"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80")`,
        backgroundPosition: "center center",
      }}
    >
      <h1> . </h1>
      <h1 className="headings">Computer Engineering</h1>
      <h3 className="headings2">142,765 Computer Engineers follow this</h3>
    </header>
  );
};

export default Header;
