import { useRouter } from "next/router";
import { client } from "src/lib/cms";
import { Masonry, Layout } from "@/components/index";
import styled from "styled-components";

const CategoryPage = ({ data }) => {
  const router = useRouter();

  const { category } = router.query;

  const filteredElements =
    data &&
    data.filter(
      (element) => element.fields.tags && element.fields.tags.includes(category)
    );

  return (
    <Layout
      name="description"
      content={`Fermín Guerrero's ${category} Projects`}
    >
      <Container>
        <CategoryTitle>{category}</CategoryTitle>
      </Container>
      <Wrapper>
        <Masonry data={filteredElements} />
      </Wrapper>
    </Layout>
  );
};

export async function getStaticProps() {
  const response = await client.getEntries({ content_type: "project" });

  return {
    props: {
      data: response.items,
    },
  };
}

export default CategoryPage;

const Wrapper = styled.div`
  padding-top: 5rem;
`;
const Container = styled.div`
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  padding: 0.5rem;
  margin: 0rem 0rem 0.5rem 0rem;
  text-align: center;
  background-color: black;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 300;
`;
const CategoryTitle = styled.h3`
  font-size: 1rem;
  color: white;
`;
