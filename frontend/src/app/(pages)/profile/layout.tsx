import NavBar from "@/app/components/navbar/navbar";
import ProfileSidebar from "@/app/components/profile_sidebar/profile_sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ULMS Profile",
  description: "ULMS Profile",
};
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <div className="row g-2 p-2">
          <div className="col-sm-3 col-lg-2">
            <ProfileSidebar />
          </div>
          <div className="col-sm-9 col-lg-10 text-dark">
            <div className="shadow-sm rounded-4 p-4">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
