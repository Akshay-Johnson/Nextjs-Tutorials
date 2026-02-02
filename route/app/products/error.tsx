"use client"

import {useRouter} from 'next/navigation';
import { startTransition} from 'react';

export default function ErrorBoundary({error,reset}:{error :Error, reset : () => void}) {
     const router = useRouter();
        const reload = () => {
            startTransition(() => {
                router.refresh();
                reset();
            });
        };

    return (
        <div className= "border-2 border-red-500  w-xl h-xl text-red-500 text-5xl text-center m-auto animate-pulse  ">
            <p>error in reviewid {error.message}</p>
            <button onClick={reload}>Try Again</button>
        </div>
    );  
}