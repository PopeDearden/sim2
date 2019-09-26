import React, { Component } from 'react';
import store, { UPDATE_IMAGE } from '../../store';
import './Wiz.css';

class Step2 extends Component {
    constructor(props) {
        super(props);
        const reduxState = store.getState()
        this.state = {
            image: reduxState.image
        }
        this.handleChange = this.handleChange.bind(this);
        this.saveChanges = this.saveChanges.bind(this)
    }

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                image: reduxState.image
            })
        })

    }

    handleChange(value) {
        this.setState({ image: value })
    }
    saveChanges() {
        store.dispatch({
            type: UPDATE_IMAGE,
            payload: this.state.image
        })
    }

    render() {

        return (
            <div>
                <div className='wiz_input_container'>
                    <div className='wiz_input_box'>
                        <p>Image URL</p>
                        <input style={{ width: "35vw" }} value={this.state.image} onChange={e => this.handleChange(e.target.value)} />
                    </div>
                </div>
                <button className='wiz_button wiz_prev_button' onClick={_ => {
                    this.saveChanges()
                    this.props.history.push('/wizard/step1');
                }}>Previous Step</button>
                <button className='wiz_button wiz_step_button' onClick={_ => {
                    this.saveChanges()
                    this.props.history.push('/wizard/step3');
                }}>Next Step</button>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        image: state.image
    }
}

export default Step2;
