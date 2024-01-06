import type { Metadata } from "next";
import SearchBar from "@/app/components/searchbar/searchbar";
import NavBar from "@/app/components/navbar/navbar";

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
      <SearchBar />
      {children}
    </>
  );
}