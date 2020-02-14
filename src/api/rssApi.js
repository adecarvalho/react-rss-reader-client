const rss_flux_url = "http://localhost:8080/api/rss_reader/flux"
const rss_article_url_base = "http://localhost:8080/api/rss_reader/articles"

//
export async function getApiFlux() {
  try {
    const results = await fetch(rss_flux_url)
    const flux = await results.json()
    if (flux.message) {
      throw new Error("Error to get the rss flux")
      return null
    }
    return flux
  } catch (error) {
    throw new Error("Error to get the rss flux")
    return null
  }
}

//
export async function getApiArticle(url_end) {
  try {
    const results = await fetch(rss_article_url_base + url_end)
    const articles = await results.json()

    if (articles.message) {
      throw new Error("Error to get articles")
      return null
    }

    return articles
  } catch (error) {
    throw new Error("Error to get articles")
    return null
  }
}
