'use client';

import gifInstrucao from '@/assets/imagens/calibration-ring.gif';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function InstrucaoDigitalPage() {
   return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 px-4 py-8 dark:from-gray-900 dark:to-blue-900">
         <Card className="mx-auto w-full max-w-2xl">
            <CardHeader>
               <CardTitle className="text-center text-2xl font-bold">Instrução</CardTitle>
               <CardDescription className="text-center">
                  Para garantir a precisão da medição do aro, é necessário calibrar o medidor. É
                  simples, rápido e fácil. Coloque um cartão sobre a tela e arraste a bolinha até
                  que a figura fique da mesma largura que o cartão. (Siga o exemplo da imagem)
               </CardDescription>
            </CardHeader>
            <CardContent>
               <div className="flex flex-col items-center">
                  <Image width={200} src={gifInstrucao} alt="gif instrução"></Image>

                  <div className="mt-5 flex flex-col">
                     <Link href="/medidor/digital/calibragem">
                        <Button variant={'rosa'} className="w-[250px]">
                           Calibrar
                        </Button>
                     </Link>

                     <Link className="mt-3" href="/medidor">
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
