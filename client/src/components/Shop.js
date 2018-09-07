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
                    console.log(res);
                    res.data.items.map(shopItem => {
                        shopArr.push(shopItem);
                    })
                    this.setState({shopItems: shopArr})
                    console.log(this.state.shopItems)
                })
    }
    
    render(){

        let shopItems = [];
        shopItems = this.state.shopItems;
        console.log(shopItems)
        shopItems.map(shopItem => {
            return(
                <div className="newsItems">
                    <p>{shopItem.item.image}</p>
                    <h4>{shopItem.name}</h4>
                </div>
            )
        })

        return(
            <div>
                <h3>SHOP SECTION</h3>
                {/* {shopItems} */}
            </div>
        )
    }
}

export default Shop;