import { Masonry, Layout } from "@/components/index";
import { client } from "src/lib/cms";

const TypefaceDesign = ({ data }) => {
  const typefaces = data.filter((item) => item.fields.type === "typeface");

  return (
    <>
      <Layout
        name="description"
        title="Typeface Design"
        content="Fermín Guerrero's typefaces"
      >
        <Masonry data={typefaces} type="typeface" />
      </Layout>
    </>
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

export default TypefaceDesign;
