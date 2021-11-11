import matter from "gray-matter"
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'

const ProductPage = (props) => {

    let title = "Plura"

    return(
      <Layout title={title}>
        
        <article className="mt-5 pt-3 container w-50">
          <div>
          <img src="/img/plura/pluraHeader.png" className="mt-5 pt-3 w-100 shadow" />
          </div>
        
          <div className="mt-5 py-5 ps-5 row gx-0 shadow">
            <div className="col-4">
              <img src="/img/plura/product-category-hero-timers.png" className="w-75"/>
            </div>
            <div className="col-8 position-relative">
              <p className="fs-1 font-weight-bold position-absolute top-50 start-50 translate-middle">Master Time Clock</p>
            </div>
          </div>

          <div className="mt-3 text-end">
            <Link href="/plura"><a className="text-decoration-none text-reset">&lt;&lt;Back to Plura page</a></Link>
          </div>
          
          <div className="container">
            <div className="row">
              <div className="col">
                <img className="w-75" src={props.frontmatter.image} />
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
    })(require.context('../../data/plura', true, /\.md$/))

    const paths = productSlugs.map((productSlug) => `/plura/${productSlug}`)

    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {

    const { slug } = context.params
    const data = await import(`../../data/plura/${slug}.md`)
    const singleDocument = matter(data.default)
    
    return{
        props: {
            frontmatter: singleDocument.data,
            markdownBody: singleDocument.content,
        }
    }
}
