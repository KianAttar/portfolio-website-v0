import Home from "@/components/sections/home";
import Testimonial from "@/components/sections/testimonials";
import Project from "../components/sections/projects";
import Head from "next/head";
import Services from "@/components/sections/services";
import ContactSection from "@/components/sections/contact/Contact";
import Skills from "../components/sections/skills";
import Qualification from "@/components/sections/qualifications";
import {useEffect} from "react";
import {join} from "node:path";
import {readFile} from "node:fs/promises";
import {PortfolioData} from "@/types";

export default function HomePage({ data }: { data: PortfolioData }) {
  useEffect(() => {
    // Ensure this runs only on the client side
    const scrollRevealSetup = async () => {
      const sr = (await require("scrollreveal")).default({
        origin: 'top',
        distance: '60px',
        duration: 1000,
        delay: 100,
      });
      sr.reveal(`.home__data, .projects__container, .testimonial__container, .footer__container`);
      sr.reveal(`.home__info div`, {delay: 600, origin: 'bottom', interval: 100});
      sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, {origin: 'left'});
      sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {origin: 'right'});
      sr.reveal(`.qualification__content, .services__card`, {interval: 100})
    }
    scrollRevealSetup()
  }, []);


  return (
    <>
      <Head>
        <title>Kian Attar</title>
        <meta
          name="description"
          content="I'm a Software Engineer with expertise in JavaScript, TypeScript, Java, C++, PHP, HTML, CSS, and various web development technologies. Explore my portfolio showcasing my projects, experience and services."
        />

        <meta
          name="keywords"
          content="Kian Attar, Kian, Attar, KianAttar, Kiyan Attar, KiyanAttar, Kiyan, Developer, Software Developer, Web, Web Developer, Full-stack web developer, Software Engineer, Backend Engineer"
        />
        <meta name="author" content="Kian Attar" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Kian Attar" />
        <meta
          property="og:description"
          content="I'm a Software Engineer with expertise in JavaScript, TypeScript, Java, C++, PHP, HTML, CSS, and various web development technologies. Explore my portfolio showcasing projects, experience and services."
        />
        <meta
          property="og:image"
          content="https://kianattar.com/ka-logo.png"
        />
        <meta property="og:url" content="https://kianattar.com" />

        <meta property="twitter:title" content="Kian Attar" />
        <meta
          property="twitter:description"
          content="I'm a Software Engineer with expertise in JavaScript, TypeScript, Java, C++, PHP, HTML, CSS, and various web development technologies. Explore my portfolio showcasing projects, experience and services."
        />
        <meta
          property="twitter:image"
          content="https://kianattar.com/ka-logo.png"
        />
        <meta property="twitter:url" content="https://kianattar.com" />
      </Head>
      <Home />
      <Skills skillSets={data.skillSets}/>
      <Qualification />
      <Services />
      <Project projects={data.projects}/>
      <Testimonial testimonials={data.testimonials}/>
      <ContactSection />
    </>
  );
}


export const getStaticProps = async () => {
  const filePath = join(process.cwd(), "data", "data.json");
  const jsonData = await readFile(filePath, "utf-8");
  const appData = JSON.parse(jsonData);

  return {
    props: { data: appData },
  };
};
