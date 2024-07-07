import React from 'react'
import banner from '../../assets/images/herobanner.svg'
import style from './Hero.module.css'
import headerStyle from '../Header/Header.module.css'

function Hero() {
  return (
    <main>
        <div className={style.hero__container}>
            <div className={style.hero__content}>
                <h2>Discover the new way of reading blogs</h2>
                <p>Blogspace helps you explore, organize and share your favorite blogs.</p>
                <button id={style.cta__btn} className={headerStyle.getstarted__btn}>Get Started for free</button>
            </div>
            <div className={style.hero__banner}>
                <img className={style.banner} src={banner} alt="hero-banner-showing-depicts-reading" />
            </div>
        </div>

        
    </main>
  )
}

export default Hero;