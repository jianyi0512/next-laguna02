import Layout from './components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'

const Aboutus = () => {
    let title = "Laguna Hills, Inc. Info"
  return (
    <Layout title={title}>
      
      <article　className="mt-5 pt-3 container w-50">
        <h3 className="pt-3">会社概要</h3>
        <hr />
        <dl className="row lh-lg bg-light pt-4 pb-4">
          <dt className="col-2 text-end">社名</dt>
          <dd className="col-10">株式会社ラグナヒルズ</dd>
          <dt className="col-2 text-end">所在地</dt>
          <dd className="col-10">〒102-0083<br/>東京都千代田区麹町3-5-2 BUREX麹町<br/><a href="https://goo.gl/maps/awdzS4USmRCMjZ4A9" target="_blank" className="text-body">Google Map</a></dd>
          <dt className="col-2 text-end">電話番号<br/>FAX</dt>
          <dd className="col-10">03(3238)6391<br/>03(3238)6399</dd>
          <dt className="col-2 text-end">設立</dt>
          <dd className="col-10">1989年11月</dd>
          <dt className="col-2 text-end">資本金</dt>
          <dd className="col-10">2,700万円</dd>
          <dt className="col-2 text-end">代表取締役</dt>
          <dd className="col-10">日笠山　泉</dd>
          <dt className="col-2 text-end">社員数</dt>
          <dd className="col-10">取締役２名,正社員2名</dd>
          <dt className="col-2 text-end">事業内容</dt>
          <dd className="col-10">
            <ul className="list-unstyled">
              <li>常設展示館、放送局、ホール、各種イベント等の映像・音響制御システムの設計、製作。</li>
              <li>業務用、放送用映像・音響機器の設計、製作、及び販売。</li>
              <li>各種マルチメディア関連の企画、制作。</li>
            </ul>
          </dd>
        </dl>
        
        <h3 className="pt-3">沿革</h3>
        <hr />
        <dl className="row lh-lg bg-light pt-4 pb-4">
          <dt className="col-2 text-end">1989年11月</dt>
          <dd className="col-10">東京都墨田区向島に株式会社ラグナヒルズを設立。（映像システム部・映像制作部）</dd>
          <dt className="col-2 text-end">1993年5月</dt>
          <dd className="col-10">東京都渋谷区富ヶ谷に移転</dd>
          <dt className="col-2 text-end">1993年11月</dt>
          <dd className="col-10">国際放送機器展（InterBEE）に出展を始める</dd>
          <dt className="col-2 text-end">1994年10月</dt>
          <dd className="col-10">VEETRONIX社（米）製品輸入開始</dd>
          <dt className="col-2 text-end">1995年8月</dt>
          <dd className="col-10">東京都渋谷区松涛に移転映像制作部門が有限会社ラグナムーヴとして独立</dd>
          <dt className="col-2 text-end">1996年7月</dt>
          <dd className="col-10">CALCULATED INDUSTRIES社（米）製品輸入開始</dd>
          <dt className="col-2 text-end">1997年2月</dt>
          <dd className="col-10">東京都国立市に開発室を開設</dd>
          <dt className="col-2 text-end">1997年10月</dt>
          <dd className="col-10">Plura（旧Alpermann+Velte）社（独）製品輸入開始</dd>
          <dt className="col-2 text-end">1998年12月</dt>
          <dd className="col-10">埼玉県入間市に開発室を移転</dd>
          <dt className="col-2 text-end">2001年6月</dt>
          <dd className="col-10">ADTEC Digital社（米）製品輸入開始</dd>
          <dt className="col-2 text-end">2002年2月</dt>
          <dd className="col-10">Imagine Graphics社（英）（現Pixels社）製品輸入開始</dd>
          <dt className="col-2 text-end">2005年3月</dt>
          <dd className="col-10">AuviTran社（仏）製品輸入開始</dd>
          <dt className="col-2 text-end">2005年6月</dt>
          <dd className="col-10">東京都新宿区に本社及び開発室を移転</dd>
          <dt className="col-2 text-end">2005年10月</dt>
          <dd className="col-10">Dataton社（スウェーデン）製品輸入開始</dd>
          <dt className="col-2 text-end">2007年3月</dt>
          <dd className="col-10">
            <ul className="list-unstyled">
              <li>第18回電気設備学会技術部門開発賞受賞「ネットワーク利用の放送設備システムの開発」</li>
              <li>共同開発者：鹿島建設・フォスター電機・アキュフェーズ</li>
            </ul>
          </dd>
          <dt className="col-2 text-end">2008年10月</dt>
          <dd className="col-10">東京都千代田区に本社を移転</dd>
        </dl>

        <h3 className="pt-5">主な取引先</h3>
        <hr />
        <dl className="row lh-lg bg-light pt-4 pb-4">
          <dt className="col-2 text-end">会社名</dt>
          <dd className="col-10">
            <ul className="list-unstyled">
              <li>株式会社映像センター / 株式会社ゴーズ / 株式会社シーマ株式会社 / 株式会社教映社 / ヒビノ株式会社 </li>
            </ul>
          </dd>
        </dl>
        {/* <div>
        鹿島建設株式会社システムエンジニアリングジャトー株式会社パナソニックテクニカルサービス株式会社株式会社竹中工務店株式会社タムラ製作所株式会社電通テック株式会社東和エンジニアリング日本放送協会パナソニックシステムソリューションズジャパン株式会社ピー・ディー・シー株式会社ヒビノ株式会社フォスター電機株式会社ヤマハサウンドシステム株式会社株式会社朋栄株式会社毎日映像音響システム森ビル株式会社ヤマハ株式会社株式会社ワタナベ楽器店
        </div> */}
      </article>

    </Layout>
  )
}

export default Aboutus
