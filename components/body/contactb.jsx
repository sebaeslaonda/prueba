import s from './contact.module.css';
import Link from 'next/link';

const Lop = ()=>{
    return(
        <div className={s.container}>
            <div className={s.contain}>
                <div className={s.uno}>
                    <div className={s.relleno}>
                        <p className={s.rtt}>¿Que hago para comprarlo?</p>
                        <p>Si decides comprar nuestros cursos o licencias solo contactate con nosotros y nos encargamos del resto, Para los detalles del pago contactanos para que preguntes por cualquier software
                        </p>
                    </div>
                    <div className={s.where}>
                        <p  className={s.rtt}>¿Por donde me puedo contactar?</p>
                        <p>Por las redes sociales nos puedes contactar directamente y sin demora, te responderemos lo antes posible,
                            las redes que usamos son Whatsapp, Instragram y Facebook
                        </p>
                        <div className={s.whereis}>
                            <div ><img src="img/insta.png" onClick={()=>window.open("https://www.instagram.com/pconocimientos/")} /> <p onClick={()=>window.open("https://www.instagram.com/pconocimientos/")}>Instagram</p></div>
                            <div><img src="img/ws.png" onClick={()=> window.open('https://api.whatsapp.com/message/MEWOIDUO4IEOL1')}/> <p onClick={()=> window.open('https://api.whatsapp.com/message/MEWOIDUO4IEOL1')}>Whatsapp</p></div>
                            <div><img src="img/face.png" onClick={()=>window.open("https://www.facebook.com/pconocimientos.mx.3/")}/> <p onClick={()=>window.open("https://www.facebook.com/pconocimientos.mx.3/")}>Facebook</p></div>
                        </div>
                    </div>

                </div>

                <div className={s.dos}>
                    <div>
                        <div className={s.conta}>
                            <img src="img/cont.png" />
                        </div>
                    </div>
                </div>

                <div className={s.tres}>
                        <div className={s.servicios}>
                            <p  className={s.rtt}>Tengo un problema o duda</p>
                            <p>Si es que tienes algun problema o duda lo unico que tienes que hacer es contactarte con nosotros y
                                te ayudaremos a solucionar cualquier tipo de duda o problema que se te presente, atencion 24 horas al día
                            </p>
                        </div>

                        <div className={s.sugerencias}>
                            <p  className={s.rtt}>Sugerencias o comentarios</p>
                            <p>Tus sugerencias y comentarios son muy importantes para nosotros para así poder ir mejorando tu atención,
                                mandanos un correo electronico al correo pconocimientosmx@gmail.com y te leeremos.
                            </p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Lop;