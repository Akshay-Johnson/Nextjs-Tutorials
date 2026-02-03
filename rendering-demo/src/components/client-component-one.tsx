"use client";

import { ClientComponentTwo } from "./client-component-two";
import { useState } from "react";

 export const ClientComponentOne = ({children} : {children: React.ReactNode} ) => {
    const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Client Component One</h1>
      {children}
    </div> 
  );
}