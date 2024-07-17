import Navbar from '@/components/navbar';
import { ChatAppProvider } from '@/context/ChatAppContext';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChatAppProvider>
        <Navbar />
        <Component {...pageProps} />;
      </ChatAppProvider>
    </>
  );
}
