import { useRouter } from "next/router";
import styled from "styled-components";

const ActiveLink = ({ children, href, onNavigate }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
    onNavigate?.();
  };

  return (
    <StyledLink
      href={href}
      onClick={handleClick}
      isActive={router.pathname === href}
    >
      {children}
    </StyledLink>
  );
};

const StyledLink = styled.a`
  color: white;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "regular")};
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

export default ActiveLink;
