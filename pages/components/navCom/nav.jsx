import s from'./nav.module.css';
import Link from 'next/link';
import {useState, useEffect, useRef} from 'react';

function Nav(){
    const list = <div className={s.list}>
    <ul className={s.ulList}>
        <Link href={'/products'}>
            <li>
             <a>Products</a>
            </li>
        </Link>
        <Link href={'/information'}>
            <li>
                <a>Information</a>
            </li>
        </Link>
        <Link href={'/contact'}>
            <li>
                <a>Contact</a>
            </li>
        </Link>
        </ul>
    </div>
    const [menu,setMenu] = useState(list);
    let tour = 1;
    const transform = useRef(null);
    const layer = <div className={s.all} ref={transform}>
                    <Link href={'/products'}>
                        <li>
                            <a>Products</a>
                        </li>
                    </Link>
                    <Link href={'/information'}>
                        <li>
                            <a>Information</a>
                        </li>
                    </Link>
                    <Link href={'/contact'}>
                        <li>
                            <a>Contact</a>
                        </li>
                    </Link>
                </div>
    useEffect(()=>{
        if (typeof window !== "undefined") {
            if(window.innerWidth <730){
                setMenu(<div className={s.listmenu}>
                    <img src="img/list.png" className={s.imglist} onClick={()=>{
                            if(tour){
                                transform.current.style = 'transform: translate(-36%,75px)';
                                tour = 0;
                            }
                            else{
                                transform.current.style = 'transform: translate(-36%,0px)';
                                tour = 1;
                            }
                        }}/>
                    {layer}
                </div>)
            }else{
                setMenu(list)
            }
          }

        window.addEventListener('resize',()=>{
            if (typeof window !== "undefined") {
                if(window.innerWidth <730){
                    setMenu(<div className={s.listmenu}>
                        <img src="img/list.png" className={s.imglist} onClick={()=>{
                            if(tour){
                                transform.current.style = 'transform: translate(-36%,75px)';
                                tour = 0;
                            }
                            else{
                                transform.current.style = 'transform: translate(-36%,0px)';
                                tour = 1;
                            }
                        }}/>
                        {layer}
                    </div>)
                }else{
                    setMenu(list)
                }
              }
        })
    },[])

    return (
        <div className={s.nav}>
            <div className={s.logo}>
                <Link href={'/'}><img src="img/logo.svg"/></Link>
                <Link href={'/'}><p>Software Licenses</p></Link>
            </div>
            {menu}
        </div>
    )
}

export default Nav;