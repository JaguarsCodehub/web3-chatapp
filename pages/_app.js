import { ChatAppProvider } from '@/context/ChatAppContext';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChatAppProvider>
        <Component {...pageProps} />;
      </ChatAppProvider>
    </>
  );
}
