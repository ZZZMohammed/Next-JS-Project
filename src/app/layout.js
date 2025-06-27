import { Geist, Geist_Mono } from "next/font/google";
import Menubar from "@/components/ui/Menubar";
import './styles/globals.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default : 'G-B 05' ,
    template : '%s | G-B'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Menubar />
          <section className={"text-center"}>
            hello world
          </section>
        {children}
      </body>
    </html>
  );
}
