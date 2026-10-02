import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

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

export const metadata = {
  title: "NSBE PSU",
  description: "NSBE PSU Chapter",
  icons: [
    { rel: "icon", url: "/nsbe-logo.png" },
    { rel: "shortcut icon", url: "/nsbe-logo.png" },
    { rel: "apple-touch-icon", url: "/nsbe-logo.png" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
          <Navbar />

          <main className="flex-grow overflow-y-auto bg-gray-100">{children}</main>

          <Footer />
      </body>
    </html>
  );
}
