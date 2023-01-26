import yourArticles from "./data/your-articles.json"
import missedArticles from "./data/missed-articles.json"
import Article from "./components/Article"

function App() {
  let result = yourArticles.map(item => <Article 
    key={item.title} 
    article={item}
    articleImage="article-image"
    mainContainer="main-container"
    articleInfo="article-info"
  />)
  let resultMissed = missedArticles.map(item => <Article 
    key={item.title} 
    article={item} 
    articleImage="article-image-2"
    mainContainer="main-container-2"
    articleInfo="article-info-2"
  />)
  return (
    <div>
      <h3>For you</h3>
      <div className="grid-container">
        {result}
      </div>
      <h3>In case you missed it</h3>
      <div className="grid-container-2">
        {resultMissed}
      </div>
    </div>
  )
}

export default App