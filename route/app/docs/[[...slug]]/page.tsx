export default async function docs( {params} :{ params: Promise <{slug :string[]}> } ) {
    const { slug } = await params;
    if(slug?.length === 2){
        return (
            <h1>
                viewing doc for {slug[0]} and concept of {slug[1]}
            </h1>
        );
    }
        else if(slug?.length===1){
            return(
                <h1>
                    viewing doc for {slug[0]}
                </h1>
            );
    }

    return (

        <main>
            <h1>Welcome to the Docs Page</h1>
        </main>
    );
}