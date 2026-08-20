import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/src/lib/utils";
import Footer from "@/src/components/shared components/Footer";
import Navbar from "@/src/components/shared components/Navbar";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={cn("font-sans", geist.variable)}>
      <body>
        <main className="flex min-h-screen flex-col p-4">
          <div className="h-1/5 w-full flex flex-col items-center">
            <Navbar />
          </div>

          {children}

          <Footer />
        </main>
      </body>
    </html>
  );
}
