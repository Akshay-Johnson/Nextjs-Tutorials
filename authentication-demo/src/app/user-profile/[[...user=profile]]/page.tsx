import { UserProfile } from "@clerk/nextjs";

export default function UserProfilePage() {
    return (
        <div className="max-w-3xl mx-auto py-8">
            <UserProfile path="/user-profile" />
        </div>
    );
}
    