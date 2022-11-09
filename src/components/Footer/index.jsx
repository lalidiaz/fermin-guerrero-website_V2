import { footerlinks } from "@/utils/links";

const Footer = () => {
  return (
    <footer>
      <div className="copyright">
        <p className="name">
          ©2021 <span>&#8212; </span> Fermin Guerrero
        </p>
      </div>

      <div className="footer-links">
        {footerlinks.map((link) => (
          <div className={link.className} key={link.id}>
            <a rel="noreferrer" href={link.href} target="_blank">
              <u>{link.name}</u>
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
