import s from './mainb.module.css';
import Link from 'next/link'
const Mainb = ()=>{
    return(
        <div className={s.container}>
            <div className={s.contain}>
                <div className={s.licen}>
                    <div className={s.h2}>
                        <p className={s.title}>Licencias y cursos para ti</p>
                        <p className={s.lorem}>Encuentre las licencias y los cursos que necesita para crecer profesionalmente,
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
                                <div className={s.ds}><p className={s.pp}>Los cursos que te enviamos son una serie de carpetas que
                                     contienen los videos del curso que deseas tomar, te lo enviamos por teamviewer puedes descargarlo por un link que te daremos </p>
                                    </div>
                            </div>
                            <div className={s.licensing}>
                                <Link href="licensing"><p className={s.licensingp}>Licencias</p></Link>
                                <div className={s.ds}><p className={s.pp}>Al comprar la licencia necesitas tener teamviewer para poder enviar el archivo, o simplemente descargar el archivo por el link que te damos, luego de eso puedes activar la licencia tú mismo, pero si necesitas ayuda podemos activarla de forma remota por ti</p>
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