import '../styles/globals.scss';
import { Header } from '@/components/index';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  function handleExitComplete() {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0 });
    }
  }

  return (
    <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
      <Header />
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
