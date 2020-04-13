import React, { useContext } from 'react'

//context
import Context from '../state/Context'

const myContext = () => {
    return useContext(Context)
}

export { 
    myContext
}