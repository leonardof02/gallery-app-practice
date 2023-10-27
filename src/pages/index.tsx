import { useAuth } from "@/components/Authentication/hooks/useAuth";
import MainLayout from "@/components/layouts/MainLayout";
import AppPresentation from "@/components/Pictures/AppPresentation";
import PictureList from "@/components/Pictures/PictureList";

export default function IndexHome() {
    const { isAuthenticated } = useAuth();

    return <MainLayout>{isAuthenticated ? <PictureList /> : <AppPresentation />}</MainLayout>;
}
