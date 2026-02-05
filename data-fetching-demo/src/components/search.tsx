import Form from "next/form"

export const Search = () => {
    return (
        <Form action = "/products-db" className="flex gap-2">
            <input name="query" className="flex 1 px-4 py-2"
            placeholder="Search products..." />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Search
            </button>
        </Form>
    )
}