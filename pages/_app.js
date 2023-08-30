import { Header, Footer } from "@/components/index";
import { AnimatePresence } from "framer-motion";
import { GlobalStyles } from "@/styles/GlobalStyles";

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
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
