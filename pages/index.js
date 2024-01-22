import useSWR from "swr";
import { useState } from "react";
import ArtPieces from "@/components/ArtPieces/ArtPieces";
import Spotlight from "@/components/Spotlight/Spotlight";
import Navigation from "@/components/Navigation/Navigation";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function SpotlightPage({ pieces }) {
  /*const { data, error, isLoading } = useSWR("/api/user", fetcher)

/*if (error) return <div> failed to load </div>
if (isLoading) return <div>loading...</div>
return <div>hello {data.name}! </div>*/

  return (
    <>
      <h1>Art Gallery</h1>
      {/* <ArtPieces pieces={artPieces} />; */}
      <Spotlight pieces={pieces} />
      <Navigation />
    </>
  );
}
