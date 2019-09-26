import React, { Component } from 'react';
import store, { UPDATE_NAME, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_STATE, UPDATE_ZIP } from '../../store';
import './Wiz.css';

class Step1 extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState()
    this.state = {
        name: reduxState.name,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zip: reduxState.zip
    }
    this.handleChange = this.handleChange.bind(this);
    this.saveChanges = this.saveChanges.bind(this)
  }

  componentDidMount() {
    store.subscribe(()=> {
        const reduxState = store.getState()
        this.setState({
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip
        })
        console.log(reduxState)
    })
    console.log(this.state)
  }

  handleChange(prop, value) {
    this.setState({ [prop]: value })
}
saveChanges() {
    store.dispatch({
      type: UPDATE_NAME,
      payload: this.state.name
    })
    store.dispatch({
      type: UPDATE_ADDRESS,
      payload: this.state.address
    })
    store.dispatch({
      type: UPDATE_CITY,
      payload: this.state.city
    })
    store.dispatch({
      type: UPDATE_STATE,
      payload: this.state.state
    })
    store.dispatch({
      type: UPDATE_ZIP,
      payload: this.state.zip
    })
}

  render() {
    return (
      <div>
        <div className='wiz_input_container'>
          <div className='wiz_input_box'>
            <p>Property Name</p>
            <input value={this.state.name} onChange={e => this.handleChange('name', e.target.value)} />
          </div>
          <div className='wiz_input_box'>
            <p>Address</p>
            <input style={{ width: "35vw" }} value={this.state.address} onChange={e => this.handleChange('address', e.target.value)} />
          </div>
          <div className='wiz_input_box'>
            <p>City</p>
            <input value={this.state.city} onChange={e => this.handleChange('city', e.target.value)} />
          </div>
          <div className='wiz_input_box'>
            <p>State</p>
            <input style={{ width: "70px" }} value={this.state.state} onChange={e => this.handleChange('state', e.target.value)} />
          </div>
          <div className='wiz_input_box'>
            <p>Zip</p>
            <input style={{ width: "100px" }} type='number' value={this.state.zip} onChange={e => this.handleChange('zip', e.target.value)} />
          </div>
        </div>
        <button className='wiz_button wiz_step_button' onClick={_ => {
            this.saveChanges()
        //   this.props.updateLocation(this.state);
          this.props.history.push('/wizard/step2');
        }}>Next Step</button>
      </div>
    );
  }
}


export default Step1;