import React, { useContext, useState } from 'react'

import images from '../assets/index'
import { ChatAppContext } from '@/context/ChatAppContext'
import Model from './model'
const Filter = () => {
    const { account, addFriends } = useContext(ChatAppContext)

    const [addFriend, setAddFriend] = useState(false);
    return (
        <div className='filter'>
            <div className='filter_box'>
                <div className='filter_box_left'>
                    <div className='filter_box_left_search'>
                        <Image src={images.search} alt="image" width={20} height={20} />
                        <input type="text" placeholder='Search' />
                    </div>
                </div>
                <div className='filter_box_right'>
                    <button>
                        <Image src={images.clear} alt="clear" width={20} height={20} />
                        Clear Chat
                    </button>
                    <button onClick={() => setAddFriend(true)}>
                        <Image src={images.create} alt="clear" width={20} height={20} />
                        Add Friend
                    </button>
                </div>
            </div>

            {/* Model */}
            {addFriend && (
                <div className='filter_model'>
                    <Model openBox={setAddFriend} title="Welcome to" head="CHAT BUDDy" image={images.hero} functionName={addFriends} smallInfo="Kindly select your friend name and address" info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quibusdam, placeat excepturi similique blanditiis fugit sequi nobis quas voluptatem quidem, natus doloremque ipsum quam rem, harum id repudiandae quisquam illum?" />
                    <p>

                    </p>
                </div>
            )}
        </div>
    )
}

export default Filter
