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
  description:
    "Professional portfolio of Adil Ali, showcasing leadership across technology, journalism, law, and public service.",
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
