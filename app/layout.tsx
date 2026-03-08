// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Milford Career E-Portfolio",
    description: "Career e-portfolio of Milford Emerson S. Yao",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}