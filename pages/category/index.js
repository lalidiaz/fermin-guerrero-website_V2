import { useRouter } from "next/router";
import { client } from "src/lib/cms";
import { Layout, CategoryHeader, CategoryContent } from "@/components/index";

const CategoryPage = ({ data }) => {
  const router = useRouter();
  const { category } = router.query;

  const filteredProjects = data?.filter((project) =>
    project.fields.tags?.includes(category)
  );

  return (
    <Layout
      title={category}
      name="description"
      content={`Fermín Guerrero's ${category} Projects`}
    >
      <CategoryHeader category={category} />
      <CategoryContent data={filteredProjects} />
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

export default CategoryPage;
