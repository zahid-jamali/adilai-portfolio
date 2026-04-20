import { Manrope, Space_Grotesk } from "next/font/google";
import "../styles/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Adil Ali | Entrepreneur, Journalist, Lawyer, Public Leader",
  description: "Official Portfolio of Adil Ali",
  openGraph: {
    title: "Adil Ali",
    description:
      "Professional portfolio of Adil Ali, showcasing leadership across technology, journalism, law, and public service.",
    url: "https://adilali.me",
    siteName: "Adil Ali",
    images: [
      {
        url: "/images/adil3.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} bg-background font-sans text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
