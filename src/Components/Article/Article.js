import './Article.css'

function Article({ selectedArticle }) {

  const {title, byline, multimedia, url, published_date, abstract} = selectedArticle

  const formatDate = published_date.slice(0, 10).toString()

  return (
    <div className='article-container'>
      <h1 className='title'>{title}</h1>
      <h4>{byline} <span>Published on: {formatDate}</span></h4>
      <div className='img-container'>
        <img src={multimedia[0].url} alt={multimedia[0].caption} height='350' width='600'/>
        <div className='abstract-container'>
          <p>{abstract}</p>
          <a href={url}>Take me to this article</a>
        </div>
      </div>
    </div>
  )
}

export default Article 