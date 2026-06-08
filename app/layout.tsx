import type { Metadata } from "next";
import { Inter, Space_Grotesk, The_Girl_Next_Door } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/navbar";
import ThemeProvider from "@/context/Theme";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevFlow",
  description:
    "A tool to help developers manage their workflow and stay organized.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interSans.className} ${spaceGrotesk.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
