import { Header, Footer } from "@/components/index";
import { AnimatePresence } from "framer-motion";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { v4 as uuidv4 } from "uuid";

const App = ({ Component, pageProps }) => {
  const handleExitComplete = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <>
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        <Header />
        <Component {...pageProps} key={uuidv4()} />
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
