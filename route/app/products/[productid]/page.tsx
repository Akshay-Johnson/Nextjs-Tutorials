import {Metadata} from "next";

type Props = {
    params: Promise<{ productid: string }>;
}

export const generateMetadata = async ( { params, }: Props ): Promise<Metadata> => {
    const id = (await params).productid;
    const title= await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(`iphone ${id}`);

        },100);

    })
    return {
        title: `Product ${title}`,
    }

}


export default async function productid( {params }: Props   )
{
    const  { productid } = await params;
    return (
        <main>
            <h1>Product Page for Product ID: {productid}</h1>
        </main>
    );
} 