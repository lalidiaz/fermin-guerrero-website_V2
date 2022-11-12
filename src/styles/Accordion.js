import styled from "styled-components";
import { HiOutlineChevronDown } from "react-icons/hi";

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  margin-bottom: 15px;
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
  padding: ${(props) => (props.active ? "20px 0px 0px 0px;" : "0px")};
`;
