import React from 'react'

import images from '../assets/index'

const FriendCard = ({ readMessage, el, i, readUser }) => {

    console.log(el)
    return (
        <>
            <Link href={{ pathname: "/", query: { name: `${el.name}`, address: `${el.pubkey}` } }}>
                <div className='card' onClick={() => (readMessage(el.pubkey), readUser(el.pubkey))}>
                    <div className='card_box'>
                        <div className='card_box_left'>
                            <Image src={images.accountName} alt="username" width={50} height={50} className={card_box_left_img} />
                        </div>
                        <div className='card_box_right'>
                            <div className='card_box_right_middle'>
                                <h4>{el.name}</h4>
                                <small>{el.pubkey.slice(21)}..</small>
                            </div>
                            <div className='card_box_right_end'>
                                <small>{i + 1}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default FriendCard
