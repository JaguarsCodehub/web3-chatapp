import React, { useState, useEffect, useContext } from 'react'

import images from '../assets/index'
import { ChatAppContext } from '@/context/ChatAppContext';
import FriendCard from './friend-card';
import FriendChat from './friend-chat';

const Friend = () => {
    const array = [1, 2, 3, 4, 5, 6];
    const { sendMessage, account, friendMsg, friendLists, readMessage, userName, loading } = useContext(ChatAppContext)
    console.log(friendLists)

    return (
        <div className='friend'>
            <div className='friend_box'>
                <div className='friend_box_left'>
                    {friendLists.map((el, i) => (
                        <FriendCard
                            key={i + 1}
                            el={el}
                            readMessage={readMessage}
                            readUser={readUser}
                        />
                    ))}
                </div>
                <div className='friend_box_right'>
                    <FriendChat
                        functionName={sendMessage}
                        readMessage={readMessage}
                        friendMsg={friendMsg}
                        account={account}
                        userName={userName}
                        loading={loading}
                        currentUserName={currentUserName}
                        currentUserAddress={currentUserAddress}
                    />
                </div>
            </div>
        </div>
    )
}

export default Friend
