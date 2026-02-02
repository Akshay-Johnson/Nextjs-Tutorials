import {Card} from "@/components/card";
import Link  from "next/link";

export default function ArchivedNotifications() {
    return (
        <Card>
        
            <h2>Archived Notifications Component</h2>
            <Link href="/complex-dashboard">Default</Link>
        </Card>
    );
}