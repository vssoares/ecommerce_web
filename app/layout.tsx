import { cn } from '@/lib/utils';
import { GeistSans } from 'geist/font/sans';
import { ReactNode } from 'react';
import './globals.css';

export const metadata = {
   title: {
      default: 'Gi Santos Store | Para gente que Brilha'
   },
   robots: {
      follow: true,
      index: true
   }
};

export default async function RootLayout({ children }: { children: ReactNode }) {
   return (
      <html lang="en" className={cn('light', GeistSans.variable)} suppressHydrationWarning>
         <body className="min-h-screen bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
            <main>{children}</main>
         </body>
      </html>
   );
}
