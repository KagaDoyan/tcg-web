import { Geist, Geist_Mono } from "next/font/google";
import "./../globals.css";
import { SiteHeader } from "@/components/nav-menu/header-nav";
import Footer from "@/components/footer/footer";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
      <div className="max-w-[1440px] mx-auto items-center">{children}</div>
      </main>
      <Footer />
    </>

  );
}
