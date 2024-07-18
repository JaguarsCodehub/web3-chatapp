import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import {
  CheckIfWalletConnnected,
  connectingWithContract,
  connectWallet,
} from '../utils/api-feature';

export const ChatAppContext = React.createContext();

export const ChatAppProvider = ({ children }) => {
  const title = 'Hey Welcome to blockchain Chat App';

  const [account, setAccount] = useState('');
  const [userName, setUserName] = useState('');
  const [friendLists, setFriendLists] = useState([]);
  const [friendMsg, setFriendMsg] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userLists, setUserLists] = useState([]);
  const [error, setError] = useState('');

  // Chat User Data
  const [currentUserName, setCurrentUserName] = useState('');
  const [currentUserAddress, setCurrentUserAddress] = useState('');

  const router = useRouter();

  // Fetch Data time of PageLoad
  const fetchData = async () => {
    try {
      // Get Contract
      const contract = await connectingWithContract();
      // Get Account
      const connectAccount = await connectWallet();
      setAccount(connectAccount);

      // Get Username
      const username = await contract.getUsername(connectAccount);
      setUserName(username);

      // Get my friend list
      const friendLists = await contract.getMyFriendList();
      setFriendLists(friendLists);

      // Get all App user List
      const userList = await contract.getAllAppUser();
      setUserLists(userList);
    } catch (error) {
      setError('Please install and connect your wallet');
    }
  };

  useEffect(() => {
    fetchData();
    console.log(account);
  }, [account]);

  // Read Message
  const readMessage = async (friendAddress) => {
    try {
      const contract = await connectingWithContract();
      const read = await contract.readMessage(friendAddress);

      setFriendMsg(read);
    } catch (error) {
      setError('Not able to Read Message');
    }
  };

  // Create Account
  const createAccount = async ({ name, accountAddress }) => {
    try {
      if (name || accountAddress)
        return setError('Name And AccountAddress, cannot be empty');

      const contract = await connectingWithContract();
      const getCreatedUser = await contract.createAccount(name);
      setLoading(true);
      await getCreatedUser.wait();
      setLoading(false);
      window.location.reload();
    } catch (error) {
      setError('Failed to create Account');
    }
  };

  // Add your Friends
  const addFriends = async ({ name, accountAddress }) => {
    try {
      if (name || accountAddress)
        return setError('Please provide name and accountAddress');

      const contract = await connectingWithContract();
      const addMyFriend = await contract.addFriend(accountAddress, name);
      setLoading(true);
      await addMyFriend.wait();
      setLoading(false);
      router.push('/');
      window.location.reload();
    } catch (error) {
      setError('Something went wrong while adding Friends');
    }
  };

  // Send Message to your friend
  const sendMessage = async ({ msg, address }) => {
    try {
      if (msg || address) return setError('Please type your message');

      const contract = await connectingWithContract();
      const addMessage = await contract.sendMessage(address, msg);
      setLoading(true);
      await addMessage.wait();
      setLoading(false);
      window.location.reload();
    } catch (error) {
      setError('Please reload and try again');
    }
  };

  // Read Info
  const readUser = async (userAddress) => {
    try {
      const contract = await connectingWithContract();
      const userName = await contract.getUsername(userAddress);
      setCurrentUserName(userName);
      setCurrentUserAddress(userAddress);
    } catch (error) {
      setError('Not able to read Info');
    }
  };

  return (
    <ChatAppContext.Provider
      value={{
        readMessage,
        createAccount,
        addFriends,
        sendMessage,
        readUser,
        account,
        userName,
        friendLists,
        friendMsg,
        loading,
        userLists,
        error,
        currentUserName,
        currentUserAddress,
        connectWallet
      }}
    >
      {children}
    </ChatAppContext.Provider>
  );
};
