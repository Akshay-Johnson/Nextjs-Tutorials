import "server-only";

export const serverSidefunction = () => {
    console.log(`use multiple libraries,
        use environment variables:,
        interact with db,
        process confidentain info etc...`);

    return "Server Side Function Result";
}