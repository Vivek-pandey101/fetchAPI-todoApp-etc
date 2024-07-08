import { Settings } from "lucide-react";
import React, { useEffect, useState } from "react";

function HomePage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9569296f75f3448b8e0266f03c09f0c1"
    )
      .then((response) => response.json())
      .then((data) => {
        return setArticles(data.articles);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="HomePage">
      {articles.length === 0 ? (
        <p className="loading" style={{position:'fixed', inset:'0'}}>
          <Settings size={40} />{" "}
        </p>
      ) : (
        articles.map((article) => (
          <div className="newsContainer">
            <ul key={article.publishedAt}>
              <li>
                <h3>Author:</h3> <h4>{article.author}</h4>
              </li>
              <li>
                <h3>Published At:</h3>{" "}
                <b>
                  <i>{article.publishedAt}</i>
                </b>{" "}
              </li>
              <li>
                <h3>Title:</h3> <b>{article.title}</b>{" "}
              </li>
              <img src={article.urlToImage} alt={article.title} />
              <br />
              <a href={article.url}>READ MORE</a>
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default HomePage;
