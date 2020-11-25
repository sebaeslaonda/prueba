import Head from 'next/head';
import Navbar from '../../components/navbar/nav';
import Body from '../../components/body/contactb';
import Footer from '../../components/footer/footer'

function Sd(){
    return(
        <main>
            <Head>
                <title>Contact</title>
            </Head>
            <Navbar color="#5FCBEA"/>
            <Body />
            <Footer />
        </main>
    )
}
export default Sd;