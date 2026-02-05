"use client";

import { removeProduct } from "@/actions/products";
import { getProducts} from "@/prisma-db"
import Link from "next/link";
import { useOptimistic } from "react";
import Form from "next/form"

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null;
}

export const ProductsDetail = ({products}: {products: Product[]}) => { 

    const removeProductById = async (productid: number) => {
        setOptimisticProducts(productid);
        await removeProduct(productid);
    }

    const [optimisticProducts, setOptimisticProducts] = useOptimistic(products, (currentProducts, productid) => {
        return currentProducts.filter((product) => product.id !== productid);
    });

    return (
        <div>
            <h1>Products (from Prisma DB)</h1>
            <ul>
                {optimisticProducts.map((product) => (
                    <li key={product.id}>
                        <Link href={`/products-db/${product.id}`}>{product.title}</Link>
                        <p>Price: ${product.price}</p>
                        <p>{product.description}</p>
                        <Form action={removeProductById.bind(null, product.id)}>
                        <button type="submit" className="text-red-500">Delete</button>
                        </Form>
                    </li>
                ))}
            </ul>
        </div>
    );

}