import React, {Component} from 'react';
import axios from 'axios';

class News extends Component {

    state={
        newsFeed: []
    }

    componentDidMount = () => {
        let langData = new FormData();
        langData.set('language', 'en')
        let authStr = 'de190c1c8f31a915f6d050faf2cd7176';
        let newsArr = [];
        axios.post('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get',
            langData,
            {headers: {Authorization: authStr}})
                .then(res => {
                    res.data.items.map(newsItem => {
                        newsArr.push(newsItem);
                    })
                    this.setState({newsFeed: newsArr})
                })
    }

    render(){
        let newsFeed = [];
        newsFeed = this.state.newsFeed;
        newsFeed.map(newsItem => {
            return(
                <div className="newsItems">
                    <p>{newsItem.item.image}</p>
                    <h4>{newsItem.name}</h4>
                </div>
            )
        })

        return(
            <div className="left">
                <h3>NEWS SECTION</h3>
                {/* {newsFeed} */}
            </div>
        )
    }
}

export default News;