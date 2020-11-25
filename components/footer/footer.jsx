import s from './footer.module.css';
import Link from 'next/link';

const Footer = ()=>{
    return(
        <div>
            <div className={s.container}>
                <div className={s.co}>
                    <p className={s.tt}>Contacto</p>
                    <div><p>+52 668 245 3469</p>
                    <p>pconocimientosmx@gmail.com</p></div>

                </div>
                <div className={s.in}>
                    <p className={s.tt}>Información</p>
                    <div><p>Solo tienes que contactarnos y nosotros hacemos el resto
                         para más información haz <span className={s.name}>click aquí</span>
                    </p></div>

                </div>
                <div className={s.ab}>
                    <p className={s.tt}>Redes </p>
                    <div>
                        <div><Link href="https://www.instagram.com/pconocimientos/"><div><img src="img/insta.png" /> <p>Instagram</p></div></Link></div>
                        <div><Link href=""><div><img src="img/ws.png" /> <p>Whatsapp</p></div></Link></div>
                        <div><Link href="https://www.facebook.com/pconocimientos.mx.3/"><div><img src="img/face.png" /> <p>Facebook</p></div></Link></div>
                    </div>

                </div>
                <div className={s.tw}>
                    <p className={s.tt}>Secciones</p>
                    <ul>
                    <li><Link href="contact"><a>Información </a></Link></li>
                    <li><Link href="licensing"><a>Software  </a></Link></li>
                    <li><Link href="courses"><a>Cursos</a></Link></li>
         
                    </ul>
                </div>
            </div>
            <div className={s.fin}>

            </div>
        </div>

    )
};

export default Footer;