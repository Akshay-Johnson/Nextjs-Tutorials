import { Suspense } from 'react';
import Author from './author'; 
 
 type Post = {
    id: number;
    userId: number;
    title: string;
    body: string;
 }

 export default async function PostSequential() {
    const response = await fetch ("https://jsonplaceholder.typicode.com/posts");
    const posts:Post[] = await response.json();

    const filteredPosts = posts.filter(post => post.id % 10 === 1);

    return (
        <div className="space-y-4 p-4">
            <h1 className="text-2xl font-bold">Blog Posts </h1>
            <div className="space-y-4">
                {filteredPosts.map((post) => (
                    <div key={post.id} className="p-4 border rounded shadow">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p className="mt-2 text-gray-700">{post.body}</p>
                        <Suspense fallback={<div className="mt-4 text-sm text-gray-500">Loading author...</div>}>
                        <Author userId={post.userId} />
                        </Suspense>
                    </div>
                ))}
            </div>
        </div>
    )
 }