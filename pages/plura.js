import Layout from './components/layout'
import Carditem from './components/carditem'
import matter from "gray-matter"
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'

const Plura = (props) => {
  let title = "Laguna Hills, Inc. Products Plura"

  const housing = props.pluraItem.filter(item => item.frontmatter.category === 'housing')
  const moduleCards = props.pluraItem.filter(item => item.frontmatter.category === 'modulecard')
  const gps = props.pluraItem.filter(item => item.frontmatter.category === 'gps')
  const mtd = props.pluraItem.filter(item => item.frontmatter.category === 'mtd')
  const pcie = props.pluraItem.filter(item => item.frontmatter.category === 'pcie')

  return (
    <Layout titel={title}>

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

        <h2 className="mt-5">Rubidium Series</h2>
        <h3>Housing</h3>
        <Carditem data={housing} />

        <h3 className="mt-5">Module</h3>
        <Carditem data={moduleCards} />

        <h3 className="mt-5">GPS Module</h3>
        <Carditem data={gps} />

        <h2 className="mt-5">MTD Timer</h2>
        <Carditem data={mtd} />

        <h2 className="mt-5">PCIe for PC Cards</h2>
        <Carditem data={pcie} />      
      </article>

    </Layout>
  )
}

export default Plura

export async function getStaticProps() {

  const pluraItem = ((context) => {
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
  })(require.context('../data/plura', true, /\.md$/))
  
  const orderedItem = pluraItem.sort((a, b) => {
    return a.frontmatter.id - b.frontmatter.id
  })
  
  return{
    props:{
      pluraItem: orderedItem,
    }
  }
}
