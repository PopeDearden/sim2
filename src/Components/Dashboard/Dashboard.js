import React, { Component } from 'react'
import axios from 'axios'
import { HashRouter, Link } from "react-router-dom";

import House from './House'

import './Dash.css'

class Dash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: []
        }
        // this.getHouses = this.getHouses.bind(this)
        this.testState = this.testState.bind(this)
    }
    componentDidMount() {
        axios.get('/api/homes')
            .then(res => {
                this.setState({
                    houses: res.data
                })
            })
    }

    testState() {
        console.log(this.state)
    }

    render() {
        return (
            <div className='Dash'>
                <h1>Dash</h1>
                <Link to="/wizard">
                    <button>Add New Property</button>
                </Link>
                <div className='houseDisplay'>
                    <h3>Home Listings</h3>
                    {this.state.houses.map((el, index) => (
                    <div className='single1'
                        key={index + 'div'}>
                        <House
                            key={index}
                            house={el}
                            />
                    </div>
                ))}
                </div>
                <button onClick={() => this.testState()}>test dash state</button>
            </div>
        )
    }
}
export default Dash