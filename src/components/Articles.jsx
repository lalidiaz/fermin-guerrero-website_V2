import { HoverComponent, RichText } from "@/components/index";

const Articles = ({ data }) => {
  const getArticles = data.map((item) => (
    <HoverComponent
      item={item}
      year={item.fields.year}
      key={item.fields.id}
      link={item.fields.url}
      url={item.fields.image}
      index={item.fields}
    >
      <RichText texts={item.fields.description} />
    </HoverComponent>
  ));

  return <>{getArticles}</>;
};

export default Articles;
