import { auth, currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
    const authObj = await auth();
    const userObj = await currentUser();
    console.log("Auth Object:", authObj);
    console.log("User Object:", userObj);
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard! This page is protected and requires authentication.</p>
        </div>
    );
}