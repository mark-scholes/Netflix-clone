import React, { useState, useEffect } from "react";
import "../navBar.css";

const NavBar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`navBar ${show && "navBar--show"}`}>
      <img
        className="navBar__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt="Netflix logo"
      />
      <img
        className="navBar__avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="profile avatar"
      />
    </div>
  );
};

export default NavBar;
