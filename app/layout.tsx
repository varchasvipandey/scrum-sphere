import "./globals.css";
import { globalFont } from "@/lib/fonts";
import { siteMeta } from "@/meta";

export const metadata = siteMeta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={globalFont.className}>{children}</body>
    </html>
  );
}
