import React from 'react'
import logo from '../../assets/logos/logo.png'
import menu from "../../assets/logos/menu.svg"
import '../../App.css'
import style from './Header.module.css'

export default function Header() {
    const showNavigation = () => {

    }

  return (
    <header>
        <div className={style.header__section}>
            <div className={style.nav__container}>
            <img className={style.app__logo} src={logo} alt="blogspace-app-logo" />
            <nav className={style.nav__bar}>
                <ul className={style.nav__list}>
                    <li><a href="">Home</a></li>
                    <li><a href="">Lists</a></li>
                    <li><a href="">Explore</a></li>
                    <li><a href="">Contribute</a></li>
                </ul>
            </nav>
            </div>
            <div className={style.profile__btn}>
                <button className={style.login__btn}>Log in</button>
                <button className={style.getstarted__btn}>Get Started for free</button>
                <img className={style.menu__icon} src={menu} alt="menu-icon-toggle-bar" onClick={showNavigation} />
            </div>
        </div>
    </header>
  )
}
