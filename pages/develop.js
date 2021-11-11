import Layout from './components/layout'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'

const Develop = () => {
    let title = "Laguna Hills, Inc. Dvelop"
  return (
    <Layout title={title}>
      
      <article　className="mt-5 pt-3 container w-50 bg-primary">
        <h3 className="pt-3">Develop Page</h3>

      </article>

    </Layout>
  )
}

export default Develop
