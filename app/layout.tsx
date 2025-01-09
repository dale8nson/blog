import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YourSite",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="min-w-screen min-h-screen text-[#000000] bg-[#f5f5f5] font-serif flex flex-col justify-start items-center [&_a]:text-[#3f81d2] [&_a]:underline list-inside [&_ul]:list-disc [&_ul]:translate-x-4 [&_h2]:text-2xl"
      >
        <div className="w-11/12 md:w-2/3 p-4 flex flex-row justify-start">
          <h1 className="font-bold text-[2.5rem]">YourSite</h1>
        </div>
        {children}

      </body>
    </html>
  );
}
