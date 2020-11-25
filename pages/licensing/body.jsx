import licencias from './licencias.json';
import s from './s.module.css';
import Link from 'next/link';

const Fe = ()=>{
    return(
        <div className={s.container}>
        
            <div className={s.contain}>
                <div className={s.in}>
                    <p className={s.intt}>Softwares online</p>
                    <div className={s.raya}></div>
                    <p className={s.poi}>Visite nuestra tienda online de softwares con entrega inmediata, si no encuentra el que necesita, contáctenos y lo cotizaremos en breve.</p>
                </div>
                <div className={s.all}>
                {
                    licencias.map((info)=>
                        <div className={s.licen} key={info.name}>
                            <Link href={`licensing/${info.name}`}><img className={s.img} src={info.img}/></Link>
                            <Link href={`licensing/${info.name}`}><p className={s.licent}>{info.name}</p></Link>
                        </div>
                    )
                }
                </div>
            </div>
        </div>
    )
};

export default Fe;