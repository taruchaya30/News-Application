import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import SpinnerLoad from "./SpinnerLoad";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News=(props)=> {

  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  
  const updateNews = async () => {
    props.setProgress(30)
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${props.apiKey}&category=${props.category}&page=1&pageSize=${props.pageSize}`;
    setloading(true)
    let response = await fetch(url);
    let newdata = await response.json();
    props.setProgress(60)
  
    setarticles(newdata.articles)
      settotalResults(newdata.totalResults)
      setloading(false)
    
    props.setProgress(100)
  }
  useEffect(() =>{
    updateNews();
  },[])
 
 
  const fetchMoreData = async() => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${props.apiKey}&category=${props.category}&page=${page+1}pageSize=${props.pageSize}`;
      setpage(page+1)
      let response = await fetch(url);
      let newdata = await response.json();
      setarticles(articles.concat(newdata.articles))
      settotalResults(newdata.totalResults)
    
    };
  

  
    return (
      <>
        <h1 id="heading"> Headlines Hub : All the top headlines</h1>
        {loading && <SpinnerLoad />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<SpinnerLoad/>}
        >
        <div className="container my-3">
          <div className="row">
            {!loading &&
              articles.map((elem) => {
                return (
                  <div className="col-md-4 " key={elem.url}>
                    <NewsItem
                      title={elem.title}
                      description={
                        elem.description ? elem.description.slice(0, 70) : ""
                      }
                      imgUrl={elem.urlToImage}
                      newsUrl={elem.url}
                      author={elem.author}
                      date={elem.publishedAt}
                      source={elem.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        </InfiniteScroll>
        
      </>
    );
  }

News.defaultProps = {
  category: "general",
  pageSize: "10",
};
News.propTypes = {
  category: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
