import Head from "next/head";
import Link from "next/link"
import * as Sentry from '@sentry/nextjs';
import type { NextPageContext } from "next";
import Error from "next/error";

function ErrorPage() {
  return (
    <>
      <Head>
        <title>Error - try again!</title>
        <meta name="robots" content="noindex, nofollow"/>
      </Head>
      <section className="home section">
        <div className="home__container">
          <h2 className="section__title">Something went wrong!</h2>
          <p className="section__subtitle">An error occurred. I have been notified through <Link href="https://sentry.io/" target="_blank">Sentry</Link> and the issue will
            be resolved shortly. Please try again later.</p>
        </div>
      </section>
    </>
  );
}

ErrorPage.getInitialProps = async (contextData: NextPageContext) => {
  await Sentry.captureUnderscoreErrorException(contextData);
  return Error.getInitialProps(contextData);
};

export default Error;
