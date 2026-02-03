"use client";

import {useState} from "react";

export const NavSearch = () => {
    const [search, setSearch] = useState("");
    console.log("Rendering NavSearch component");
    return (
        <div>
            <input type="text" placeholder="Search..." />
        </div>
    );
}