import React, { useReducer, useEffect } from 'react'

// /action-reducer-types
import { NEW_MESSAGE } from '../state/Types'
import reducer, { initialState } from '../state/reducers'

//context
import Context from '../state/Context'

import PubSub from '../pubsub'
//screens
import PublishMessages from './PublishMessages'
import MessageBoard from './MessageBoard'
import UserName from './UserName'

import styles from './App.css'


//pb
const pubsub = new PubSub()

export default function App() {

  const [ state, dispatch ] = useReducer(reducer, initialState)
  
  useEffect(() => {
    pubsub.addListener({
      message: messageObject => {
        const { channel, message } = messageObject
    
        console.log('message', message, ' channel', channel)
        
        dispatch(message)
      }
    })
  }, [])

  // console.log(state, ' reducer')
  return (
    <Context.Provider value={{ state, dispatch, pubsub }}>
      <UserName />
      <PublishMessages dispatch={ dispatch }/>
      <MessageBoard messageList={ state }/>
    </Context.Provider>
  )
}
