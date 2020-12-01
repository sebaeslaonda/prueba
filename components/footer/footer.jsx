import s from './footer.module.css';
import Link from 'next/link';

const Footer = ()=>{
    return(
        <div>
            <div className={s.container}>
                <div className={s.tuno}>
                    <div className={s.co}>
                        <p className={s.tt}>Contactos</p>
                        <div><p>+52 668 258 1881</p>
                        <p className={s.activo}>pconocimientosmx@gmail.com</p>
                        <p className={s.ctivo}>pconocimientosmx@ gmail.com</p></div>

                    </div>
                    <div className={s.in}>
                        <p className={s.tt}>Información</p>
                        <div><p>Solo tienes que contactarnos y nosotros hacemos el resto
                            para más información haz <Link href="/contact"><span className={s.name}>click aquí</span></Link> 
                        </p></div>

                    </div>
                </div>
                <div className={s.tdos}>
                    <div className={s.ab}>
                        <p className={s.tt}>Redes </p>
                        <div>
                            <div><div><img src="img/insta.png" onClick={()=>window.open("https://www.instagram.com/pconocimientos/")}/> <p onClick={()=>window.open("https://www.instagram.com/pconocimientos/")}>Instagram</p></div></div>
                            <div><div><img src="img/ws.png" onClick={()=> window.open('https://api.whatsapp.com/message/MEWOIDUO4IEOL1')}/> <p onClick={()=> window.open('https://api.whatsapp.com/message/MEWOIDUO4IEOL1')}>Whatsapp</p></div></div>
                            <div><div><img src="img/face.png" onClick={()=>window.open("https://www.facebook.com/pconocimientos.mx.3/")} /> <p  onClick={()=>window.open("https://www.facebook.com/pconocimientos.mx.3/")}>Facebook</p></div></div>
                        </div>

                    </div>
                    <div className={s.tw}>
                        <p className={s.tt}>Secciones</p>
                        <ul>
                        <li><Link href="contact"><a>Información </a></Link></li>
                        <li><Link href="softwares"><a>Software  </a></Link></li>
                        <li><Link href="courses"><a>Cursos</a></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={s.copy}>
                <div className={s.fin}><div className={s.sad}></div></div>
                <p>The entry of this site is protected by copyright ® 2020-2020 pconocimientos, MXCL</p>
            </div>
            <div className={s.color}>

            </div>
        </div>

    )
};

export default Footer;