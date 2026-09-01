import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/src/components/shared components/Footer";
import Navbar from "@/src/components/shared components/Navbar";

const yekanBakh = localFont({
  src: [
    {
      path: "../../public/fonts/woff2/YekanBakhFaNum-Light.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/YekanBakhFaNum-SemiBold.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/YekanBakhFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-fa",
  display: "swap",
  preload: true,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={yekanBakh.variable}>
      <body className="font-[var(--font-fa)]">
        <main className="flex min-h-screen flex-col">
          <div className="h-1/5 w-full flex flex-col items-center py-4">
            <Navbar />
          </div>

          {children}

          <Footer />
        </main>
      </body>
    </html>
  );
}
