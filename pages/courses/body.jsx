import licencias from './courses.json';
import s from './s.module.css';
import {useEffect} from 'react';
import {useState} from 'react';

const Lo = ()=>{

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
                    <p className={s.intt}>Cursos</p>
                    <div className={s.raya}></div>
                    <p className={s.poi}>Más de 20 cursos diversos que tienes que aprender y ser más profesional.</p>
                </div>
                <div className={s.all}>
                {
                    pantalla.map((info)=>
                        <div className={s.licen} key={info.name}>
                            <div className={s.headres}></div>
                            <div className={s.bodys}>
                                <img src={info.img} className={info.name == 'Curso de como ganar dinero jugando videojuegos' ? s.mario : s.img}/>
                                <p className={s.title}>{info.name}</p>
                                <p className={s.size}>{info.size}</p>
                                <p className={s.des}>{info.des}</p>
                                <button className={s.button} onClick={()=>{
                                    window.open(`https://api.whatsapp.com/send?phone=526682581881&text=Hola!%2C%20me%20interesa%20el%20curso%20de%20${info.name}`)
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

export default Lo;