import { Masonry, Layout } from "@/components/index";
import { client } from "src/lib/cms";

const GraphicDesign = ({ data }) => {
  const graphics = data.filter((item) => item.fields.type === "graphic");

  return (
    <Layout
      name="description"
      content="Fermín Guerrero's Graphic Design Projects"
    >
      <Masonry data={graphics} type="graphic" />
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
export default GraphicDesign;
