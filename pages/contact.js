import Layout from './components/layout'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'

const Contact = () => {
    let title = "Laguna Hills, Inc. Contact"
  return (
    <Layout title={title}>
      
      <article　className="mt-5 pt-3 container w-50">
        <h3 className="pt-3 text-center">問合せフォーム</h3>
        <p className="text-end">*営業目的のお問合せは、ご遠慮ください。</p>
        <hr />
        <form action="" className="mt-5 container w-75">
          <div className="container bg-light">
            <div className="row justify-content-center pt-5">
              <div className="col-4">お名前</div>
              <div className="col-4">
                <input type="text"></input>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <div className="col-4">会社名</div>
              <div className="col-4">
                <input type="text"></input>
              </div>
            </div>

            <div className="row justify-content-center mt-5">
              <div className="col-4">メールアドレス</div>
              <div className="col-4">
                <input type="mail"></input>
              </div>
            </div>

            <div className="row justify-content-center mt-5">
              <div className="col-4">
                <div>問合せ内容</div>
              </div>
              <div className="col-4">
                <div>
                  <input type="radio" name="company" value="dataton"></input>
                  <label for="dataton">Dataton製品　価格・納期について</label>
                </div>

                <div className="mt-5">
                  <input type="radio" name="company" value="pixilab"></input>
                  <label for="pixilab">PixiLAB製品　価格・納期について</label>
                </div>

                <div className="mt-5">
                  <input type="radio" name="company" value="plura"></input>
                  <label for="plura">Plura製品　価格・納期について</label>
                </div>

                <div className="mt-5">
                  <input type="radio" name="company" value="auvitran"></input>
                  <label for="auvitran">AuviTran製品　価格・納期について</label>
                </div>

                <div className="mt-5">
                  <input type="radio" name="company" value="buttkicker"></input>
                  <label for="buttkicker">Buttkicker製品　価格・納期について</label>
                </div>

                <div className="mt-5">
                  <input type="radio" name="company" value="system7000"></input>
                  <label for="system7000">制御システム開発について</label>
                </div>
              </div>
            </div>
            <div className="row justify-content-center  w-50 mt-5 mx-auto pb-5">
              <input type="submit" value="送信"></input>
            </div>
          </div>
        </form>

      </article>

    </Layout>
  )
}

export default Contact
