import { useState, useRef } from "react";
import {
  AccordionSection,
  AccordionBtn,
  AccordionContent,
  Chevron,
} from "@/styles/Accordion";

const Accordion = (props) => {
  const [active, setActive] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  const content = useRef(null);

  const toggle = () => {
    setActive(active === "" ? "active" : "");
    setHeightState(
      active === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  };

  console.log("setHeight", setHeight);
  return (
    <AccordionSection>
      <AccordionBtn active={active} onClick={toggle}>
        {props.title}
        <Chevron active={active} width={30} color="white" />
      </AccordionBtn>
      <AccordionContent
        ref={content}
        active={active}
        style={{ maxHeight: `${setHeight}` }}
      >
        <div>{props.content}</div>
      </AccordionContent>
    </AccordionSection>
  );
};
export default Accordion;
