import { NEW_MESSAGE, SET_USERNAME, REACTION_OBJECTS } from './Types'

export const initialState = {
    messages: [],
    username: 'SHINCHAN',
    reactionMaps: {}
}

const REACTION_TYPES = REACTION_OBJECTS.map(i => i.type )

const reducer = (state, action) => {

    if(REACTION_TYPES.includes(action.type)){
        let reactionMaps;

        const { messageId } = action.item

        const messageReactions = state.reactionMaps[messageId]

        if(messageReactions){
            reactionMaps = {
                ...state.reactionMaps,
                [messageId]: [...messageReactions, action.item ]
            }
        }
        else{
            reactionMaps = {
                ...state.reactionMaps,
                [messageId]: [ action.item ]
            }
        }

        return{
            ...state,
            reactionMaps
        }
    }

    switch (action.type) {
        case NEW_MESSAGE:
            return {
                ...state,
                messages: [ ...state.messages, action.item ]
            }
        case SET_USERNAME:
            return {
                ...state,
                username: action.username
            }
        case REACTION_OBJECTS:
            return {
                ...state,
                username: action.username
            }
        default:
            return state
    }
}

export default reducer