import { NEW_MESSAGE, SET_USERNAME } from './Types'

const newMessage = ({text, username}) => {
    return{
        type: NEW_MESSAGE,
        item: { id: Math.random() , text, username, timeStamp: Date.now() }
    }
} 

const setUsername = username => {
    return{
        type: SET_USERNAME, username
    }
}

const createReaction = ({ type, emoji, username, messageId }) => {
    return{
        type,
        item: { id: Math.random(), timeStamp: Date.now(), emoji, username, messageId }
    }
}



export {
    newMessage,
    setUsername,
    createReaction
}