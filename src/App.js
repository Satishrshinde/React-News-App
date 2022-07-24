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
  console.log(newsData)
  useEffect(() => {
    getNewsData()
  }, [])
  return (
    <>
      <header className="row mt-5">
        <ul className="d-flex">
          <img src="https://hidoc.co/assets/img/logo/logo-desktop.png" />
          <a href="social"> social Network |</a>
          <a href="social"> Drug Database |</a>
          <a href="social"> Medical calculator |</a>
          <a href="social"> Articles |</a>
          <a href="social"> News |</a>
          <a href="social"> Quizzes |</a>
          <a href="social"> Survey |</a>
          <a href="social"> Drug Interaction |</a>
          <a href="social"> Diseases Database |</a>
        </ul>
      </header>
      <body className="bodyContainer">
        <div className="headlineContainer">
          <div>
            <h2 className="heading d-flex justify-content-center mb-4 ">
              News
            </h2>
          </div>
          <div className="newsHeadline d-flex mb-4">
            <div>
              <img
                src={newsData?.article?.articleImg}
                className="imgContainer mr-4"
              />
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
                  <li className="newsList">
                    <a href={article.redirectLink}>{article.articleTitle}</a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="latest p-2 mx-3">
            <h4 className="d-flex justify-content-center">Trending News</h4>
            <ul>
              {newsData?.trandingArticle?.map(function (article) {
                return (
                  <li>
                    <img
                      className="imgContainer mr-5"
                      src={article.articleImg}
                    />
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
                    <a href={article.redirectLink}>
                      <p>{article.articleDescription}</p>
                    </a>
                  </li>
                )
              })}
            </ul>
            <button className="btn btn-primary btn-lg btn-block">
              Explore Hidoc Dr
            </button>
          </div>
        </div>
        <div>
          <div className="my-4">
            <div className="d-flex justify-content-center">
              <h2>Whats more on doc</h2>
            </div>
            <div className="moreOptions d-flex row align-items-center">
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
              <div className="col-sm-4 p-2 latest">
                <div className="moreOndoc1 d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="white"
                    class="bi bi-patch-question"
                    className="font"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z" />
                    <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                    <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" />
                  </svg>
                  <h5>Quizzes : </h5>
                  <span>play and win</span>
                </div>
                <div className="moreOndoc1 d-flex">
                  <icon></icon>
                  <h5>Surveys: </h5>
                  <span>play and win</span>
                </div>
                <div className="moreOndoc1 d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="white"
                    class="bi bi-calculator"
                    className="font"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                    <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z" />
                  </svg>

                  <h5>Medical calculator: </h5>
                  <span>play and win</span>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex  ">
            <h2>social newtwork for doctors-A special feature on hidoc</h2>
            <button className="visitButton">
              <a>
                <h2>visit</h2>
              </a>
            </button>
          </div>
        </div>
      </body>
      <footer></footer>
    </>
  )
}

export default App
