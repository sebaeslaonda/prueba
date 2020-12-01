import licencias from './licencias.json';
import s from './s.module.css';
import {useState,useEffect} from 'react'

const Fe = ()=>{

    const [pantalla,setPantalla] = useState([]);

    const [seccion,setSeccion] = useState(1);
    const niveles = Math.ceil(licencias.length / 6) ;
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
            for(let x = ((seccion-1)*6);x < l ;x++){
                pp.push(licencias[x]);
            };
            setPantalla(pp);
        }else{
            for(let x = ((seccion-1)*6);x<((seccion-1)*6)+6;x++){
                pp.push(licencias[x]);
            };
            setPantalla(pp);
        }
        window.scrollTo(0, 0);
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
                            <div className={s.headres}></div>
                            <div className={s.bodys}>
                                <img src={info.img} className={s.img}/>
                                <p className={s.title}>{info.name}</p>
                                <p className={s.size}>{info.size}</p>
                                <p className={s.des}>{info.des}</p>
                                <button className={s.button} onClick={()=>{
                                    window.open(`https://api.whatsapp.com/send?phone=526682581881&text=Hola!%2C%20me%20interesa%20el%20software%20de%20${info.name}`)
                                }}>Lo quiero</button>
                            </div>
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