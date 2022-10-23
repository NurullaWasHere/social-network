import React from "react";
import s from "./Inst.module.scss";
import { Link } from "@mui/icons-material";
import { TextField, Button } from "@mui/material";

const Inst = () => {
  return (
    <div className={s.mainLogin}>
      <div className={s.mainBlock}>
        <div className={s.loginHeader}>
          <img
            width={200}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
            alt=""
          />
        </div>
        <div className={s.inputField}>
          <TextField
            className={s.textField}
            label="username"
            placeholder="Phone number, username or email"
            width={140}
          />
          <TextField
            className={s.textField}
            placeholder="Введите пароль..."
            type="password"
            label="password"
            width={140}
          />
          <Button> Войти</Button>
          <hr />
          <div className={s.hr}>
            <p>или</p>
          </div>
          <div className={s.facebook}>Войти через Facebook</div>
          <div className={s.forgot}>Забыли пароль?</div>
        </div>
      </div>

    </div>
  );
};

export default Inst;
