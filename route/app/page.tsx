import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Home Page</h1>
      <Link href="/counter">Go to Counter Page</Link>
      <Link href="/products">Go to Products Page</Link>
      <Link href="/articles/breaking-new-123?lang=en">Read in english</Link>
       <Link href="/articles/breaking-new-123?lang=fr">Read in french</Link>


    </main>
  );
}