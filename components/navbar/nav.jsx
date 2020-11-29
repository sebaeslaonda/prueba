import Link from 'next/link';
import s from './Nav.module.css'
import {useEffect,useRef,useState} from 'react';

const Nav = ()=>{

    return(
    <div className={s.container}>
        <div className={s.logo}>
            <Link href="/"><img src="img/logo.png" alt="logo" href="/" className={s.img}/></Link>
        </div>
        <div className={s.links}>
            <ul>
                <li><Link href="contact"><a>Información </a></Link></li>
                <li><Link href="softwares"><a>Software </a></Link></li>
                <li><Link href="courses"><a>Cursos</a></Link></li>
                <li><img src="img/insta.png" onClick={()=>window.open('https://www.instagram.com/pconocimientos/')}/></li>
            </ul>
        </div>
    </div>
    )
}

export default Nav;