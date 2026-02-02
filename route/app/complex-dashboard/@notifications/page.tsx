import {Card} from "@/components/card";
import Link  from "next/link";

export default function Notifications() {
    return (
        <Card>
        
            <h2>Notifications Component</h2>
            <Link href="/complex-dashboard/archived">Archived</Link>
        </Card>
    );
}