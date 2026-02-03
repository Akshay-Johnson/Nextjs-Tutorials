import { ClientComponentOne } from "@/components/client-component-one";
import { ServerComponentOne } from "../../components/server-component-one";
// import { ClientComponentOne } from "@/components/client-component-one";

export default function InterleavingPage() {
    return (
        <div>
            <h1>Interleaving Client and Server Components</h1>
            <ClientComponentOne>
                <ServerComponentOne />
            </ClientComponentOne>
        </div>
    );
} 