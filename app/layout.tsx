import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thongminhtran.github.io"),
  title: {
    default: "Tim Tran — Full-Stack Developer",
    template: "%s · Tim Tran",
  },
  description:
    "Full-stack developer based in Calgary. React Native, Next.js, and .NET. I ship cross-platform mobile apps and modern web experiences.",
  keywords: [
    "Tim Tran",
    "Thong Minh Tran",
    "Full-stack developer",
    "React Native",
    "Next.js",
    "TypeScript",
    "Calgary",
    "Software developer portfolio",
  ],
  authors: [{ name: "Tim Tran" }],
  creator: "Tim Tran",
  openGraph: {
    type: "website",
    title: "Tim Tran — Full-Stack Developer",
    description:
      "Full-stack developer shipping cross-platform mobile apps and modern web experiences.",
    url: "https://thongminhtran.github.io",
    siteName: "Tim Tran",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tim Tran — Full-Stack Developer",
    description:
      "Full-stack developer shipping cross-platform mobile apps and modern web experiences.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
