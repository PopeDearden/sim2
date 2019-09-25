import React, { Component } from 'react'
import axios from 'axios'
import { HashRouter, Link } from "react-router-dom";

import './Wiz.css'

class Wiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
        this.testState=this.testState.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }
        handleChange(prop, value) {
            this.setState({ [prop]: value })
        }
        complete() {
            axios.post('/api/homes', this.state)
              .then(res => {
                this.props.history.push('/')
              })
          }

        testState(){
            console.log(this.state)
        }
        render() {
            return (
                <div className='Wiz'>
                    <div className='wSub'>
                        <h2 className='wHeading'>Add New Listing</h2>
                        <Link to="/">
                            <button>Cancel</button>
                        </Link>
                    </div>
                    <div className='wInput'>
                        <div className='wInputBox'>
                            <p>Property Name</p>
                            <input value={this.state.name} onChange={e => this.handleChange('name', e.target.value)} />
                        </div>
                        <div className='wInputBox'>
                            <p>Address</p>
                            <input value={this.state.address} onChange={e => this.handleChange('address', e.target.value)} />
                        </div>
                        <div className='wInputBox'>
                            <p>City</p>
                            <input value={this.state.city} onChange={e => this.handleChange('city', e.target.value)} />
                        </div>
                        <div className='wInputBox'>
                            <p>State</p>
                            <input value={this.state.state} onChange={e => this.handleChange('state', e.target.value)} />
                        </div>
                        <div className='wInputBox'>
                            <p>Zip</p>
                            <input value={this.state.zip} onChange={e => this.handleChange('zip', e.target.value)} />
                        </div>

                    </div>
                    <button onClick={()=>this.complete()}>complete</button>
                    
                    <button onClick={()=>this.testState()}>test state</button>
                </div>
            )
        }
    }
    export default Wiz