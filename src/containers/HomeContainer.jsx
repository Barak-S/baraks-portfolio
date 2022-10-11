import React from 'react'
import IntroContact from '../IntroContact'
import Bio from '../Bio'

const HomeContainer = ({ messages, reply, value, handleSubmit, handleChange }) => {
    return (
			<div>
				<IntroContact
					messages={messages}
					reply={reply}
					value={value}
					handleSubmit={handleSubmit}
					handleChange={handleChange}
				/>
				<Bio/>
			</div>
    )
}

export default HomeContainer