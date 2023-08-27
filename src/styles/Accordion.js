import styled from "styled-components";
import { HiOutlineChevronDown } from "react-icons/hi";

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  height: 100%;
`;

export const AccordionBtn = styled.button`
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

export const Chevron = styled(HiOutlineChevronDown)`
  transition: transform 0.6s ease;
  transform: ${(props) => (props.active ? "rotate(180deg)" : "none")};
`;

export const AccordionContent = styled.div`
  background-color: black;
  color: white;
  overflow: hidden;
  transition: max-height 0.6s ease;
  padding: ${(props) => (props.active ? "0rem 0rem 10rem 0rem" : "0rem")};
`;
