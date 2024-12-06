import Head from "next/head";

const ProjectMeta = ({ name, description }) => (
  <Head>
    <title>{name}</title>
    <meta name="description" content={description?.[0] || ""} />
  </Head>
);

export default ProjectMeta;
