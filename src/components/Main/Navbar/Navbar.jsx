import React from "react";
import s from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <div className={s.navbarTop}>
        <img
          src="https://pic.onlinewebfonts.com/svg/thumbnails_60_36894.png"
          alt="avatar"
          width={40}
        />
        <span>Nurulla</span>
      </div>
      <div className={s.navbarContent}>
        <div className={s.elem12}>
          <img src="https://img.icons8.com/windows/2x/news.png" alt="" width={20}/>
          <span>News</span>
        </div>
        <div className={s.elem1}>
          <img src="https://img.icons8.com/ios/2x/imessage.png" alt="" width={20}/>
          <span>Messages</span>
        </div>
        <div className={s.elem123}>
          <img src="https://img.icons8.com/ios/2x/prepositions-in-front-on.png" alt="" width={20}/>
          <span>Smth else</span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
