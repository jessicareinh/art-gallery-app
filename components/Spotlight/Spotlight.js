import React from "react";
import Image from "next/image";

export default function Spotlight({ pieces }) {
  // Function to pick one art piece at random
  function getRandomArtPiece() {
    const randomIndex = Math.floor(Math.random() * pieces.length);
    return pieces[randomIndex];
  }

  // Get a random art piece
  const randomArtPiece = getRandomArtPiece();

  return (
    <>
      <h2>"Hier ist das Random Piece"</h2>
      <h2>{randomArtPiece.name}</h2>
      <Image
        src={randomArtPiece.imageSource}
        alt={randomArtPiece.name}
        width={100}
        height={150}
      />
      <p>{randomArtPiece.artist}</p>
    </>
  );
}
