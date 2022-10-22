import React from "react";
import s from "./App.module.scss";
import Header from "./components/Header";
import Login from "./components/Login";
import Main from "./components/Main/Main";
import Registration from "./components/Registration";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe } from "./components/redux/slices/loginSlice";
import { selectAuth } from "./components/redux/slices/loginSlice";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [login, setLogin] = React.useState(false);
  const isAuth = useSelector(selectAuth);
  const [register, setRegister] = React.useState(true);
  const [voiti, setVoiti] = React.useState(false);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <div className={s.app}>
      <Routes>
        <Route path="/" element={isAuth ? ( <><Header/> <Main/></>) : <Login />} />
        <Route path='/login' element={isAuth ? (<Navigate to={'/'} />) : <Login />} />
        <Route path="/registration" element={isAuth ? ( <Navigate to={'/'} />) : <Registration />} />
      </Routes>
    </div>
  );
}

export default App;
// setLogin={setLogin}
// setRegister={setRegister}
// setVoiti={setVoiti}