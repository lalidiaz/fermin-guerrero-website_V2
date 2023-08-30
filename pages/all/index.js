import { Masonry, Layout } from "@/components/index";
import { client } from "src/lib/cms";

const AllProjects = ({ data }) => {
 
  return (
    <Layout
      title="All Projects"
      name="description"
      content="Fermín Guerrero's projects."
    >
      <Masonry data={data} />
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

export default AllProjects;
