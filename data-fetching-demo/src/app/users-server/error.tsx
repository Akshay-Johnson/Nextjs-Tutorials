"use client";

import { useEffect } from "react";

export default function ErrorPage({ error }: { error: Error }) {
    useEffect(() => {
        console.error(`${error}`)
    }, [error]);

    return (
        <div className="p-4">
            <h2 className="text-red-600 font-bold">Something went wrong!</h2>
            <p className="mt-2">{error.message}</p>
        </div>
    );
}