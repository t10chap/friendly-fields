import React, {Component} from 'react';
import axios from 'axios';

class Shop extends Component {

    state = {
        shopItems: []
    }

    componentDidMount = () => {
        let langData = new FormData();
        langData.set('language', 'en')
        let authStr = 'de190c1c8f31a915f6d050faf2cd7176';
        let shopArr = [];
        axios.post('https://fortnite-public-api.theapinetwork.com/prod09/store/get',
            langData,
            {headers: {Authorization: authStr}})
                .then(res => {
                    res.data.items.map(shopItem => {
                        shopArr.push(shopItem);
                    })
                    this.setState({shopItems: shopArr})
                })
    }
    
    render(){
        let shopItems = this.state.shopItems;
        let items = shopItems.map(shopItem => {
            return(
                <div className="newsItems">
                    <img src={shopItem.item.image} />
                    <h4>Name: {shopItem.name}</h4>
                    <p className="shopCost">Cost: {shopItem.cost} V-Bucks</p>
                </div>
            )
        })

        return(
            <div className="shop">
                <h3 className="shopHead">Current Shop Items:</h3>
                {items}
            </div>
        )
    }
}

export default Shop;