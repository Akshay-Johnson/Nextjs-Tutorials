import Link from "next/link";

export default function Product() {
 
 const productid = 100;
  return (
    <main>
      <h1>Welcome to the Product Page</h1>
      <li> 
        <Link href="/products/1"> Product 1</Link>
        </li>
      <li>
        <Link href="/products/2"> Product 2</Link>
        </li>
      <li>
        <Link href="/products/3"> Product 3</Link>
        </li>
        <li>
        <Link href = {`/products/${productid}`}> Product {productid} </Link>
        </li>
    </main>
  );
}