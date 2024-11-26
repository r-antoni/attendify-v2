import Menu from "@/components/menu";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className="flex h-screen">
        {/* Left side */}
        <div className="w-1/6 md:w-1/12 lg:w-1/6 xl:w-[14%] p-4">
          <Link href="/" className="flex items-center justify-center lg:justify-start">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <span className="hidden lg:block font-bold text-xl text-primary">ttendify</span>
          </Link>
          <Menu />
        </div>
        {/* Right side */}
        <div className="w-full bg-slate-200 overflow-y-scroll">
          <Navbar />
          {children}
        </div>
      </div>
    </html>
  );
}
