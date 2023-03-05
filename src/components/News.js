import React, { useEffect, useRef, useState } from "react";
import NewsT from "./NewsT";

function News() {
    const apiKey = `29a8d99402ea45dea02692d041e36af5`;
    const queryRef = useRef("");
    const [Query, setQuery] = useState("tesla");
    const apiUrl = `https://newsapi.org/v2/everything?q=${Query}&from=2022-11-10&sortBy=publishedAt&apiKey=${apiKey}`;

    useEffect(() => {
        fetchData();
    }, [Query]);

    const [articles, setArticles] = useState([]);

    async function fetchData() {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        setArticles(jsonData.articles);
    }
    function handleClick(event) {
        event.preventDefault();
        const query = queryRef.current.value;
        setQuery(query);
    }
    function btnClick(event) {
        event.preventDefault();
        setQuery(event.target.value);
    }
    return (
        <>
            <div className="container">
                    <input placeholder="Type something..." className="search-box" type="text" ref={queryRef} />
                    <input className="search-btn" onClick={handleClick} type="submit" value="search"/>
            </div>
            <form className="btn-flex">
                <input
                    onClick={btnClick}
                    className="exFeature"
                    value="ind vs ban"
                    type="text"
                />
                <input
                    onClick={btnClick}
                    className="exFeature"
                    value="virat kohli"
                    type="text"
                />
                <input
                    onClick={btnClick}
                    className="exFeature"
                    value="ms dhoni"
                    type="text"
                />
                <input
                    onClick={btnClick}
                    className="exFeature"
                    value="csk"
                    type="text"
                />
                <input
                    onClick={btnClick}
                    className="exFeature"
                    value="fifa"
                    type="text"
                />
                <input
                    onClick={btnClick}
                    className="exFeature"
                    value="reactjs"
                    type="text"
                />
            </form>
            <div className="grid">
                {articles.map((a, i) => {
                    return (
                        <NewsT
                            key={i}
                            img={a.urlToImage}
                            title={a.title}
                            desc={a.description}
                            link={a.url}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default News;
