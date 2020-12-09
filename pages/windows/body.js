import P1 from './licencias.json';
import s from '../softwares/s.module.css';
import {useState,useEffect} from 'react'


const Fe = ()=>{
    //mostrar
    let licencias = P1;
    const [pantalla,setPantalla] = useState([]);
    const [h,setH] = useState(1);
    const [clase, setClase] = useState(s.no);
    const [clase2, setClase2] = useState(s.elegir);
    //primero------------------------------
    const [seccion,setSeccion] = useState(1);
    const [niveles,setNiveles] = useState(Math.ceil(licencias.length / 6))
    const diferencias = niveles - licencias.length;
    let largo = [];
    for(let i = 1; i <= niveles;i++){
        largo.push(i);
    }
    //opcional
    const [busca,setBusca] = useState('');
    const [seccion2,setSeccion2] = useState(1);
    const [largo2,setLargo2] = useState([]);

    function numero(e){
        if(e==seccion){
            return <p key={e} onClick={()=>setSeccion(e)} className={s.selec} id={e}>{e}</p>
        }
        return <p key={e} onClick={()=>setSeccion(e)}  id={e}>{e}</p>
    }
    function numero2(e){
        if(e==seccion2){
            return <p key={e} onClick={()=>setSeccion2(e)} className={s.selec} id={e}>{e}</p>
        }
        return <p key={e} onClick={()=>setSeccion2(e)}  id={e}>{e}</p>
    }

useEffect(()=>{
    setH(1);
    setSeccion(1)
    if(busca.replace(/ /g,"").length!=0){
        const reg = new RegExp(`${busca.replace(/ /g,"").toLowerCase()}`);
        const pore = licencias.filter(e=> reg.test(e.name.replace(/ /g,"").toLowerCase()));
        setPantalla(pore)
        if(pore.length !=0){
            setH(2);
        }
    }
},[busca]);

useEffect(()=>{
    if(busca.length==0){
    setH(1);
    console.log(h)
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
    }
},[seccion,busca,]);


    return(
        <div className={s.container}>
            <div className={s.contain}>
                <div className={s.buscador}>
                    <input type="text" id="input" maxlength="32" onChange={(e)=>{setBusca(e.target.value)}}/>
                    <label for="input"><img src="img/lupa.png"/></label>
                </div>
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
                                <div className={s.button}><button className={s.button} onClick={()=>{
                                    window.open(`https://api.whatsapp.com/send?phone=526682581881&text=Hola!%2C%20me%20interesa%20el%20software%20de%20${info.name}`)
                                }}>Consultar</button>
                                 <button className={s.button} onClick={()=>{
                                    window.open(info.pay)
                                }}>Comprar</button></div>
                                
                            </div>
                        </div>
                    )
                }
                </div>
                    <div className={s.numbers}>
                        {
                            h == 1 ? largo.map(e=> numero(e)) :  largo2.map(e=>numero2(e))
                        }
                    </div>
            </div>
        </div>
    )
};

export default Fe;