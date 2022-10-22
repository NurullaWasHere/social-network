import React from 'react'
import s from './Main.module.scss'
import Navbar from './Navbar/Navbar'
import Home from '../../pages/Home/Home'

 const Main = () => {
  return (
    <div className={s.main}>
        <Navbar/>
        <Home />
    </div>
  )
}

export default Main;