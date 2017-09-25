export const MESSAGE = 'MESSAGE';

export function messageUpdate(text: string) {

    return {
        type: MESSAGE,
        payload: text
    }

}

export const messages = {
    messageUpdate
}
