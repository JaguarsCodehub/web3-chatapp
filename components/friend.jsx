import React, { useState, useEffect, useContext } from 'react'

import images from '../assets/index'
import { ChatAppContext } from '@/context/ChatAppContext';

const Friend = () => {
    const array = [1, 2, 3, 4, 5, 6];
    const { sendMessage, account, friendLists, readMessage, userName, loading } = useContext(ChatAppContext)
    return (
        <div>

        </div>
    )
}

export default Friend
