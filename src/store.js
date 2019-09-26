import { createStore } from "redux";

const initialState = {
    name: "",
    address: "",
    city: "",
    state: "",
    zip: '',
    image: '',
    monthly: '',
    desired: ''
};

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const UPDATE_CITY = "UPDATE_CITY";
export const UPDATE_STATE = "UPDATE_STATE";
export const UPDATE_ZIP = "UPDATE_ZIP";

export const UPDATE_IMAGE = "UPDATE_IMAGE";

export const UPDATE_MONTHLY = "UPDATE_MONTHLY";
export const UPDATE_DESIRED = "UPDATE_DESIRED";

export const UPDATE_CLEAR = "UPDATE_CLEAR"

export const ADD_HOUSE = "ADD_HOUSE";
export const ADD_RECIPE = "ADD_RECIPE";
export const DELETE_RECIPE = "DELETE_RECIPE"

function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_NAME:
            return { ...state, name: payload };
        case UPDATE_ADDRESS:
            return { ...state, address: payload };
        case UPDATE_CITY:
            return { ...state, city: payload };
        case UPDATE_STATE:
            return { ...state, state: payload };
        case UPDATE_ZIP:
            return { ...state, zip: payload };
        case UPDATE_IMAGE:
            return { ...state, image: payload };
        case UPDATE_MONTHLY:
            return { ...state, monthly: payload };
        case UPDATE_DESIRED:
            return { ...state, desired: payload };
        case UPDATE_CLEAR:
            return {...state, 
                name: "",
                address: "",
                city: "",
                state: "",
                zip: '',
                image: '',
                monthly: '',
                desired: ''}


        // case ADD_HOUSE:
        //     const {
        //         name,
        //         address,
        //         city,
        //         state,
        //         zip,
        //         image,
        //         monthly,
        //         desired
        //     } = state;
        //     const house = {
        //         name,
        //         address,
        //         city,
        //         state,
        //         zip,
        //         image,
        //         monthly,
        //         desired
        //     };
            // return {house};
        default:
            return state;
        }
    }

export default createStore(reducer);