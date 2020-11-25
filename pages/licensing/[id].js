import {useRouter} from 'next/router';
import licencias from './licencias.json';

const Licen = ()=>{
    const router = useRouter();
    const l = licencias.filter((e)=> e.name.trim() == router.query.id.trim())[0];
    console.log(l)
    return(
        <div>
            {l.des}
        </div>
    )
};

export default Licen;