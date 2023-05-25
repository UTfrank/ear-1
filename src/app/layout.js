import "./globals.css";
import { ToggleNavProvider } from "@/context/toggleNar";
import { Inter, DM_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const dMSans = DM_Sans({subsets: ["latin"], variable: '--font-dm-sans', weight:  '500',});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dMSans.variable}`}>
        <ToggleNavProvider>
          {children}
        </ToggleNavProvider>
      </body>
    </html>
  );
}
