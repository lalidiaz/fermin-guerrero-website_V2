import { HoverComponent } from "@/components/index";

const Press = ({ data, title }) => {
  return (
    <>
      <p className="hover-title">{title}</p>
      {data.map((item, index) => {
        const { description, descriptionTwo, year } = item;

        return (
          <HoverComponent
            data={data}
            year={year}
            description={description}
            descriptionTwo={descriptionTwo}
            key={item}
            index={index}
          />
        );
      })}
    </>
  );
};
export default Press;
