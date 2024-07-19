import React, { useState, useEffect, useContext } from 'react'
import UserCard from '@/components/user-card'

const alluser = () => {

    const { userLists, addFriends } = useContext(ChatAppContext)
    return (
        <div>
            <div className='alluser_info'>
                <h1>Find Your Friends</h1>
            </div>

            <div className='alluser'>
                {userLists.map((el, i) => (
                    <UserCard key={i + 1} el={el} i={i} addFriends={addFriends} />
                ))}
            </div>
        </div>
    )
}

export default alluser
