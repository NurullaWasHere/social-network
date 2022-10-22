import React from "react";
import s from "./Registration.module.scss";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth } from "../redux/slices/authSlice";
import { Link } from "react-router-dom";

const Registration = ({ setVoiti, setLogin, setRegister }) => {
  const setLogOut = (isValid) => {
    if (isValid) {
      setRegister(false);
      setLogin(false);
      setVoiti(true);
    }
  };
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });
  const onSubmit = (values) => {
    dispatch(fetchAuth(values));
  };

  return (
    <div className={s.mainLogin}>
      <div className={s.mainBlock}>
        <div className={s.loginHeader}>
          <h2>Regsitration</h2>
        </div>
        <form action="" onSubmit={handleSubmit(onSubmit)} className={s.form}>
          <div className={s.inputField}>
            <TextField
              className={s.textField}
              type="text"
              label="FullName"
              placeholder="Введите имя..."
              error={Boolean(errors.fullName?.message)}
              helperText={errors.fullName?.message}
              {...register("fullName", { required: "Укажите имя" })}
            ></TextField>
            <TextField
              className={s.textField}
              type="email"
              label="E-Mail"
              placeholder="Введите email..."
              error={Boolean(errors.email?.message)}
              helperText={errors.email?.message}
              {...register("email", { required: "Укажите почту" })}
            ></TextField>
            <TextField
              className={s.textField}
              type="password"
              label="Password"
              placeholder="Введите парол..."
              error={Boolean(errors.password?.message)}
              helperText={errors.password?.message}
              {...register("password", { required: "Укажите пароль" })}
            ></TextField>
            <button
              type="submit"
              onClick={setLogOut(
                useSelector((state) => Boolean(state.login.data))
              )}
            >
              {" "}
              Registration{" "}
            </button>
            <div>
              <p>Have account?</p>
              <Link to={'/login'}>
                <span>Log in</span>
              </Link>
            </div>
          </div>
        </form>
        <div className={s.loginFooter}></div>
      </div>
    </div>
  );
};

export default Registration;
