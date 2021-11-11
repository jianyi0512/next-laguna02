import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'

const Carditem = (props) => {

  console.log(props)
    return(
        <>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
        {props.data.map((value, index) => 
          <div className="col" key={index}>
            <div className="card h-100">
              <img src={value.frontmatter.image} className="card-img-top border-bottom" alt={value.frontmatter.title} />
              <div className="card-body">
                <h5 className="card-title">{value.frontmatter.title}</h5>
                <p className="card-text">{value.frontmatter.excerpt}</p>
                <Link href={`/${value.frontmatter.company}/${value.slug}`}><a className="stretched-link"></a></Link>
              </div>
            </div>
          </div>
        )}
        </div>
        </>
    )
}

export default Carditem
