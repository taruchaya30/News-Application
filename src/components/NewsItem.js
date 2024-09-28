import React from 'react'

const  NewsItem = (props) => {
  
    let {title, description,imgUrl,newsUrl,author,date,source}= props;
    return (
      <div>
  
        <div className="card" >
          
  <img src={!imgUrl?"https://img.freepik.com/free-vector/breaking-news-concept_23-2148514216.jpg":imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">

    <h5 className="card-title">{title}.<span class="badge rounded-pill bg-success">{source}</span></h5>
   
    <p className="card-text">{description}...</p>
    <a  rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
    <p className="card-text"><small className="text-white">Last updated on {new Date(date).toLocaleDateString()} by {author}</small></p>
  </div>
</div>
      </div>
    )
  }


export default NewsItem
