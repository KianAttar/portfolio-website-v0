import {MouseEventHandler, useContext, useEffect, useState} from "react";
import { NavContext } from "../context/NavContext";
import { useRouter } from "next/router";
import NavItem from "@/components/layout/NavItem";
import { createPortal } from "react-dom";
import Image from "next/image";
import lightKaLogo from "../../../public/img/ka-logo-light-no-background.svg";
import darkKaLogo from "../../../public/img/ka-logo-dark-no-background.svg";
import {useTheme} from "@/components/context/ThemeContext";
import Link from "next/link";

const navItems = [
  {
    id: "home",
    title: "Home",
    iconClassName: "ri-home-5-line",
  },
  {
    id: "skills",
    title: "Skills",
    iconClassName: "ri-trophy-line",
  },
  {
    id: "qualification",
    title: "Qualification",
    iconClassName: "ri-book-open-line",
  },
  {
    id: "services",
    title: "Services",
    iconClassName: "ri-briefcase-line",
  },
  {
    id: "projects",
    title: "Projects",
    iconClassName: "ri-image-line",
  },
  {
    id: "contact",
    title: "Contact",
    iconClassName: "ri-chat-3-line",
  },
];

const Header = () => {
  const router = useRouter();
  const { activeLinkId } = useContext(NavContext);
  const { isDarkTheme, toggleTheme } = useTheme(); // Use the custom hook
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const scrollToView = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId)!;
    const headerHeight = (document.querySelector("header") as HTMLElement | null)?.offsetHeight || 0;
    const bannerHeight = (document.querySelector(".deprecated-banner") as HTMLElement | null)?.offsetHeight || 0;
    const targetScrollPosition =
      sectionElement.getBoundingClientRect().top +
      window.scrollY -
      headerHeight -
      bannerHeight;
    setIsNavOpen(false);
    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });
  };

  const linkClickHandler: MouseEventHandler<HTMLLIElement> = async function (e) {
    let sectionId;
    const curPath = router.pathname;

    sectionId = (e.target as HTMLLIElement).dataset.id;
    if (
      curPath === "/404" ||
      curPath === "/_error" ||
      curPath === "/coming-soon"
    ) {
      await router.replace(`/`);
    }
    scrollToView(sectionId!);
  };

  useEffect(() => {
    setIsMounted(true)
  }, []);

  return (
    <header
      className={`header ${activeLinkId === "home" ? "" : "bg-header"}`}
      id="header"
    >
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <Image
            src={isDarkTheme ? darkKaLogo : lightKaLogo}
            alt={"Kian Attar logo"}
            width={64}
            height={64}
            className="nav__logo-img"
          />
        </a>
        <div
          className={`nav__menu ${isNavOpen ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list grid">
            {navItems.map((navItem) => (
              <li
                className="nav__item"
                key={navItem.id}
                onClick={linkClickHandler}
                data-id={navItem.id}
              >
                <NavItem
                  {...navItem}
                  isActive={activeLinkId === navItem.id}
                />
              </li>
            ))}
          </ul>

          {/* Close button */}
          <div
            className="nav__close"
            id="nav-close"
            onClick={() => setIsNavOpen(false)}
          >
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="nav__buttons">
          {/* Theme change button */}
          <i
            className={`ri-${isDarkTheme ? "sun" : "moon"}-line change-theme`}
            id="theme-button"
            onClick={toggleTheme}
          ></i>

          {/* Toggle button */}
          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={() => {
              setIsNavOpen(true);
            }}
          >
            <i className="ri-menu-4-line"></i>
          </div>
        </div>
        {isMounted &&
          createPortal(
            <Link
              href="#"
              className={`scrollup ${
                activeLinkId !== "home" ? "show-scroll" : ""
              }`}
              id="scroll-up"
              onClick={() => scrollToView("home")}
              aria-label="Scroll to top"
            >
              <i className="ri-arrow-up-line" aria-hidden="true"></i>
            </Link>,
            document.getElementById("__next")!
          )}
      </nav>
    </header>
  );
};

export default Header;
