import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
// import { MoonPayProvider } from "@moonpay/moonpay-react";
// import { MoonPayClientProvider } from "@/components/providers/MoonPayClientProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Trustless Work",
  description: "Trustless Work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(geistSans.variable, geistMono.variable, "antialiased")}
      >
        {/* <MoonPayClientProvider> */}
          <div className="relative flex min-h-screen w-full">
            <div className="flex-1 flex flex-col w-full">
              <div className="flex-1 w-full p-4  min-h-[calc(100vh-2rem-2rem)]">
                {children}
              </div>
            </div>
          </div>
          <Toaster />
        {/* </MoonPayClientProvider> */}
      </body>
    </html>
  );
}
