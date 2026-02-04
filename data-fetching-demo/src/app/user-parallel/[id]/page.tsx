type Post = {
    userId : number;
    id : number;
    title : string;
    body : string;
};

type Album = {
    userId : number;
    id : number;
    title : string;
}

async function getUserPosts(userId: string) {
    await new Promise ((resolve) => setTimeout(resolve,3000));
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    return res.json();

}

async function getUserAlbums(userId: string) {
    await new Promise ((resolve) => setTimeout(resolve,2000));
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
    return res.json();

}

export default async function UserProfile({params ,} : {params : Promise<{ id : string}> }) {
    const {id} = await params ;
    const postData = getUserPosts(id);
    const albumsData = getUserAlbums(id);

    const [post, albums] = await Promise.all([postData, albumsData]);

    return(
        <>
        <div className="p-4 space-y-6">
            <div>
                <h2 className="text-2xl font-bold mb-4">User Profile</h2>
                <h3 className="text-xl font-semibold mb-2">Posts</h3>
                <ul className="list-disc list-inside">
                    {post.map((p: Post) => (
                        <li key={p.id} className="mb-1">
                            <h4 className="font-semibold">{p.title}</h4>
                            <p className="text-gray-700">{p.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

          <div className="p-4 space-y-6">
            <div>
                <h2 className="text-2xl font-bold mb-4">Albums</h2>
                <h3 className="text-xl font-semibold mb-2">Albums</h3>
                <ul className="list-disc list-inside">
                    {albums.map((a: Album) => (
                        <li key={a.id} className="mb-1">
                            <h4 className="font-semibold">{a.title}</h4>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    )}