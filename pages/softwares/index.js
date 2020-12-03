import Navbar from '../../components/navbar/nav';
import Head from 'next/head';
import Body from './body'
import Footer from '../../components/footer/footer';

function Main(){

    return(
        <main>
            <Head>
                <title>Softwares</title>
            </Head>
            <Navbar />
            <Body />
            <Footer />
        </main>
    )
}

export default Main;