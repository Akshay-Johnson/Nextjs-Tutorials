"use client";

import {useAuth, useUser} from '@clerk/nextjs';
import {useState} from 'react';

export const Counter = () => {
    const [count , setCount] = useState(0);

    const { isLoaded, userId, sessionId, getToken } = useAuth();
    // const { isLoaded, isSignedIn, user } = useUser();

    if(!isLoaded || !userId) {
        return null;
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}