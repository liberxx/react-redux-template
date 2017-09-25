export const ADD_TEXT = 'ADD_TEXT';

export function addText(text: string) {

    return {
        type: ADD_TEXT,
        payload: text
    }

}

export const pagesActions = {
    addText
}
