import {useRouter} from 'next/router';

const Licen = ()=>{
    const router = useRouter();

    return(
        <div>
            {router.query.id}
        </div>
    )
};

export default Licen;