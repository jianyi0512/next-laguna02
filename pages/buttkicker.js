import Layout from './components/layout'
import Carditem from './components/carditem'
import matter from 'gray-matter'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'

const Buttkicker = (props) => {
  let title = "Laguna Hills, Inc. Products Buttkicker"

  const hardware = props.bkItem.filter(item => item.frontmatter.category === 'hardware')
  const accessory = props.bkItem.filter(item => item.frontmatter.category === 'accessory')

  return (
    <Layout title={title}>
      
      <article className="mt-5 pt-3 container w-50">
        <div>
          <img src="/img/buttkicker/buttkickerHeader.png" className="mt-5 pt-3 w-100" />
          <img src="/img/buttkicker/buttkicker4d.png" className="w-100 mt-3"/>
        </div>

        <Carditem data={hardware} />

        <Carditem data={accessory} />
        
      </article>

    
    </Layout>
  )
}

export default Buttkicker

export async function getStaticProps() {

  const bkItem = ((context) => {
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
  })(require.context('../data/buttkicker', true, /\.md$/))
  
  const orderedItem = bkItem.sort((a, b) => {
    return a.frontmatter.id - b.frontmatter.id
  })
  
  return{
    props:{
      bkItem: orderedItem,
    }
  }
}