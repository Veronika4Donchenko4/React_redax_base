import { createStore } from 'redux';

const initialState = {
    likes: 0
}

const reducer = (state = initialState, action) => {
    console.log('reducer >', action);

    return state;
}

export const store = createStore(reducer);
