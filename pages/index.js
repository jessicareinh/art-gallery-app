import useSWR from "swr";
import { useState } from "react";
import ArtPieces from "@/components/ArtPieces/ArtPieces";
import Spotlight from "@/components/Spotlight/Spotlight";

export default function HomePage() {
  /*const { data, error, isLoading } = useSWR("/api/user", fetcher)

/*if (error) return <div> failed to load </div>
if (isLoading) return <div>loading...</div>
return <div>hello {data.name}! </div>*/

  const [id, setId] = useState(0);
  console.log(id);

  const fetcher = (url) => fetch(url).then((response) => response.json());

  const {
    data: artPieces,
    isLoading,
    error,
  } = useSWR("https://example-apis.vercel.app/api/art/", fetcher);

  if (error) {
    return <h1>failed to load: {error.message}</h1>;
  }

  if (isLoading) {
    return <h1>load...</h1>;
  }

  console.log(artPieces);
  return (
    <>
      <h1>Art Gallery</h1>
      <ArtPieces pieces={artPieces} />;
      <Spotlight pieces={artPieces} />
    </>
  );
}
