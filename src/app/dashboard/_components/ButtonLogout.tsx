import { useRouter } from "next/navigation";

export default function ButtonLogout() {
    const router = useRouter();
    const handleLogout = () => {
        // Clear auth token
        document.cookie = "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        // Redirect to sign-in page
        router.push("/sign-in");
    };
    return (
        <button
            onClick={handleLogout}
            className="bg-primary text-white px-4 py-1 rounded w-full my-8 hover:bg-[#397370] transition-all duration-200 text-sm"
        >
            Log out
        </button>
    );
}
