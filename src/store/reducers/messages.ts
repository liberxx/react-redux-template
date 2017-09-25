import { MESSAGE } from '../actions/messages';

const initialState =   [
    'some text1',
    'some text row 2'
];


export default function page(state = initialState, action: any) {

    switch (action.type) {
        case MESSAGE:
            return state.concat(action.payload);

        default:
            return state;
    }

}
