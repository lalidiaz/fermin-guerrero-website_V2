import { useState, useRef, useCallback, memo } from "react";
import styled from "styled-components";
import { HiOutlineChevronDown } from "react-icons/hi";

const Accordion = ({ title, content, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef(null);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const height =
    isOpen && contentRef.current
      ? `${contentRef.current.scrollHeight}px`
      : "0px";

  return (
    <AccordionSection>
      <AccordionBtn
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls="accordion-content"
      >
        {title}
        <Chevron isOpen={isOpen} aria-hidden="true" />
      </AccordionBtn>
      <AccordionContent
        ref={contentRef}
        $isOpen={isOpen}
        style={{ maxHeight: height }}
        id="accordion-content"
        role="region"
        aria-labelledby="accordion-header"
      >
        {content}
      </AccordionContent>
    </AccordionSection>
  );
};

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
`;

const AccordionBtn = styled.button`
  background-color: black;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  padding: 10px 0;
  transition: background-color 0.3s ease;
  font-size: 1.2rem;

  &:hover {
    background-color: #222;
  }

  &:focus-visible {
    outline: 2px solid white;
    outline-offset: 2px;
  }
`;

const Chevron = styled(HiOutlineChevronDown)`
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "none")};
`;

const AccordionContent = styled.div`
  background-color: black;
  color: white;
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: ${({ isOpen }) => (isOpen ? "0 0 1rem 0" : "0")};
`;

export default memo(Accordion);
