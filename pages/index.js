import Layout from './components/layout'
import Phyer from "./components/phyer"
import 'bootstrap/dist/css/bootstrap.min.css'

const Index = () => {
  let title = "Laguna Hills, Inc. Home"

  return (
    <Layout title={title}>
      <article　className="mt-5 mb-5 pt-5">
        <Phyer />
        <div className="mt-5 pt-3 container w-50 text-center">
          <h3 >お知らせ</h3>
          <p>新型コロナウィルス（COVID-19）の感染予防を目的とした時差通勤の為、弊社の営業時間を、平日10:30〜16:30に変更させていただきます。</p>
        </div>
      </article>
    </Layout>
  )
}

export default Index
