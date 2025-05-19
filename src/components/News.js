import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitaliseFirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);
   
    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        const data = await fetch(url);
        const parsedData = await data.json();
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    };

    useEffect(() => {
        updateNews();
       document.title = `${capitaliseFirst(props.category)} - newsBanana`;

    }, []);

    const fetchMoreData = async () => {
        const nextPage = page + 1;
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${nextPage}&pageSize=${props.pageSize}`;
        const data = await fetch(url);
        const parsedData = await data.json();
        setArticles((prevArticles) => prevArticles.concat(parsedData.articles));
        setPage(nextPage);
        setTotalResults(parsedData.totalResults);
    };

    return (
        <>
            <h1 className="text-center">newsBanana - Top Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem
                                    title={element.title || ' '}
                                    description={element.description || ' '}
                                    imageUrl={element.urlToImage}
                                    newsurl={element.url}
                                    author={element.author}
                                    date={element.publishedAt}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    );
};

News.defaultProps = {
    country: 'us',
    pageSize: 6,
    category: 'general',
    apikey: '',
};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apikey: PropTypes.string,
};

export default News;
