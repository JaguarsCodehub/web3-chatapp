import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { CheckIfWalletConnnected, connectWallet } from '../utils/api-feature';

export const ChatAppContext = React.createContext();

export const ChatAppProvider = ({ children }) => {
  const title = 'Hey Welcome to blockchain Chat App';

  return (
    <ChatAppContext.Provider value={{ title }}>
      {children}
    </ChatAppContext.Provider>
  );
};
