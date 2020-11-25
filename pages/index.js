import Head from 'next/head';
import Navbar from '../components/navbar/nav';
import Body from '../components/body/mainb';
import Footer from '../components/footer/footer';

function Main(){
    return(
        <main>
            <Head>
                <title>Software Licenses</title>
            </Head>
            <Navbar />
            <Body />
            <Footer />
        </main>
    )
}

export default Main;