import { useState } from "react";
import { linksMobile, social } from "@/utils/links";
import Link from "next/link";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";

const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const menuVariants = {
    opened: {
      top: 0,
    },
    closed: {
      top: "-60vh",
    },
  };

  const handleClickHome = () => {
    setOpen(false);
  };

  return (
    <div className="mobile-wrapper">
      <div className={isOpen ? "burger-container" : "burger-container-close"}>
        <Hamburger toggled={isOpen} toggle={setOpen} size={21} color="white" />

        <Link href="/">
          <a onClick={() => handleClickHome()}>Fermin Guerrero</a>
        </Link>
      </div>
      <motion.div
        initial={false}
        animate={isOpen ? "opened" : "closed"}
        variants={menuVariants}
        transition={{ default: { duration: 1 } }}
        className="menu-mobile"
      >
        <div className="navigation-mobile">
          <ul className="ul">
            {linksMobile.map((link) => {
              const { id, url, text } = link;

              return (
                <li className="li-mobile" key={id}>
                  <Link href={url} passHref>
                    <a onClick={() => handleClickHome()} className="a">
                      {text}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="social-media">
          {social.map((media) => {
            const { id, url, text } = media;
            return (
              <span key={id}>
                <a href={url} target="_blank" rel="noreferrer">
                  {text}
                </a>
              </span>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default MobileMenu;
