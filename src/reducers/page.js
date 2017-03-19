import { ADD_TEXT } from '../constants/Page'


const initialState =   {
  text:[
    'some text1',
    'some text row 2'
  ]
};


export default function page(state = initialState, action) {

  console.log(state);

  switch (action.type) {
    case ADD_TEXT:
      console.log('returning ADD_TEXT state', { ...state, text: action.payload });
      return { ...state, text: action.payload }

    default:
      console.log('returning default state');
      return state;
  }

}
