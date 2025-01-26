import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
   description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
   openGraph: {
      type: 'website'
   }
};

export default function HomePage() {
   return (
      <>
         <div className="flex min-h-screen justify-center bg-gradient-to-br from-blue-200 to-purple-200 px-6 py-10 dark:from-gray-800 dark:to-blue-800 md:items-center">
            <Card className="mx-auto w-full max-w-3xl shadow-lg">
               <CardContent className="flex h-full flex-col justify-evenly space-y-5 p-6 md:block">
                  <h1 className="text-center text-3xl font-extrabold text-gray-800 dark:text-gray-100">
                     Encontre o tamanho perfeito do seu anel!
                  </h1>
                  <CardDescription className="text-center text-lg text-gray-600 dark:text-gray-300">
                     Escolha entre o Medidor Digital ou o Medidor Manual para descobrir o tamanho
                     ideal do seu anel.
                  </CardDescription>
                  <div className="flex flex-col items-center justify-center space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0">
                     <Link href="/digital/instrucao">
                        <Button variant={'rosa'}>Usar Medidor Digital</Button>
                     </Link>
                     <Link href="/manual/instrucao">
                        <Button variant={'rosa'}>Usar Medidor Manual</Button>
                     </Link>
                  </div>
               </CardContent>
            </Card>
         </div>
      </>
   );
}
