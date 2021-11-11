import Layout from './components/layout'
import Carditem from './components/carditem'
import Link from 'next/link'
import matter from "gray-matter"
import 'bootstrap/dist/css/bootstrap.min.css'

const Dataton = (props) => {

  let title = "Laguna Hills, Inc. Products Dataton"

  const mediaserver = props.datatonItem.filter(item => item.frontmatter.category === 'hardware')
  const software = props.datatonItem.filter(item => item.frontmatter.category === 'software')
  const accessory = props.datatonItem.filter(item => item.frontmatter.category === 'accessory')
  
  return (
    <Layout title={title}>
      
      <article className="mt-5 pt-3 container w-50">
        <div>
          <img src="/img/dataton/datatonHeader.png" className="mt-5 pt-3 w-100" />
        </div>       
        <img src="/img/dataton/WATCHOUT_logo_2015.webp" className="w-100 mt-3 bg-dark"/>

        <h2 className="mt-5">MEDIA Server</h2>
        <Carditem data={mediaserver} />

        <h2 className="mt-5">License / Software</h2>
        <Carditem data={software} />

        <h2 className="mt-5">アクセサリー</h2>
        <Carditem data={accessory} />

      </article>

    </Layout>
  )
}

export default Dataton

export async function getStaticProps() {

  const datatonItem = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)
    
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/,'').slice(0, -3)
      const value = values[index]
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        slug: slug
      }
    })
    return data
  })(require.context('../data/dataton', true, /\.md$/))
  
  const orderedItem = datatonItem.sort((a, b) => {
    return a.frontmatter.id - b.frontmatter.id
  })
  
  return{
    props:{
      datatonItem: orderedItem,
    }
  }
}
