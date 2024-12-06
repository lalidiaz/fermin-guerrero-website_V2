import { Masonry, Layout } from "@/components/index";
import { client } from "src/lib/cms";

const GraphicDesign = ({ data }) => {
  const graphics = data.filter((item) => item.fields.type === "graphic");

  return (
    <Layout
      title="Graphic Design"
      name="description"
      content="Fermín Guerrero's Graphic Design Projects"
    >
      <Masonry data={graphics} type="graphic" />
    </Layout>
  );
};

export async function getStaticProps() {
  try {
    const response = await client.getEntries({ content_type: "project" });

    return {
      props: {
        data: response.items || [],
      },
    };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return {
      notFound: true,
    };
  }
}
export default GraphicDesign;
