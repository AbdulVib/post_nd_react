import React from 'react'

import { REACTION_OBJECTS } from '../state/Types'
import { createReaction } from '../state/Actions'

import { myContext } from './hooks'

import styles from './App.css'

export default function CreateReaction({ messageId }) {

    const { state: { username }, pubsub: { publish }} =  myContext()

    const publicReaction = ({ type, emoji }) => _ => {
        publish(createReaction({ type, emoji, username, messageId }))
    }
    return (
        <div className={styles.CreateReaction}>
            {
                REACTION_OBJECTS.map(i => {
                    const { type, emoji } = i
                    return(
                        <span key={ type } onClick={ publicReaction({ type, emoji }) }>{ emoji } { ' ' }</span>
                    )
                })
            }
        </div>
    )
}
