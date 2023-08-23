import Head from "next/head";
import { MainWrapper, MasonryWrapper } from "@/styles/Layout";

const Layout = ({ children, title, content, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name={description} content={content} />
      </Head>
      <MainWrapper>
        <MasonryWrapper>{children}</MasonryWrapper>
      </MainWrapper>
    </>
  );
};

export default Layout;
