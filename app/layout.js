"use client";
import "antd/dist/reset.css"; // Ant Design styles
import "./globals.css"; // Your global styles
import { ThemeProvider } from "next-themes";
import { Providers } from "./provider";
import { Toaster } from 'react-hot-toast';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Providers>
          <ThemeProvider defaultTheme="system" attribute="class">
            {children}
             <Toaster position="top-right" />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
