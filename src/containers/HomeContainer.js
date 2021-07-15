import React from 'react';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Blog from '../Blog';

const HomeContainer = ({ messages, reply, value, handleSubmit, handleChange }) => {
    return (
        <div>
            <Contact
                messages={messages}
                reply={reply}
            />
            <Portfolio
                value={value}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
            <Blog/>
        </div>
    );
};

export default HomeContainer;