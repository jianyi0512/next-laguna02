import Link from 'next/link'
import comstyle from "../../styles/common.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css'

const Footer = () => {

    return(
        <>
            <footer className="footer mt-5 py-5 container-fluid" className={comstyle.bgBlack} >
               
                <div className="container w-50 ">
                    <img src="/img/lagunahills/LagunaHills_footer.svg" className="container w-25 d-block mx-auto"/>
                </div>

                {/* <div className="container text-light">
                    <div className="row text-center">
                        <div className="col">輸入製品</div>
                        <div className="col">自社製品</div>
                        <div className="col">会社案内</div>
                        <div className="col">問合せ</div>
                    </div>
                </div>
                
                <p className="text-muted text-center">Laguna Hills, Inc.</p> */}
            </footer>
        </>
    )

}

export default Footer
