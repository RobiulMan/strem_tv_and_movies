import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import request from "../utils/request";

export default function Home({ results }) {
  return (
    <>
      <Head>
        <title>Strem TV and Movies</title>
        <meta name="Strem TV and Movies" content="Strem TV and Movies" />
      </Head>
      <Header />
      <Nav />
      <Results results={results} />
    </>
  );
}


export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const requests = await fetch(
    `https://api.themoviedb.org/3${
      request[genre]?.url || request.fetchTranding.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: requests.results
    }
  };
}
