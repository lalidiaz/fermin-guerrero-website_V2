import { useRouter } from "next/router";
import { ActiveLinkStyles } from "../../styles/ActiveLink";

const ActiveLink = ({ children, href, closeMenu }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
    closeMenu();
  };

  return (
    <ActiveLinkStyles pathname={router.pathname} href={href} onClick={handleClick}>
      {children}
    </ActiveLinkStyles>
  );
};

export default ActiveLink;
