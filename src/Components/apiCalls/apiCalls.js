const apiKey='xK7RQqZlQJNbAVvD3uspG5xdju3gGsvV'

export const fetchSelectNews = async (newsSelection) => {
  const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${newsSelection}.json?api-key=${apiKey}`)
  const articles = await response.json()
  return articles
}