import {Metadata} from "next";

export const metadata : Metadata = {
    title:{
        absolute:"blog"
    },
};

export default async function Blog(){
    await new Promise(resolve => {
        setTimeout(() => {
            resolve("delay...")
        },5000)
    })
    return(
        <main>
            <h1>Welcome to the Blog Page</h1>
        </main>
    );
}