import { useAuth } from "@/components/Authentication/hooks/useAuth";
import MainLayout from "@/components/layouts/MainLayout";
import PictureList from "@/components/Pictures/PictureList";

export default function IndexHome() {
    const { isAuthenticated } = useAuth();

    return <MainLayout>{isAuthenticated && <PictureList />}</MainLayout>;
}
