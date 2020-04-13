import React, { useContext } from 'react'

//context
import { myContext } from './hooks'

//comps
import CreateReaction from './CreateReaction'
import MessageReactions from './MessageReaction'

export default function MessageBoard() {
    // console.log(myContext(), ' my context')
    // const { state } = myContext()
    const { state: { messages, reactionsMap } } = myContext()
    // const messages = state.messages
    return (
        <div>
            {
                messages.length ? (
                    messages.map(i => {
                        const { id, text, timeStamp, username } = i
                        return(
                            <div style={{ margin: '10px 0', padding: '10px 0'}} key={ id }>
                                <h4>{new Date(timeStamp).toLocaleString()}</h4>
                                <p>{ text }</p>
                                <h4> - { username }</h4>
                                <CreateReaction messageId={ id }/>
                                <MessageReactions />
                                <br />
                                <hr/>

                            </div>
                        )
                    })
                ) : 'No List'
            }
        </div>
    )
}
