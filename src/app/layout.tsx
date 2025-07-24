import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VISA Component Suggester",
  description: "What will you build today?",
};

import '@visa/nova-styles/styles.css';
import '@visa/nova-styles/themes/visa-light/index.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
