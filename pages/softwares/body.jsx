import ss from './ss.module.css'
import Link from 'next/link'
function Ft(){

    return(
        <div className={ss.container}>
            <div className={ss.contain}>
                <p>Para que sistema operativo buscas</p>
                <div className={ss.bu}>
                    <Link href="../windows"><button><img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Windows_logo_-_2012.png" /></button></Link>
                    <Link href="../mac"><button><img src="https://i.ibb.co/cbPvWr6/5a36c9d60285b8-3366861215135400540103.png"/></button></Link>
                </div>
            </div>
        </div>
    )
}

export default Ft;