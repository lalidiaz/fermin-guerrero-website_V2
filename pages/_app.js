import "../styles/globals.scss";
import { Header, MobileMenu } from "@/components/index";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  function handleExitComplete() {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0 });
    }
  }

  return (
    <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
      <div className="desktop">
        <Header />
      </div>
      <div className="mobile">
        <MobileMenu />
      </div>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
