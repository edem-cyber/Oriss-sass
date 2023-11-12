import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { DefaultSeo } from 'next-seo';

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
      <DefaultSeo
        title="Next SEO Example"
        description="Next SEO is a plug in that makes managing your SEO easier in Next.js projects."

        openGraph={{
          type: 'website',
          title: 'Oriss | AI Powered Tools',
          description: 'Oriss is a suite of tools used for your day to day designing, programming, writing & creating.',
          locale: 'en_IE',
          url: 'https://www.url.ie/',
          siteName: 'Oriss',
        }}
      // twitter={{
      //   handle: '@handle',
      //   site: '@site',
      //   cardType: 'summary_large_image',
      // }}

      />

      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}