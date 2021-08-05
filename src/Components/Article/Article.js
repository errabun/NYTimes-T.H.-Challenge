import './Article.css'

function Article({ selectedArticle }) {

  const {title, byline, multimedia, url, published_date, abstract} = selectedArticle

  const formatDate = published_date.slice(0, 10).toString()

  return (
    <div>
      <h2>{title}</h2>
      <h4>{byline}</h4>
      <p>Published on: {formatDate}</p>
      <img src={multimedia[0].url} alt={multimedia[0].caption} height='350' width='600'/>
      <p>{abstract}</p>
      <a href={url}>Take me to this article</a>
    </div>
  )
}

export default Article 