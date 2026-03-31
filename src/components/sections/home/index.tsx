import Image from "next/image";
import { useNav } from "../../hooks/useNav";

const Index = () => {
  const ref = useNav("home");
  return (
    <section className="home section" id="home" ref={ref}>
      <div className="home__container container grid section__border">
        <div className="home__data grid">
          <h1 className="home__title">
            <span className="one-line-span">Hi, I’m Kian</span>
            <span className="one-line-span">Software Engineer</span>
            <span className="one-line-span">Based in Canada</span>
          </h1>

          <div className="home__blob grid">
            <div className="home__perfil">
              <Image src="/img/perfil.webp" alt="perfil" width={256} height={256} priority={true} draggable={false}/>
            </div>

            <Image src="/img/shape-wawes.svg" alt="" className="home__shape-wawes" width={256} height={256}/>
            <Image src="/img/shape-circle.svg" alt="" className="home__shape-circle" width={256} height={256}/>
          </div>

        </div>
        <div className="home__info">
          <div>
            <h3 className="home__info-title">
              BIOGRAPHY
            </h3>

            <p className="home__info-description">
              Hi, I&apos;m Kian, a Software Engineer
              passionate about designing elegant solutions
              to address critical problems.
            </p>
          </div>

          <div>
            <h3 className="home__info-title">
              CONTACT
            </h3>

            <p className="home__info-description">
              <span className="one-line-span">Vancouver, BC&nbsp;</span>
              <span className="one-line-span">hello@kianattar.com&nbsp;</span>
            </p>
          </div>

          <div>
            <h3 className="home__info-title">
              SERVICES
            </h3>

            <p className="home__info-description">
              <span className="one-line-span">API and Web Services</span>
              <span className="one-line-span">AI Chatbots & Integrations</span>
              <span className="one-line-span">Apps & Websites</span>
            </p>
          </div>
        </div>
        <div className="home__info">
          <div>
            <h3 className="home__info-title">
              YEARS OF EXPERIENCE
            </h3>

            <p className="home__info-number">
              {new Date().getFullYear() - 2024}+
            </p>
          </div>

          <div>
            <h3 className="home__info-title">
              COMPLETED PROJECTS
            </h3>

            <p className="home__info-number">
              37+
            </p>
          </div>

          <div>
            <h3 className="home__info-title">
              USERS IMPACTED PER YEAR
            </h3>

            <p className="home__info-number">
              6,000+
            </p>
          </div>
        </div>
      </div>
    </section>)
};

export default Index;
