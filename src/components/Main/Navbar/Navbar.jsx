import React from "react";
import s from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <div className={s.navbarContent}>
        <Link to={'/account'} className={s.navElem}>
          <div >
            <img
              width={23}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWM85l8_8g0csORwtfpgd5Dyv-f9twzcVuQ0v2FzawHw&s"
              alt=""
            />
            <p>Account </p>
          </div>
        </Link>
        <Link to={'/'} className={s.navElem}>
          <div >
            <img
              width={23}
              src="https://cdn-icons-png.flaticon.com/128/7978/7978280.png"
              alt=""
            />
            <p>News </p>
          </div>
        </Link>
        <Link to={'/friends'} className={s.navElem}>
          <div >
            <img
              width={23}
              src="https://cdn-icons-png.flaticon.com/128/5876/5876959.png"
              alt=""
            />
            <p>Friends</p>
          </div>
        </Link>
        <Link to={'/messages'} className={s.navElem}>
          <div >
            <img
              width={23}
              src="https://cdn-icons-png.flaticon.com/128/5214/5214951.png"
              alt=""
            />
            <p>Messages</p>
          </div>
        </Link>
        <Link className={s.navElem}>
          <div >
            <img
              width={23}
              src="https://cdn-icons-png.flaticon.com/128/3382/3382313.png"
              alt=""
            />
            <p>Smth else</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
