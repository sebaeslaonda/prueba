import Navbar from '../../components/navbar/nav';
import Footer from '../../components/footer/footer'
import Body from './body';
import Head from 'next/head';
function Main(){
    return(
        <main>
            <Head>
                <title>Courses</title>
            </Head>
            <Navbar />
            <Body />
            <Footer />
        </main>
    )
}
export default Main;