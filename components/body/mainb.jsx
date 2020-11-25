import s from './mainb.module.css';
import Link from 'next/link'
const Mainb = ()=>{
    return(
        <div className={s.container}>
            <div className={s.contain}>
                <div className={s.licen}>
                    <div className={s.h2}>
                        <p className={s.title}>Software, cursos y juegos todo lo que buscas</p>
                        <p className={s.lorem}>Encuentra los software y los cursos que necesita para crecer profesionalmente,
                             aquí encontrarás las herramientas necesarias</p>
                    </div>
                    <div className={s.imgs}><img src="./img/licencias.png"/></div>
                </div>
            </div>
            <div className={s.work2}>
                <div className={s.works}>
                    <div className={s.wtitle}>
                            <p>¿Cómo trabajamos?</p>
                    </div>
                    <div className={s.work}>
                            <div className={s.courses}>
                                <Link href="courses"><p className={s.coursesp}>Cursos</p></Link>
                                <div className={s.ds}><p className={s.pp}>Los cursos se transfieren por carpetas que contienen videos del curso de que deseas tomar, lo unico que tiene que hacer es contactarnos para que nos envíen su email y mandarles el acceso a una carpeta en Drive</p>
                                    </div>
                            </div>
                            <div className={s.licensing}>
                                <Link href="licensing"><p className={s.licensingp}>Software</p></Link>
                                <div className={s.ds}><p className={s.pp}>Al comprar el software necesitas tener teamviewer para poder enviar el archivo, o simplemente descargar el archivo por el link que te damos, luego de eso puedes instalar el software tú mismo, pero si necesitas ayuda podemos instalarlo de forma remota por ti</p>
                               </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className={s.work3}>
                <div className={s.tw}>
                    <div className={s.relative} >
                        <p className={s.twtitle}>TeamViewer</p>
                        <p className={s.twp}>Si necesitas puedes instalar TeamViewer</p>
                        <p className={s.go} onClick={()=>{
                            window.open('https://www.teamviewer.com/es/descarga/windows/');
                        }}>GO</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mainb;