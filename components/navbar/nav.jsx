import Link from 'next/link';
import s from './Nav.module.css'
import {useEffect,useRef,useState} from 'react';

const Nav = ()=>{

    const [clas,setClas] = useState(s.container)
    const [clasimg,setClasimg] = useState(s.img)
    const [p,setP] = useState(s.p)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 0 ){
                setClas(s.container2)
                setClasimg(s.img2)
                setP(s.p2)
            }else{
                setClas(s.container)
                setClasimg(s.img)
                setP(s.p)
            }
        })
    },[])
    return(
    <div className={clas}>
        <div className={s.logo}>
            <Link href="/"><img src="img/logo.png" alt="logo" href="/" className={clasimg}/></Link>
            <Link href="/"><p className={p}>PC<span className={s.span}>onocimiento</span></p></Link>
        </div>
        <div className={s.links}>
            <ul>
                <li><Link href="contact"><a>Información </a></Link></li>
                <li><Link href="licensing"><a>Licencias </a></Link></li>
                <li><Link href="courses"><a>Cursos</a></Link></li>
                <li><Link href="#"><img src="img/insta.png"/></Link></li>
            </ul>
        </div>
    </div>
    )
}

export default Nav;