import { HoverComponent } from "@/components/index";
import { Title, PressContainer } from "@/styles/Press";

const Press = ({ data, title }) => {
  return (
    <PressContainer>
      <Title>{title}</Title>

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
    </PressContainer>
  );
};
export default Press;
