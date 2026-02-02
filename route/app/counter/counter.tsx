'use client'

import { title } from "process";
import { useState } from "react";

export default function Counter() {
    const[count, setCount]= useState(0);

    return (
        <>
        <h2>counter page</h2>
        <div className="flex  gap-8 text-5xl "  >
        <button onClick={() => setCount(count+1)}>+</button>
        <button onClick={()=> setCount(count-1)}>-</button>
        </div>
        <h3>count value is : {count}</h3>

        </>
    )
}