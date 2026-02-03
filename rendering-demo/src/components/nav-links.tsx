export const NavLinks = () => {
    console.log("Rendering NavLinks component");
    return (
        <div style={{display: 'flex', gap: '1rem'}}>
            <a href="/home">Home</a>
            <a href="/products">Products</a>
            <a href="/about">About</a>
        </div>
    );
}