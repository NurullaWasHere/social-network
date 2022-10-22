import React from "react";
import s from "./Login.module.scss";
import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin, selectAuth } from "../redux/slices/loginSlice";
import { Link } from "react-router-dom";

const Login = ({ setVoiti, setLogin, setRegister }) => {
  const isAuth = useSelector(selectAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchLogin(values));
    if (!data.payload) {
      return alert("Не удалось авторизоватся");
    }
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };
  const setLogOut = (isValid) => {
    if (isValid) {
      setLogin(false);
      setRegister(false);
      setVoiti(true);
    }
  };

  return (
    <div className={s.mainLogin}>
      <div className={s.mainBlock}>
        <div className={s.loginHeader}>
          <h2>Login</h2>
        </div>
        <div className={s.inputField}>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              className={s.textField}
              label="E-Mail"
              placeholder="Введите email..."
              error={Boolean(errors.email?.message)}
              helperText={errors.email?.message}
              {...register("email", { required: "Укажите почту" })}
            />
            <TextField
              className={s.textField}
              placeholder="Введите пароль..."
              type="password"
              label="password"
              error={Boolean(errors.password?.message)}
              helperText={errors.password?.message}
              {...register("password", { required: "Укажите пароль" })}
            />
            <Button
              // onClick={() => {
              //   setLogin(false);
              //   setVoiti(true);
              // }}
              type="submit"
              onClick={setLogOut(
                useSelector((state) => Boolean(state.login.data))
              )}
            >
              {" "}
              Login
            </Button>
            <div>
              <p>Have no account?</p>
              <Link to={"/registration"}>
                <span>Registration</span>
              </Link>
            </div>
          </form>
        </div>
        <div className={s.loginFooter}></div>
      </div>
    </div>
  );
};

export default Login;
