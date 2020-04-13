import React from 'react'

import { myContext } from './hooks'

import { setUsername } from '../state/Actions'

export default function UserName() {
    const { state: { username }, dispatch } = myContext()

    const updateUserName = e => {
        dispatch(setUsername(e.target.value))
    }

    return (
        <div>
            <h3>Username</h3>
            <input onChange={ updateUserName } value={ username } />
        </div>
    )
}
