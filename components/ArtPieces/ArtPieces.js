import Image from "next/image";


export default function ArtPieces({ pieces }) {
    return (
      <ul>
        {pieces.map((piece) => (
          <li key={piece.id}>
            <h2>{piece.name}</h2>
            <Image src={piece.imageSource} alt={piece.title} width={100} height={150} />
            <p>{piece.artist}</p>
          </li>
        ))}
      </ul>
    );
  }
  