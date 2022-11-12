import { useRouter } from "next/router";
import { Link } from "@/styles/ActiveLink";

const ActiveLink = ({ children, href }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link pathname={router.pathname} href={href} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ActiveLink;
