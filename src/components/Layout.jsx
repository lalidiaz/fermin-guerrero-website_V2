import Head from "next/head";
import styled from "styled-components";

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

const MainWrapper = styled.main`
  width: 100%;
  position: relative;
`;

const MasonryWrapper = styled.div`
  padding: 40px 20px;
`;
