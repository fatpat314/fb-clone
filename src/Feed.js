import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel.js'
import MessageSender from "./MessageSender"

function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

        </div>
    )
}

export default Feed