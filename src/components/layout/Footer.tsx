import Link from "next/link";

const footerLinks = [
  "Home", "Skills", "Projects"
]
const Footer = () => {
  return (
      <footer className="footer">
          <div className="footer__container container">
              <h1 className="footer__title">Kian</h1>
              <p>Software Engineer</p>


              <ul className="footer__list">
                {footerLinks.map(link => (
                  <li key={link}>
                    <Link href={`#${link.toLowerCase()}`} className="footer__link">{link}</Link>
                  </li>
                ))}
              </ul>

              <span className="footer__copy">
                    &#169; Copyright Kian Attar. All rights reserved
              </span>
          </div>
      </footer>
  );
};

export default Footer;
