function getRandomInt(count:number) {
    return Math.floor(Math.random()*count)
}

export default function ProductLayout(
    {children,} : {children:React.ReactNode;}) {

         
    const random = getRandomInt(2);
    if(random===1){
        throw new Error ("error loading product")
    }

    return (
        <div style={{border: '2px solid blue', padding: '10px', margin: '10px'}}>
            <h2 style={{textAlign: 'center'}}>Product Page Layout</h2>
            {children}
            <h2> featured products </h2>
        </div>
    );
}