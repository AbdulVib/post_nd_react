import React, { useState, useContext } from 'react'

//context
import { myContext } from './hooks'

import { newMessage } from '../state/Actions'

export default function PublishMessages() {
    const { state: { username }, dispatch, pubsub: { publish } } = myContext()

    const [ text, setText ] = useState('')

    const handleText = e => {
        setText(e.target.value)
    }

    const handleSubmit = e => {
        if(text.length <= 0){
            return
        }
        publish(newMessage({text, username}))
        setText('')
        // console.log(text, ' text ')
    }

    const handlekeyPress = e => {
        if(text.length <= 0){
            return
        }
        else if(e.key === 'Enter'){
            publish(newMessage({text, username}))
            // dispatch(newMessage(text))
            setText('')
        }
    }
    // console.log(state, ' state')
    return ( 
        <div>
            <h3>Something to say ?</h3>
            <input style={{ padding: '10px'}} autoFocus type="text" value={ text } name="text" onChange={ handleText } onKeyPress={ handlekeyPress }/> 
            <br/>
            <button style={{ padding: '10px', margin: '10px' }} onClick={ handleSubmit }>Publish It</button>
        </div>
    )
}
