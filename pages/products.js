import Layout from './components/layout'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'

const Products = () => {
  let title = "Laguna Hills, Inc. Products"
  return (
    <Layout title={title}>
      
      <article　className="mt-5 pt-3 container w-50">
        <h3 className="pt-3">輸入製品</h3>
        <hr />
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">

          <div className="col">
            <div className="card h-100">
              <img src="/img/dataton/dataton.png" className="card-img-top" alt="dataton logo" />
              <div className="card-body">
                <h5 className="card-title">Dataton<span className="flag-icon flag-icon-se ms-2"></span></h5>
                <p className="card-text">WATCHOUTは、マルチプロジェクションを行うソフトウェアです。<br/>世界的にも数々のイベントや商業施設で使用されています。<br/>ビデオ編集ソフトと変わらない操作で扱いやすいソフトウェアです。</p>
                <Link href="/dataton"><a className="stretched-link"></a></Link>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="/img/pixilab/pixilab.png" className="card-img-top" alt="pixilab logo" />
              <div className="card-body">
                <h5 className="card-title">PIXILAB<span className="flag-icon flag-icon-se ms-2"></span></h5>
                <p className="card-text">BLOCKSは、音声ガイド・デジタルサイネージ・タッチパネル…といった商業施設・美術館・博物館・イベントで必要とされる様々な要求を解決するソフトウェアです。<br/>音声ガイドは、ユーザ所有のスマートフォンで楽しむ事ができます。特別なアプリケーションのダウンロードは不要で、ChromeもしくはSafariのブラウザーソフトウェアで対応できます。</p>
                <Link href="/pixilab"><a className="stretched-link"></a></Link>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="/img/plura/plura.png" className="card-img-top" alt="plura logo" />
              <div className="card-body">
                <h5 className="card-title">Plura<span className="flag-icon flag-icon-us ms-2"></span></h5>
                <p className="card-text">Plura（旧Alpermann+Velte）（ドイツ）は創設後35年以上に渡って放送局等のプロフェッショナルなマーケットに対してタイムコード関連製品、クロック・システム等を設計、製造、販売をしています。<br/>更に近年は、製品販売のみならず顧客が要求するスペックを踏まえたアプリケーションやソリューションを含めた活動によって顧客に対するサービスを強固にしています。</p>
                <Link href="/plura"><a className="stretched-link"></a></Link>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="/img/auvitran/auvitran.png" className="card-img-top" alt="auvitran logo" />
              <div className="card-body">
                <h5 className="card-title">Auvitran<span className="flag-icon flag-icon-fr ms-2"></span></h5>
                <p className="card-text">AuviTranは、幅広いオーディオネットワーキング製品（オーディオツールボックス、ネットワークブリッジ、ブレイクアウトボックス、ソフトウェア）を提案しています。 <br/>AVDT-BOB製品は、アナログとAES3が出力され、DSPが統合されたコンパクトなDanteマイクブレイクアウトボックスです。</p>
                <Link href="/auvitran"><a className="stretched-link"></a></Link>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="/img/buttkicker/buttkicker.png" className="card-img-top" alt="buttkicker logo" />
              <div className="card-body">
                <h5 className="card-title">Buttkicker<span className="flag-icon flag-icon-us ms-2"></span></h5>
                <p className="card-text">ButtKicker®ブランドの製品は、<br/>映画館、シミュレーションライド、ダンスフロア、4Dシアター、プラネタリウム、サイエンスセンター、遊園地、といった世界中のアトラクションで<br/>体感型4Dエンターテイメントとして使用されています。</p>
                <Link href="/buttkicker"><a className="stretched-link"></a></Link>
              </div>
            </div>
          </div>
        </div>

        {/* <h3 className="mt-5">自社開発製品</h3>

        <hr />
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">

          <div className="col">
              <div className="card h-100">
                <img src="/img/lagunahills/lagunahills.png" className="card-img-top" alt="lagunahills logo" />
                <div className="card-body">
                  <h5 className="card-title">Laguna Hills</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link href="/lagunahills"><a className="stretched-link"></a></Link>
                </div>
              </div>
            </div>
        </div> */}
      </article>

    </Layout>
  )
}
export default Products
