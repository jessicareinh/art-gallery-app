import { useState } from "react";
import useSWR from "swr";
import GlobalStyle from "../styles";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function MyApp({ Component, pageProps }) {
  const {
    data: pieces,
    isLoading,
    error,
  } = useSWR("https://example-apis.vercel.app/api/art/", fetcher);

  if (error) {
    return <h1>failed to load: {error.message}</h1>;
  }

  if (isLoading) {
    return <h1>load...</h1>;
  }

  console.log(pieces);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} pieces={pieces} />
    </>
  );
}
