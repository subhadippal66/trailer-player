import React, { useEffect, useState } from "react";
import "./Nav.css";
// import logo from './public/netflix-logo.png';

function Nav() {
  // const [show, handleShow]= useState(false)
  // useEffect(()=>{
  //     window.addEventListener('scroll',()=>{
  //         if (window.screenY > 100) {
  //             handleShow(true);
  //         } else { handleShow(false)}
  //     });
  //     return () => {
  //         window.removeEventListener("scroll");
  //     }
  // },[])
  return (
    <div className={`nav`}>
      <img
        className="nav_logo"
        src="https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/28900/article_full%401x.jpg"
        alt="netflix-logo"
      />
      <h1>Trailer Player</h1>

      <img
        className="avatar_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="avatar-logo"
      />
    </div>
  );
}

export default Nav;
