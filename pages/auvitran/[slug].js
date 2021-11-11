import matter from "gray-matter"
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'

const ProductPage = (props) => {

    let title = "Auvitran"

    return(
      <Layout title={title}>
        
        <article className="mt-5 pt-3 container w-50">
            <div>
                <img src="/img/auvitran/auvitranHeader.png" className="mt-5 pt-3 w-100" />
                <img src="/img/auvitran/auvitran_banner.png" className="w-100 mt-3 bg-dark"/>
            </div>
            <div className="mt-3 text-end">
                <Link href="/auvitran"><a className="text-decoration-none text-reset">&lt;&lt;Back to Auvitran page</a></Link>
            </div>
            <div className="container mt-5">
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
    })(require.context('../../data/auvitran', true, /\.md$/))

    const paths = productSlugs.map((productSlug) => `/auvitran/${productSlug}`)

    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {

    const { slug } = context.params
    const data = await import(`../../data/auvitran/${slug}.md`)
    const singleDocument = matter(data.default)
    
    return{
        props: {
            frontmatter: singleDocument.data,
            markdownBody: singleDocument.content,
        }
    }
}
