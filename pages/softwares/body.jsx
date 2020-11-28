import licencias from './licencias.json';
import s from './s.module.css';
import Link from 'next/link';
import {useState,useEffect} from 'react'
import { set } from 'mongoose';

const Fe = ()=>{

    const [pantalla,setPantalla] = useState([]);

    const [seccion,setSeccion] = useState(1);
    const niveles = Math.ceil(licencias.length / 10) ;
    const diferencias = niveles - licencias.length;
    const total = licencias.length;
    let seccionesarray = [];
    for(let i = 1; i <= niveles;i++){
        seccionesarray.push(i);
    }

    function numero(e){
        if(e==seccion){
            return <p key={e} onClick={()=>setSeccion(e)} className={s.selec} id={e}>{e}</p>
        }
        return <p key={e} onClick={()=>setSeccion(e)}  id={e}>{e}</p>
    }

    useEffect(()=>{
        let pp = [];
        if(seccion == niveles){
            let l = seccion - diferencias;
            for(let x = ((seccion-1)*10);x < l ;x++){
                pp.push(licencias[x]);
            };
            setPantalla(pp);
        }else{
            for(let x = ((seccion-1)*10);x<((seccion-1)*10)+10;x++){
                pp.push(licencias[x]);
            };
            setPantalla(pp);
        }
    },[seccion])


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
                    pantalla.map((info)=>
                        <div className={s.licen} key={info.name}>
                            <Link href={`licensing/${info.name}`}><img className={info.id === 12 ? s.adobe : s.img} src={info.img}/></Link>
                            <Link href={`licensing/${info.name}`}><p className={s.licent}>{info.name}</p></Link>
                        </div>
                    )
                }
                </div>
                    <div className={s.numbers}>
                        {
                            seccionesarray.map(e=> numero(e))
                        }
                    </div>
            </div>
        </div>
    )
};

export default Fe;