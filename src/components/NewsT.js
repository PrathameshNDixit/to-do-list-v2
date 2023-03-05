import React from "react";
import "./News.css"
function NewsT(props) {
    return (
        <div className="news-card">
            <img className="news-img" src={props.img} alt="image" />
            <h2 className="news-head">{props.title}</h2>
            <p className="news-desc">{props.desc}</p>
            <button className="btn"><a href={props.link}>Read more</a></button>
        </div>
    );
}

export default NewsT;
