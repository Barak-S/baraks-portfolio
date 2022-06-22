import React from 'react'
import IntroContact from '../IntroContact'
import Bio from '../Bio'
import Blog from '../Blog'

const HomeContainer = ({ messages, reply, value, handleSubmit, handleChange }) => {
    return (
        <div>
            <IntroContact
                messages={messages}
                reply={reply}
            />
            <Bio
                value={value}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
            <Blog/>
        </div>
    )
}

export default HomeContainer