import React from 'react'

export default function MessageReaction({ messageReaction }) {
    return (
        <div>
            {
                messageReaction ? (
                    messageReaction.map(i => {
                        const { id, emoji, username } = i
                        return(
                            <span key={ id }>
                                <i>{ username }</i>
                                <strong>{ emoji }</strong>
                            </span>
                        )
                    })
                ) : null
            }
        </div>
    )
}
