import {useRouter} from 'next/router';
import licencias from './licencias.json';

const Licen = ()=>{
    const router = useRouter();
    const l = licencias.filter((e)=> e.name == router.query.id)[0];
    console.log(l)
    return(
        <div>
            {l.des}
        </div>
    )
};

export default Licen;