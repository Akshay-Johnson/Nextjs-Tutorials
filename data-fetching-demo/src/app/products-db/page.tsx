import { getProducts} from "@/prisma-db"

type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null;
}

export default async function ProductsDBPage() { 
    const products: Product[] = await getProducts();

    return (
        <div>
            <h1>Products (from Prisma DB)</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h2>{product.title}</h2>
                        <p>Price: ${product.price}</p>
                        <p>{product.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

}