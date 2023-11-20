import { AppProps } from 'next/app';
import '../globals.css'; // Include your global styles if you have them

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;