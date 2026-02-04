type Author = {
    id: number;
    name: string;
 };

 export default async function Author ({ userId }: { userId: number }) {
    await new Promise ((resolve) => setTimeout(resolve,3000));
    const response = await fetch (`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user: Author = await response.json();
    
    return (
        <div className="mt-4 text-sm text-gray-500">
            written by : {""}
            <span className="font-bold">{user.name}</span>
        </div>
    )
 }