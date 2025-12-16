import "@app/ui/global.css";
import {ReactNode} from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import Header from "@app/components/Header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Echelon",
  description: "Stripe‑style landing",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
