import React from 'react'

const FadeTransition = ({ fadeTransition, children }) => {
    return (
        <div className={`animate__animated ${fadeTransition}`}>
            {children}
        </div>
    )
}

export default FadeTransition