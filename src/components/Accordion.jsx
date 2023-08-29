import { useState, useRef } from "react";
import styled from "styled-components";
import { HiOutlineChevronDown } from "react-icons/hi";

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

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  height: 100%;
`;

const AccordionBtn = styled.button`
  background-color: black;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  transition: all 0.6s ease;
  padding: 0px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
`;

const Chevron = styled(HiOutlineChevronDown)`
  transition: transform 0.6s ease;
  transform: ${(props) => (props.active ? "rotate(180deg)" : "none")};
`;

const AccordionContent = styled.div`
  background-color: black;
  color: white;
  overflow: hidden;
  transition: max-height 0.6s ease;
  padding: ${(props) => (props.active ? "0rem 0rem 10rem 0rem" : "0rem")};
`;
