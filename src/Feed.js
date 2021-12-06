import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel.js'
import MessageSender from "./MessageSender"
import Post from "./Post";

function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            
            <Post
                profilePic={"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                message="Wow this works!"
                timestamp="This is a timestamp"
                username='ssssagha'
                image='https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            />
            <Post 
                profilePic={"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                message="Wow this works!"
                timestamp="This is a timestamp"
                username='ssssagha'
            />
            <Post />
        </div>
    )
}

export default Feed