import { useRouter } from "next/router";
import styled from "styled-components";

const ActiveLink = ({ children, href, closeMenu }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
    closeMenu();
  };

  return (
    <ActiveLinkStyles
      pathname={router.pathname}
      href={href}
      onClick={handleClick}
    >
      {children}
    </ActiveLinkStyles>
  );
};

export default ActiveLink;

const ActiveLinkStyles = styled.a`
  color: ${(props) => (props.pathname === props.href ? "white" : "white")};
  font-weight: ${(props) =>
    props.pathname === props.href ? "bold" : "regular"};
`;
