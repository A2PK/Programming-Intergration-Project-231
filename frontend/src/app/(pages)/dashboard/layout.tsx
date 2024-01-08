import type { Metadata } from "next";
import NavBar from "@/app/components/navbar/navbar";
import AppFooter from "@/app/components/footer/footer";
export const metadata: Metadata = {
  title: "ULMS Dashboard",
  description: "ULMS Dashboard",
};
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      {children}
      <AppFooter />
    </>
  );
}
