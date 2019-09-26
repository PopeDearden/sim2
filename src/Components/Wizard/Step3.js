import React, { Component } from 'react';
import axios from 'axios';
import store, { UPDATE_MONTHLY, UPDATE_DESIRED, UPDATE_CLEAR } from '../../store';
import './Wiz.css';

class Step3 extends Component {
    constructor(props) {
        super(props);
        const reduxState = store.getState()
        this.state = {
            monthly: reduxState.monthly,
            recommended: reduxState.monthly*1.25,
            desired: reduxState.desired
        }
        this.handleChangeMonthly = this.handleChangeMonthly.bind(this);
        this.complete = this.complete.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
        this.clear = this.clear.bind(this);
    }

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                monthly: reduxState.monthly,
                desired: reduxState.desired,
            })
        })
    }

    handleChangeMonthly(value) {
        this.setState({
            monthly: value,
            recommended: value * 1.25,
        })
    }
    handleChangeDesired(value) {
        this.setState({
            desired: value,
        })
    }

    saveChanges() {
        store.dispatch({
            type: UPDATE_MONTHLY,
            payload: this.state.monthly
        })
        store.dispatch({
            type: UPDATE_DESIRED,
            payload: this.state.desired
        })
    }

    clear (){
        store.dispatch({
            type: UPDATE_CLEAR
        })
    }

    complete() {
        this.saveChanges()
        const reduxState =store.getState()
        axios.post('/api/homes', reduxState)
        .then(res => {
            this.clear()
            this.props.history.push('/')
        })
    }
    render() {
        return (
            <div>
                <div className='wiz_input_container'>
                    <div style={{ textAlign: 'center', fontWeight: '700', margin: '20px' }}>Recommended Rent: ${this.state.recommended}</div>
                    <div className='wiz_input_box'>
                        <p>Monthly Mortgage Amount</p>
                        <input type='number' style={{ width: "35vw" }} value={this.state.monthly} onChange={e => this.handleChangeMonthly(e.target.value)} />
                    </div>
                    <div className='wiz_input_box'>
                        <p>Desired Monthly Rent</p>
                        <input type='number' style={{ width: "35vw" }} value={this.state.desired} onChange={e => this.handleChangeDesired(e.target.value)} />
                    </div>
                </div>
                <button className='wiz_button wiz_prev_button' onClick={_ => {
                    this.saveChanges()
                    this.props.history.push('/wizard/step2');
                }}>Previous Step</button>
                <button className='wiz_button wiz_complete_button' onClick={this.complete}>Complete</button>
            </div>
        );
    }
}


export default Step3;