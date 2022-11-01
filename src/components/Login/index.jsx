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
              fullWidth
              error={Boolean(errors.email?.message)}
              helperText={errors.email?.message}
              {...register("email", { required: "Укажите почту" })}
            />
            <TextField
              className={s.textField}
              placeholder="Введите пароль..."
              type="password"
              label="password"
              fullWidth
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
        <div className={s.loginFooter}>
          <span> Войти через: </span>
          <Link to='/inst'>
            <img
              width={20}
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
