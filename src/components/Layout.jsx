import Head from "next/head";
import styled from "styled-components";

const Layout = ({ children, title, description, content }) => {
  const metaTitle = `${title} | Fermín Guerrero`;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={description} />
        {content && <meta name="keywords" content={content} />}
      </Head>
      <MainWrapper>
        <ContentWrapper>{children}</ContentWrapper>
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.main`
  width: 100%;
  position: relative;
`;

const ContentWrapper = styled.div`
  padding: 2.5rem 1.25rem;
  max-width: 1440px;
  margin: 0 auto;
`;

export default Layout;
