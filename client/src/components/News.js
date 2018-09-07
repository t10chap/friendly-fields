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
        let newsFeed = this.state.newsFeed;
        console.log(newsFeed)   
        let news = newsFeed.map(newsItem => {
            return(
                <div className="newsItems">
                    <img src={newsItem.item.image} />
                    <h4>Name: {newsItem.name}</h4>
                    <p className="newsRarity">Rarity: {newsItem.item.rarity}</p>
                </div>
            )
        })

        return(
            <div className="left">
                <h3 className="newsHead">Upcoming/ Possible Leaks</h3>
                {news}
            </div>
        )
    }
}

export default News;