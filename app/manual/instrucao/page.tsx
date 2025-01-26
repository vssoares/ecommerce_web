'use client';

import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

import CarouselInstrucaoManual from '@/components/carousel-instrucao-manual';

export default function InstrucaoManualPage() {
   return (
      <div className="flex min-h-screen justify-center bg-gradient-to-br from-blue-200 to-purple-200 p-5 dark:from-gray-800 dark:to-blue-800 md:items-center md:py-5">
         <Card className="mx-auto w-full max-w-3xl shadow-lg">
            <CardContent className="flex h-full flex-col justify-evenly space-y-3 p-6 md:block">
               <div>
                  <Logo textClass="text-2xl md:text-3xl" alt="Logo" />
               </div>
               <CardTitle className="text-center text-2xl font-bold">Instruções</CardTitle>
               <CardDescription className="text-xs text-gray-600 dark:text-gray-300 md:text-lg">
                  <ol>
                     <li>Enrole um fio ou fita ao redor do seu dedo, dando apenas uma volta.</li>
                     <li>Marque o ponto onde as duas extremidades do fio se encontram.</li>
                     <li>
                        Estenda o fio sobre uma régua e anote o comprimento entre os dois pontos
                        marcados.
                     </li>
                  </ol>
               </CardDescription>
               <div className="mt-2 flex flex-col items-center">
                  <CarouselInstrucaoManual />
                  <div className="mt-5 flex flex-col">
                     <Link href="/manual/medicao-anel">
                        <Button variant={'rosa'} className="w-[250px]">
                           Já sei minha medida
                        </Button>
                     </Link>
                     <Link className="mt-3" href="/">
                        <Button variant={'outline'} className="w-[250px]">
                           Voltar
                        </Button>
                     </Link>
                  </div>
               </div>
            </CardContent>
         </Card>
      </div>
   );
}
