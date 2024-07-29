import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getMetadata } from "@/libs/sanity";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });




export async function generateMetadata(): Promise<Metadata> {
  const mt =  await getMetadata();

  
  return {
    title: `${mt.title} | My Portfolio`,
    description: mt.description,
    openGraph: {
      title: mt.title,
      description: mt.description,
      type: 'article',
      tags: mt.keywords,
      publishedTime: mt._createdAt,
      modifiedTime: mt._updatedAt,
    }
  };
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
        {children}</body>
    </html>
  );
}
