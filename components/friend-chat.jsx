import React, { useEffect } from 'react'
import images from '../assets/index'
import { useRouter } from 'next/router'
import { converTime } from '@/utils/api-feature'
import Loader from './loader'

const FriendChat = ({ functionName, readMessage, friendMsg, account, userName, loading, currentUserName, currentUserAddress }) => {

    const [message, setMessage] = useState('')
    const [chatData, setChatData] = useState({
        name: "",
        address: ""
    })

    const router = useRouter()

    useEffect(() => {
        if (!router.isReady) return
        setChatData(router.query)
    }, [router.isReady]);

    console.log(chatData.address, chatData.name)

    return (
        <div className='chat'>
            {
                currentUserName && currentUserAddress ? (
                    <div className='chat_user_info'>
                        <Image src={images.accountName} alt="image" width={70} height={70} />
                        <div className='chat_user_info_box'>
                            <h4>{currentUserName}</h4>
                            <p className='show'>
                                {currentUserAddress}
                            </p>
                        </div>
                    </div>
                ) : (
                    ""
                )
            }

            <div className='chat_box_box'>
                <div className='chat_box'>
                    <div className='chat_box_left'>
                        {
                            friendMsg.map((el, i) => (
                                <div>
                                    {el.sender == chatData.address ? (
                                        <div className='chat_box_left_title'>
                                            <Image src={images.accountName} alt="image" width={50} height={50} />
                                            <span>
                                                {chatData.name} {""}
                                                <small>Time:  {converTime(el.timesstamp)}</small>
                                            </span>
                                        </div>
                                    ) : (
                                        <div className='chat_box_left_title'>
                                            <Image src={images.accountName} alt="image" width={50} height={50} />
                                            <span>
                                                {userName} {""}
                                                <small>Time: {converTime(el.timesstamp)}</small>
                                            </span>
                                        </div>
                                    )}
                                    <p key={i + 1}>
                                        {el.msg}{""}{""}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {currentUserName && currentUserAddress ? (
                    <div className='chat_box_sender_box'>
                        <div className='chat_box_send_img'>
                            <Image
                                src={images.smile} alt="smile" width={50} height={500}
                            />
                            <input type="text" placeholder='Type your message' onChange={(e) => setMessage(e.target.value)} />
                            <Image src={images.file} alt="file" width={50} height={50} />
                            {
                                loading == true ? (
                                    <Loader />
                                ) : (
                                    <Image src={images.send} alt="file" width={50} height={50} onClick={() => functionName({ msg: message, address: chatData.address })} />
                                )
                            }
                        </div>
                    </div>
                ) : ("")}
            </div>
        </div>
    )
}

export default FriendChat
