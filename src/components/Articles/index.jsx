import { HoverComponent } from "@/components/index";

const Articles = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        const { linkDescription, url, year, description, description2 } = item;
        return (
          <HoverComponent
            link={linkDescription}
            url={url}
            data={data}
            year={year}
            description={description}
            descriptionTwo={description2}
            key={item}
            index={index}
          />
        );
      })}
    </>
  );
};

export default Articles;
