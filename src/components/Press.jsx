import { HoverComponent, RichText } from "@/components/index";
import { Title } from "@/styles/Press";

const Press = ({ data }) => {
  const paperPress = data.filter((item) => item.fields.online === false);
  const paperOnline = data.filter((item) => item.fields.online === true);

  const displayPaperPress = paperPress.map((item) => (
    <HoverComponent
      item={item.fields}
      year={item.fields.year}
      key={item.fields.id}
      index={item.fields}
      url={item.fields.image}
      link={item.fields.link}
    >
      <RichText texts={item.fields.description} />
    </HoverComponent>
  ));

  const displayPaperOnline = paperOnline.map((item) => (
    <HoverComponent
      item={item.fields}
      year={item.fields.year}
      key={item.fields.id}
      index={item.fields}
      url={item.fields.image}
      link={item.fields.link}
    >
      <a href={item.fields.link} target="_blank" rel="noreferrer">
        {item.fields.title}
      </a>
    </HoverComponent>
  ));

  return (
    <>
      <Title>Print (Selected):</Title>
      {displayPaperPress}
      <Title>Print Online (Selected):</Title>
      {displayPaperOnline}
    </>
  );
};
export default Press;
