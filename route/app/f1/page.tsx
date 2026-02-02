import Link from "next/link";

export default function f1() {
    return <h1>F1 Page
        <Link href="/f1/f2">Go to F2</Link>
        <Link href="/f3">Go to F3</Link>
    </h1>
}