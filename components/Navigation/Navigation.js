import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <Link href={"/"}>Home</Link>
      <Link href={"/art-pieces"}>Art Pieces</Link>
    </>
  );
}
