import React, {Component} from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

class Graph extends Component {
    state = {
        ninja: {
            winRatio: 0,
            kdRatio: 0
        },
        user: {
            winRatio: 0,
            kdRatio: 0
        }
    }
    

    componentDidMount() {

        let authStr = 'de190c1c8f31a915f6d050faf2cd7176';
        
        var ninjaData = new FormData();
        ninjaData.set('user_id', '4735ce9132924caf8a5b17789b40f79c');
        ninjaData.set('platform', 'pc');
        ninjaData.set('window', 'alltime');

        var userData = new FormData();
        userData.set('user_id', localStorage.getItem('epicId'));
        userData.set('platform', localStorage.getItem('platform'));
        userData.set('window', 'alltime')
    
        axios.post('https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats',
          ninjaData,
          { 
            headers: { Authorization: authStr } 
          }
        )
        .then(ninjaRes => {
            
            axios.post('https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats',
            userData,
            { 
                headers: { Authorization: authStr } 
            }
            )
            .then(res => {
                console.log("USER STATS: ", res)
                this.setState({
                    user: {
                        winRatio: res.data.totals.winrate,
                        kdRatio: res.data.totals.kd,
                    },
                    ninja: {
                        winRatio: ninjaRes.data.totals.winrate,
                        kdRatio: ninjaRes.data.totals.kd,
                    }
                })
            })
        })
      }

    render(){

        let ninjaPlot = {
            x: ['Win Rate Percent', 'Kill/ Death Ratio'],
            y: [this.state.ninja.winRatio, this.state.ninja.kdRatio],
            name: 'Ninja',
            type: 'bar',
        }

        let userPlot = {
            x: ['Win Rate Percent', 'Kill/ Death Ratio'],
            y: [this.state.user.winRatio, this.state.user.kdRatio],
            name: 'You',
            type: 'bar',
        }

        

        return(
            <div className="graph">
                <Plot
                    data={[
                        ninjaPlot, userPlot
                    ]}
                    layout={ {barmode: 'group', width: 320, height: 240, title: 'Fortnite Stats'} }
                />

                {/* <form className="radioBtn">
                    <input type="radio" name="choice" value="Ninja" />
                    <label>Ninja</label>
                    <input type="radio" name="choice" value="Friend" />
                    <label>Friend</label>
                    <input type="radio" name="choice" value="Top10" />
                    <label>Top 10</label>
                </form> */}

            </div>
        )
    }
}

export default Graph;