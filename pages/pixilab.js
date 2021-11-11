import Layout from './components/layout'
import Blocks from "../styles/pixilab.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css'

const pixilab = () => {
  let title = "laguna hills, inc. products pixilab"
  return (
    <Layout title={title}>
      
      <article className="mt-5 pt-3 container w-50">
        <div>
          <img src="/img/pixilab/pixilabheader.png" className="mt-5 pt-3 w-100" />
        </div>

        <div className="row bg-dark gx-0">
          <div className="col-6">
            <img src="/img/pixilab/blocks5-out-now.jpg" className="w-100"/>
          </div>
          <div className="col-6 position-relative">
            <div className={Blocks.blocks5}>
              <p className="text-white position-absolute top-50 start-50 translate-middle">blocks 5</p>
            </div>
            </div>
        </div>
      </article>

    </Layout>
  )
}

export default pixilab
// font-family "Nationale Bold""Nationale Bold"

