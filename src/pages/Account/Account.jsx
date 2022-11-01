import React from "react";
import { TextField } from "@mui/material";
import s from "./Account.module.scss";

const Account = () => {
  return (
    <div className={s.mainAccount}>
      <div className={s.information}>
        <h2>Account</h2>
        <img width={100} src="data:image/jpeg;base64,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" alt="" />
        <p>Изменить фото</p>
        <span>Мурат Абдилда</span>
        <input type="file"  hidden/>
      </div>
      <div className={s.editPlace}>
        <div className={s.accountSymbol}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWM85l8_8g0csORwtfpgd5Dyv-f9twzcVuQ0v2FzawHw&s" alt="" />
          <h5>Account</h5>
        </div>
        <div className={s.editElem}>
          <h5>First Name</h5>
          <TextField fullWidth placeholder="Введите имя..." className={s.textField}/>
        </div>
        <div className={s.editElem}>
          <h5>Last Name</h5>
          <TextField fullWidth placeholder="Введите фамилию..."  className={s.textField}/>
        </div>
        <div className={s.editElem}>
          <h5>Email</h5>
          <TextField fullWidth placeholder="Введите email..."  className={s.textField}/>
        </div>
        <div className={s.editElem}>
          <h5>Password</h5>
          <TextField fullWidth placeholder="Введите пороль..."  className={s.textField}/>
        </div>
        <div className={s.editElem}>
          <h5></h5>
        </div>
      </div>
      <div className={s.confirmPlace}>
            <p>If you sure confirm your updates</p>
            <button>Update</button>
      </div>    
    </div>
  );
};

export default Account;
