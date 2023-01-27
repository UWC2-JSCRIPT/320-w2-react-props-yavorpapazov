import classes from "./Article.module.css"
import { useState } from "react"
import {BsBookmarkFill} from "react-icons/bs"
import {AiFillSound, AiFillStar} from "react-icons/ai"
import PropTypes from "prop-types"

function Article({article, articleImage, mainContainer, articleInfo}) {
  let [bookmark, setBookmark] = useState(false)
  let articleDate = new Date(article.postedDate)
  let month = new Intl.DateTimeFormat("en-US", {month: "long"}).format(articleDate)
  let date = articleDate.getDate()
  function handleClick() {
    setBookmark(prevState => !prevState)
  }
  return (
    <div className={classes[mainContainer]}>
      <div className={classes[articleImage]}>
        <a href={article.link} target="_blank">
          <img src={article.image} alt={article.title} />
        </a>
      </div>
      <div className={classes[articleInfo]}>
        <div className={article.hasAudioAvailable ? classes["icon-container-audio"] : classes["icon-container"]}>
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
        <div className={classes["author-container"]}>
          <div className={classes["author-image"]}>
            <img 
              className={article.author.isMediumMember ? classes["author-image-outline"] : undefined} 
              src={article.author.image} 
              alt={article.author.name} 
            />
          </div>
          <div>
            <p>{article.author.name}</p>
            <p>{`${month} ${date}`} - {article.minutesToRead} min read</p>
          </div>
          <div onClick={handleClick}>
            <BsBookmarkFill className={bookmark ? classes["bookmark"] : undefined} />
          </div>
        </div>
      </div>
    </div>
  )
}

Article.propTypes = {
  article: PropTypes.object.isRequired,
  articleImage: PropTypes.string.isRequired,
  mainContainer: PropTypes.string.isRequired,
  articleInfo: PropTypes.string.isRequired
}

export default Article