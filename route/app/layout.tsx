import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ErrorWrapper } from "./error-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:{
    default: "blah",
    template: "%s | blah",

  } 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header style={{ textAlign: 'center', marginTop: '20px', backgroundColor: 'lightgray', padding: '10px', color:"black" }}>
          <h1>My Next.js App</h1>
        </header>
        <ErrorWrapper>
        {children}
        </ErrorWrapper>
        <footer style={{ textAlign: 'center', marginTop: '150px', backgroundColor: 'lightgray', padding: '10px', color: 'black' }}>
          <p>© 2024 My Next.js App</p>
        </footer>

      </body>
    </html>
  );
}
