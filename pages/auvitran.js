import Layout from './components/layout'
import Carditem from './components/carditem'
import matter from "gray-matter"
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'

const Auvitran = (props) => {
  let title = "Laguna Hills, Inc. Products Auvitran"

  const bob = props.auvitranItem.filter(item => item.frontmatter.category === 'bob')
  const frame = props.auvitranItem.filter(item => item.frontmatter.category === 'frame')
  const cards = props.auvitranItem.filter(item => item.frontmatter.category === 'cards')
  
  return (
    <Layout title={title}>
      
      <article className="mt-5 pt-3 container w-50">
        <div>
          <img src="/img/auvitran/auvitranHeader.png" className="mt-5 pt-3 w-100" />
          <img src="/img/auvitran/auvitran_banner.png" className="w-100 mt-3 bg-dark"/>
        </div>
        <h2 className="mt-5">AVDT-BOB</h2>
        <Carditem data={bob} />
        
        <h2 className="mt-5">Audio ToolBox</h2>
        <h3>Frame</h3>
        <Carditem data={frame} />

        <h2 className="mt-5">Audio ToolBox</h2> 
        <h3>Network Interface Cards</h3>
        <Carditem data={cards} />
        
      </article>

    </Layout>
  )
}

export default Auvitran

export async function getStaticProps() {

  const auvitranItem = ((context) => {
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
  })(require.context('../data/auvitran', true, /\.md$/))
  
  const orderedItem = auvitranItem.sort((a, b) => {
    return a.frontmatter.id - b.frontmatter.id
  })
  
  return{
    props:{
      auvitranItem: orderedItem,
    }
  }
}