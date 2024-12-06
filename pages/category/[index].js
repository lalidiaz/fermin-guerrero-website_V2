import { useRouter } from "next/router";
import { client } from "src/lib/cms";
import { Layout, CategoryHeader, CategoryContent } from "@/components/index";

const CategoryPage = ({ data }) => {
  const { index } = useRouter().query;

  const filteredProjects = data?.filter((project) =>
    project.fields.tags?.includes(index)
  );

  if (!filteredProjects?.length) {
    return (
      <Layout
        title=""
        name="description"
        content={`No projects found in ${index}`}
      >
        <CategoryHeader category={index} />
        <CategoryContent data={filteredProjects} />
      </Layout>
    );
  }

  return (
    <Layout
      title={index}
      name="description"
      content={`Fermín Guerrero's ${index} Projects`}
    >
      <CategoryHeader category={index} />
      <CategoryContent data={filteredProjects} />
    </Layout>
  );
};
export const getStaticPaths = async () => {
  try {
    const response = await client.getEntries({
      content_type: "project",
    });

    const allTags = new Set();
    response.items.forEach((item) => {
      if (item.fields && Array.isArray(item.fields.tags)) {
        item.fields.tags.forEach((tag) => allTags.add(tag));
      }
    });

    const paths = Array.from(allTags).map((tag) => ({
      params: { index: tag },
    }));

    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    return {
      paths: [],
      fallback: true,
    };
  }
};

export const getStaticProps = async ({ params }) => {
  try {
    const response = await client.getEntries({
      content_type: "project",
    });

    return {
      props: {
        data: response.items,
      },
      revalidate: 3600,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default CategoryPage;
