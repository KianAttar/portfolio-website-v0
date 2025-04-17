
import Head from "next/head";

export default function Error404() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <section className="home section">
          <div className="home__container">
            <h2 className="section__title">Page not found!</h2>
            <p className="section__subtitle">Sorry, the page you are looking for doesn&apos;t exist.</p>
          </div>
      </section>
    </>
  );
}
