import ss from './ss.module.css'
import Link from 'next/link'
function Ft(){

    return(
        <div className={ss.container}>
            <div className={ss.contain}>
                <p>Para que sistema operativo buscas</p>
                <div className={ss.bu}>
                    <Link href="../windows"><button>Windows</button></Link>
                    <Link href="../mac"><button>Mac</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Ft;