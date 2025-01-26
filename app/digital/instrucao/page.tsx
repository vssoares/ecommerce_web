'use client';

import gifInstrucao from '@/assets/imagens/calibration-ring.gif';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function InstrucaoDigitalPage() {
   return (
      <div className="flex min-h-screen justify-center bg-gradient-to-br from-blue-200 to-purple-200 p-5 dark:from-gray-800 dark:to-blue-800 md:items-center md:py-5">
         <Card className="mx-auto w-full max-w-3xl shadow-lg">
            <CardContent className="flex h-full flex-col justify-evenly space-y-3 p-6 md:block">
               <div>
                  <Logo textClass="text-2xl md:text-3xl" width={50} height={50} alt="Logo" />
               </div>
               <CardTitle className="text-center text-2xl font-bold">Instrução</CardTitle>
               <CardDescription className="text-center text-lg text-gray-600 dark:text-gray-300">
                  Calibre o medidor colocando um cartão na tela e ajustando a bolinha até que a
                  figura tenha a mesma largura. (Veja a imagem)
               </CardDescription>
               <div className="mt-2 flex flex-col items-center">
                  <Image width={150} src={gifInstrucao} alt="gif instrução"></Image>
                  <div className="mt-5 flex flex-col">
                     <Link href="/digital/calibragem">
                        <Button variant={'rosa'} className="w-[250px]">
                           Calibrar
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
