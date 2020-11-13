import Nav from './components/navCom/nav';
import Head from 'next/head';


export default () => {
    return (
        <main>
            <Head>
                <title>Licensings</title>
                <meta name="description" content="Buy yours licensings" />
            </Head>
            <nav>
                <Nav />
            </nav>
        </main>
    )
}