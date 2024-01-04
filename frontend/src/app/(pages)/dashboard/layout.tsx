import type { Metadata } from "next";
import SearchBar from "@/app/components/searchbar/searchbarver2";
import NavBar from "@/app/components/navbar/navbar";
import AppFooter from "@/app/components/footer/footer";
// import Carousel from "@/app/components/carousel/carousel";
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
      {/* <SearchBar /> */}
      {children}
      {/* <Carousel/> */}
      <AppFooter />
    </>
  );
}