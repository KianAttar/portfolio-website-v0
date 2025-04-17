import SocialLink from "@/components/ui/SocialLink";
import Link from "next/link";
export const socialMedias = [
  {
    iconName: "ri-linkedin-box-line",
    href: "https://www.linkedin.com/in/hassan-attar",
  },
  {
    iconName: "ri-github-line",
    href: "https://github.com/hassan-attar",
  },
  {
    iconName: "ri-twitter-x-line",
    href: "https://x.com/hassan_attar_x",
  },
];

const footerLinks = [
  "Home", "Skills", "Projects"
]
const Footer = () => {
  return (
      <footer className="footer">
          <div className="footer__container container">
              <h1 className="footer__title">Hassan</h1>
              <p>Software Engineer</p>


              <ul className="footer__list">
                {footerLinks.map(link => (
                  <li key={link}>
                    <Link href={`#${link.toLowerCase()}`} className="footer__link">{link}</Link>
                  </li>
                ))}
              </ul>

              <ul className="footer__social">
                {socialMedias.map((social) => (
                  <li key={social.iconName} className="footer__social-link">
                    <SocialLink key={social.iconName} href={social.href} className="footer__social-link" iconName={social.iconName} />
                  </li>
                ))}
              </ul>

              <span className="footer__copy">
                    &#169; Copyright Hassan Attar. All rights reserved
              </span>
          </div>
      </footer>
  );
};

export default Footer;
