import Head from "next/head";
import { client } from "src/lib/cms";
// import { useParams } from "react-router-dom";

const TagPage = () => {
  // let params = useParams();

  // console.log("params", params);
  return (
    <>
      <Head>
        <title>title </title>
        {/* FIX ME: description[0] ? */}
        {/* <meta name="description" content={description[0]} /> */}
      </Head>
      <div>
        <h1>TagPage</h1>
      </div>
    </>
  );
};
export default TagPage;

export async function getStaticProps() {
  const response = await client.getEntries({ content_type: "project" });

  console.log("RESPONSE ===> ", response);
  return {
    props: {
      data: response.items,
    },
  };
}
