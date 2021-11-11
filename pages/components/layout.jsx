import Head from 'next/head'
import Header from './header'
import Footer from './footer'

const Layout = (props) => {

    return(
        <>
            <Head>
                <title>{props.title}</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/css/flag-icon.min.css"
                    integrity="sha512-Cv93isQdFwaKBV+Z4X8kaVBYWHST58Xb/jVOcV9aRsGSArZsgAnFIhMpDoMDcFNoUtday1hdjn0nGp3+KZyyFw==" 
                    crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <Header />
            <>{props.children}</>
            <Footer />
        </>
    )
}
export default Layout
