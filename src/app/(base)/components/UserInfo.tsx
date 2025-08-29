import { useGetUser } from "@/hooks/useGetUser";
import { useProfile } from "@/hooks/useProfile";
import { UserIcon } from "lucide-react";

export default function UserInfo () {

    const { user, loading: userLoading } = useGetUser();
    const {profile, loading: profileLoading } = useProfile(user?.id as string);

    return (
        <div className="flex items-center">
            {userLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <div className="bg-blue-500 rounded-full p-2">
                    <UserIcon className="h-6 w-6 text-white" />
            </div>
            <div className="ml-3 overflow-hidden">
                <p className="text-xs text-gray-400 truncate">{profile?.full_name}</p>
                <p className="text-xs text-gray-400 truncate">{user?.email}</p>
            </div>
                </>
            )}
            
        </div>
    )
}