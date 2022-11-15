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
    <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AnimatePresence>
  );
};

export default App;
