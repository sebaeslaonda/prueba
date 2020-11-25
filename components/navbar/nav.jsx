import Link from 'next/link';
import s from './Nav.module.css'
import {useEffect,useRef,useState} from 'react';

const Nav = ()=>{

    return(
    <div className={s.container}>
        <div className={s.logo}>
            <Link href="/"><img src="img/logo.png" alt="logo" href="/" className={s.img}/></Link>
            <Link href="/"><p className={s.p}>PC<span className={s.span}>onocimiento</span></p></Link>
        </div>
        <div className={s.links}>
            <ul>
                <li><Link href="contact"><a>Información </a></Link></li>
                <li><Link href="licensing"><a>Software </a></Link></li>
                <li><Link href="courses"><a>Cursos</a></Link></li>
                <li><Link href="https://www.instagram.com/pconocimientos/"><img src="img/insta.png"/></Link></li>
            </ul>
        </div>
    </div>
    )
}

export default Nav;