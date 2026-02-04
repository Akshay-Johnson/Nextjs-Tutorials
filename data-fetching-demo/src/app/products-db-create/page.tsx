"use client";

import { Submit } from "@/components/submit";
import { useActionState } from "react";
import { CreateProduct, FormState } from "@/actions/products";


export default function AddProductPage() {

    const initialState: FormState = {
        errors: {},
    };

    const [state, formAction, isPending] = useActionState(CreateProduct, initialState);

   

    return (
    <form action={formAction} className="p-4 space-y-4 max-w-96 text-white">
    <div>
      <label className="text-white">
        {state.errors.title && <p className="text-red-500">{state.errors.title}</p>}
        Title
        <input
          type="text"
          className="block w-full p-2 text-white border rounded"
          name="title"
        />
      </label>
    </div>
    <div>
      <label className="text-white">
        {state.errors.price && <p className="text-red-500">{state.errors.price}</p>}
        Price
        <input
          type="number"
          className="block w-full p-2 text-white border rounded"
          name="price"
        />
      </label>
    </div>
    <div>
      <label className="text-white">
        {state.errors.description && <p className="text-red-500">{state.errors.description}</p>}
        Description
        <textarea
          className="block w-full p-2 text-white border rounded"
          name="description"
        />
      </label>
    </div>
      <Submit />
    </form>
  );
}