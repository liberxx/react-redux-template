import { ADD_TEXT } from '../constants/Page'


const initialState =   {
  text:[
    'some text1',
    'some text row 2'
  ]
};


export default function page(state = initialState, action) {

  switch (action.type) {
    case ADD_TEXT:
      return { ...state, text: action.payload }

    default:
      return state;
  }

}
