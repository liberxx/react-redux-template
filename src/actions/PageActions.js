import { ADD_TEXT } from '../constants/Page'

export function addText(text) {

  return {
    type: ADD_TEXT,
    payload: text
  }

}
