import React from 'react'
import logo from '../../assets/logos/logo.png'
import menu from "../../assets/logos/menu.svg"
import '../../App.css'
import style from './Header.module.css'

export default function Header() {
  return (
    <header>
        <div className={style.header__section}>
            <img className={style.app__logo} src={logo} alt="blogspace-app-logo" />
            <nav className={style.nav__bar}>
                <ul className={style.nav__list}>
                    <li><a href="">Home</a></li>
                    <li><a href="">Lists</a></li>
                    <li><a href="">Explore</a></li>
                </ul>
            </nav>
            <div className={style.profile__btn}>
                <button className={style.login__btn}>Log in</button>
                <button className={style.getstarted__btn}>Get Started</button>
                <img className={style.menu__icon} src={menu} alt="menu-icon-toggle-bar" />
            </div>
        </div>
    </header>
  )
}
