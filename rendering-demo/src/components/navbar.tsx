import {NavLinks} from "./nav-links";
import {NavSearch} from "./nav-search";


export const Navbar = () => {
    console.log("Rendering Navbar component");
    return (
        <nav style={{display: 'flex', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid #ccc'}}>
            <div>MyApp</div>
            <NavLinks />
            <NavSearch />
        </nav>
    );
}