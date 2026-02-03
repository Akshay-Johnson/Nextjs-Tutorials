"use client";

import {useState} from "react";

export default function DashboardPage() {
   const [name , setName] = useState("");
   console.log("Rendering Dashboard Page");
   return (
         <div>
            <h1>Dashboard Page</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
            <h1> welcome{name}</h1>
         </div>
   );
}