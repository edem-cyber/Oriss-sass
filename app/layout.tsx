import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Oriss',
  description: 'Your AI Assistant',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <NextTopLoader
            color="#198838"
            crawlSpeed={100}
            // height={3}
            crawl={true}
            // showSpinner={true}
            easing="ease-in"
            />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}