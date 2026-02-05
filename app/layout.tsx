import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JEDEL",
  description: "Where you can type your ideas.",
};
//
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

/**
 * Long story short , i build this first tailwind project after i had i course on tailwind , i was at first wondering what
 * topic the landing page should be about, and when i was thinking around my room, i saw my old keyboard , that belong to
 * Jedel , then imediatley , i search to the logo and i add a small coloring to it , and i look the 3d model of the key board
 * then i start building this thing , at first i was just using little gpt for the classes , but later on , i start
 * memorising them automaticly, but then i relise during dev, most of my work , can be reducsed a lot if have a vision at
 * fist cuz , some time u start using thing a lot of time , which cost some time , so before that u just to asign them to s
 * smth simple and then keep using it , and when u need to do a simple change to it , just change that little thing
 * will we all know that !!
 * That was a good project , build form nothing , i learned from it the importent of panning things first to save time
 * later , it's a fundatmental thing in programing
 *
 * any way , now i'm gonna hover straigh to Postgres to i can collect my stack (next + tailwind + postgres) , then
 * inshalllah i'm gonna build a powerfull SaaS or maybe go to some ai thing to plug it with SaaS
 *
 * Don't forget about the BMW 5 series M pack or M edition ,
 * TAKE CARE !!
 *
 *
 *
 *
 */
