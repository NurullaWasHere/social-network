import React from "react";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";
import { logOut } from "../redux/slices/loginSlice";
import { useDispatch } from "react-redux";
import { TextField, InputAdornment } from "@mui/material";

const Header = () => {
  const dispatch = useDispatch();
  const logginOut = () => {
    dispatch(logOut);
    window.localStorage.removeItem("token");
  };
  return (
    <div className={s.header}>
      <div className={s.leftSide}>
        <Link to={"/"}>
          <img
            src="data:image/png;base64,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"
            alt="aituLogo"
            width={100}
          />
        </Link>{" "}
        <img
          src="https://pic.onlinewebfonts.com/svg/img_422593.png"
          alt="navBar"
          width={23}
        />
      </div>
      <div className={s.searchBlock}>
        <TextField
          defaultValue={"Введите поиск"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img
                  src="https://img.icons8.com/sf-ultralight/2x/search.png"
                  width={23}
                  alt=""
                />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className={s.rightSide}>
        <Link to={"/questions"}>
          <img
            src="https://pic.onlinewebfonts.com/svg/thumbnails_60_473745.png"
            alt=""
            width={23}
          />
        </Link>
        <Link to={"/notifications"}>
          <img
            src="https://pic.onlinewebfonts.com/svg/thumbnails_60_3572.png"
            alt=""
            width={23}
          />
        </Link>
        <Link to={"/account"}>
          {" "}
          <img
            src="https://pic.onlinewebfonts.com/svg/thumbnails_60_36894.png"
            alt="Account"
            width={23}
          />
        </Link>
        <Link to={"/"}>
          <img
            src="data:image/png;base64,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"
            alt="Log out"
            width={23}
            onClick={() => logginOut()}
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
