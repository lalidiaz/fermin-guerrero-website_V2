import Head from "next/head";
import { client } from "src/lib/cms";
import { ProjectLayout } from "@/components/index";

const Project = ({ project }) => {
  const { name, description } = project.fields;

  return (
    <>
      <Head>
        <title>{name}</title>
        {/* FIX ME: description[0] ? */}
        <meta name="description" content={description[0]} />
      </Head>
      <ProjectLayout project={project} />
    </>
  );
};

export async function getStaticPaths() {
  const response = await client.getEntries({ content_type: "project" });
  const paths = response.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const response = await client.getEntries({
    content_type: "project",
    "fields.slug": slug,
  });

  if (!response?.items?.length) {
    return {
      redirect: {
        destination: "/all",
        permanent: false,
      },
    };
  }

  return {
    props: {
      project: response.items[0],
    },
  };
}

export default Project;
