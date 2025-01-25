'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function RingSizeFinder() {
   return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 px-4 py-8 dark:from-gray-900 dark:to-blue-900">
         <Card className="mx-auto w-full max-w-2xl">
            <CardHeader>
               <CardTitle className="text-center text-2xl font-bold">
                  Descubra o número do seu anel e compre sem erros!
               </CardTitle>
               <CardDescription className="text-center">
                  Escolha entre o Medidor Digital ou o Medidor Manual para encontrar o tamanho
                  perfeito do seu anel.
               </CardDescription>
            </CardHeader>
            <CardContent>
               <div className="mb-6 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link href="/medidor/digital/instrucao">
                     <Button variant={'rosa'}>Usar Medidor Digital</Button>
                  </Link>
                  <Link href="/medidor/manual/instrucao">
                     <Button variant={'rosa'}>Usar Medidor Manual</Button>
                  </Link>
               </div>
            </CardContent>
         </Card>
      </div>
   );
}
