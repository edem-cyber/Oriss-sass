import NavBar from "@/components/navbar";
import SideBar from "@/components/sidebar";

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full relative" >
            <div className="hidden md:flex md:w-72 h-screen md:flex-col md:fixed md:inset-y-0 z-[80] bg-[#112714]">
                <div >
                    <SideBar />
                </div >
            </div >
            <main className="md:pl-72" >
                <NavBar />
                {children}
            </main >
        </div >
    );
};
export default DashboardLayout;


