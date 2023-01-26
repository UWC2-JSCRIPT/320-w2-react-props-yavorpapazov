import { useState } from "react"
import {BsBookmarkFill} from "react-icons/bs"
import {AiFillSound, AiFillStar} from "react-icons/ai"

function Article({article, articleImage, mainContainer, articleInfo}) {
  let [bookmark, setBookmark] = useState(false)
  let articleDate = new Date(article.postedDate)
  let month = new Intl.DateTimeFormat("en-US", {month: "long"}).format(articleDate)
  let date = articleDate.getDate()
  function handleClick() {
    setBookmark(prevState => !prevState)
  }
  return (
    <div className={mainContainer}>
      <div className={articleImage}>
        <a href={article.link} target="_blank">
          <img src={article.image} alt={article.title} />
        </a>
      </div>
      <div className={articleInfo}>
        <div className={article.hasAudioAvailable ? "icon-container-audio" : "icon-container"}>
          {article.hasAudioAvailable && <p><AiFillSound /> Audio available</p>}
          {article.memberPreview && <p><AiFillStar /></p>}
        </div>
        <div>
          <a href={article.link} target="_blank">
            <h3>{article.title}</h3>
          </a>
          <a href={article.link} target="_blank">
            <p>{article.description}</p>
          </a>
        </div>
        <div className="author-container">
          <div className="author-image">
            <img 
              className={article.author.isMediumMember ? "author-image-outline" : undefined} 
              src={article.author.image} 
              alt={article.author.name} 
            />
          </div>
          <div>
            <p>{article.author.name}</p>
            <p>{`${month} ${date}`} - {article.minutesToRead} min read</p>
          </div>
          <div onClick={handleClick}>
            <BsBookmarkFill className={bookmark ? "bookmark" : undefined} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article