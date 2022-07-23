import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
function App() {
  const [newsData, setNewsData] = useState([])
  const getNewsData = async () => {
    const newsDataResp = await axios.post(
      'http://devapi.hidoc.co:8080/hidoc-us/api/v1/getArticlesByUid',
      {
        sId: 5,
        uuId: 0,
      },
    )
    setNewsData(newsDataResp.data.data)
  }
  useEffect(() => {
    getNewsData()
  }, [])
  return (
    <>
      <header></header>
      <body className="bodyContainer">
        <div className="headlineContainer">
          <div>
            <h2 className="heading d-flex justify-content-center">News</h2>
          </div>
          <div className="newsHeadline d-flex align-items-center">
            <div>
              <img
                src={newsData?.article?.articleImg}
                className="imgContainer"
              ></img>
            </div>
            <div>
              <h3>{newsData?.article?.articleTitle}</h3>
              <p>{newsData?.article?.articleDescription} </p>
              <a href={newsData?.article?.redirectLink}>Read full news</a>
            </div>
          </div>
        </div>
        <div className="moreNews d-flex justify-content-betweeen">
          <div className="latest p-2">
            <h4 className="d-flex justify-content-center">Latest News</h4>
            <ul>
              {newsData?.latestArticle?.map(function (article) {
                return (
                  <li>
                    <a href={article.redirectLink}>{article.articleTitle}</a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="latest p-2 mr-10">
            <h4 className="d-flex justify-content-center">Trending News</h4>
            <ul>
              {newsData?.trandingArticle?.map(function (article) {
                return (
                  <li>
                    <img src={article.articleImg} />
                    <a href={article.redirectLink}>{article.articleTitle}</a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="latest p-2">
            <h4 className="d-flex justify-content-center">
              Explore more in News
            </h4>
            <ul>
              {newsData?.exploreArticle?.map(function (article) {
                return (
                  <li>
                    <h4>{article.articleTitle}</h4>
                    <p>{article.articleDescription}</p>
                  </li>
                )
              })}
            </ul>
            <button>Explore Hidoc Dr</button>
          </div>
        </div>
        <div>
          <div>
            <div>
              <h2>Whats more on doc</h2>
            </div>
            <div className="moreOptions d-flex row">
              <div className="newS col-sm-4">
                <h4>news</h4>
                <p>
                  accident on the highway connecting mumbai to pune. this is a
                  news report regarding an accident on the highway connecting
                  mumbai to pune. this is a news report regarding an accident on
                  the highway connecting mumbai to pune. this is a news report
                  regarding an accident on the highway connecting mumbai to
                  pune.
                </p>
              </div>
              <div className="col-sm-4">
                <img
                  src="https://sgp1.digitaloceanspaces.com/hidoc-files/hidoc-client-files/1650980800195.jpg"
                  className="imgContainer"
                ></img>
              </div>
              <div className="col-sm-4">
                <div>
                  <icon></icon>
                  <h4>quizes : </h4>
                  <p>play and win</p>
                </div>
                <div>
                  <icon></icon>
                  <h4>quizes : </h4>
                  <p>play and win</p>
                </div>
                <div>
                  <icon></icon>
                  <h4>quizes : </h4>
                  <p>play and win</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>social newtwork for doctors-A special feature on hidoc</h2>
            <a>
              <h2>visit</h2>
            </a>
          </div>
        </div>
      </body>
      <footer></footer>
    </>
  )
}

export default App
