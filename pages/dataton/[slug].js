import matter from "gray-matter"
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
import Link from 'next/link'
import  SpecificTable from "../components/specificTable"
import 'bootstrap/dist/css/bootstrap.min.css'

const ProductPage = (props) => {

    let title = "Dataton"

    return(
      <Layout title={title}>
        
        <article className="mt-5 pt-3 container w-50">
          <div>
            <img src="/img/dataton/datatonHeader.png" className="mt-5 pt-3 w-100" />
          </div>
          
          <div className="card bg-dark text-white rounded-0 mt-2">
            <img className="bd-placeholder-img bd-placeholder-img-lg card-img" src={props.frontmatter.jacketimg} />
            <div className="card-img-overlay position-absolute top-50 start-50 translate-middle text-center">
              <p className="fs-1 fw-bold mb-0">{props.frontmatter.jackettitle}</p>
              <p className="fs-3 mt-n5">{props.frontmatter.subtitle}</p>
            </div>
          </div>

          <div className="mt-3 text-end">
            <Link href="/dataton"><a className="text-decoration-none text-reset">&lt;&lt;Back to Dataton page</a></Link>
          </div>
          
          <div className="container">
            <div className="row">
              <div className="col">
                <img className="w-75" src={props.frontmatter.image2} />
              </div>
              <div className="col">
                <h1 className="mt-5 pt-5">{props.frontmatter.title}</h1>
                <p>{props.frontmatter.excerpt}</p>
    　        </div>
  　        </div>
          </div>

          <hr />
          <div className="mt-5">
              <ReactMarkdown children={props.markdownBody} />
          </div>

          <div>
            {(props.frontmatter.table) ?
              <SpecificTable watchpax={props.frontmatter.productname} />
              :
              <></>
            }
          </div>

        </article>

      </Layout>
    )
}

export default ProductPage

export async function getStaticPaths() {

    const productSlugs = ((context) => {
        const keys = context.keys()
        const data = keys.map((key, index) => {
            let slug = key.replace(/^.*[\\\/]/,'').slice(0, -3)
            return slug
        })
        return data
    })(require.context('../../data/dataton', true, /\.md$/))

    const paths = productSlugs.map((productSlug) => `/dataton/${productSlug}`)

    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {

    const { slug } = context.params
    const data = await import(`../../data/dataton/${slug}.md`)
    const singleDocument = matter(data.default)
    
    return{
        props: {
            frontmatter: singleDocument.data,
            markdownBody: singleDocument.content,
        }
    }
}
