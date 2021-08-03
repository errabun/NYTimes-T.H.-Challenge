const apiKey='xK7RQqZlQJNbAVvD3uspG5xdju3gGsvV'

export const fetchSelectNews = (newsSelection) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${newsSelection}.json?api-key=${apiKey}`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error('Couldn\'t find any articles, please try again')
      } else {
        return resp.json()
      }
    })
}