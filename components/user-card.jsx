import React, { useState, useEffect } from 'react'
import images from '../assets/index'

const UserCard = ({ el, i, addFriends }) => {
    console.log(el)
    return (
        <div className='usercard'>
            <div className='usercard_box'>
                {/* TODO: remove '' and add ternary strings */}
                <Image src={images['image${i+1}']} alt="image" width={100} height={100} />

                <div className='usercard_box_info'>
                    <h3>{el.name}</h3>
                    <p>{el.accountAddress.slice(0, 25)}...</p>
                    <button onClick={() => addFriends({ name: el.name, accountAddress: el.accountAddress })}>
                        Add Friend
                    </button>
                </div>
            </div>

            <small className='number'>
                {i + 1}
            </small>
        </div>
    )
}

export default UserCard
