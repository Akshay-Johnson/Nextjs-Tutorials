

import { Submit } from "@/components/submit";
import { CreateProduct, FormState } from "@/actions/products";
import { get } from "http";
import EditProductForm from "./product-edit-form";
import { getProduct } from "@/prisma-db";
import { Product } from "../page";


export default async function EditProductPage({params} : {params :Promise<{id: string}>}) {
    const {id} = await params;
    const product: Product = await getProduct(parseInt(id)); 
    if (!product) {
        return <div>Product not found</div>;
    }  

    return (
    <EditProductForm product={product} />
  );
}