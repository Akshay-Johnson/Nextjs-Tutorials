import { Suspense } from "react";
import {Product} from "../components/product";
import {Review} from "../components/review";

export default function ProductReviewsPage() {
    return (
        <div>
            <h1>Product and Reviews</h1>
            <Suspense fallback={<div>Loading Product...</div>} >
            <Product />
            </Suspense>
            <Suspense fallback={<div>Loading Review...</div>} >
            <Review />
            </Suspense>
        </div>
    )
}