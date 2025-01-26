'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { getCircunferenciaByHoop, getHoopByCircumference } from '@/lib/convert-hoop';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import Logo from '@/components/logo';
import { Minus, Plus } from 'lucide-react';

export default function MedicaoAnelPage() {
   const [defaultSliderValue, setDefaultSliderValue] = useState(4.7);
   const [sliderValue, setSliderValue] = useState(4.7);
   const [medida, setMedida] = useState(7);
   const min = 4.7;
   const max = 7.5;
   const step = 0.1;

   useEffect(() => {
      setMedida(getHoopByCircumference(sliderValue));
   }, [sliderValue]);

   const alterarQuantidade = (value: number) => {
      if (value >= 7 && value <= 35) {
         setSliderValue(getCircunferenciaByHoop(value));
         setDefaultSliderValue(getCircunferenciaByHoop(value));
      }
   };

   return (
      <div className="flex min-h-screen justify-center bg-gradient-to-br from-blue-200 to-purple-200 p-5 dark:from-gray-800 dark:to-blue-800 md:items-center md:py-5">
         <Card className="mx-auto w-full max-w-3xl shadow-lg">
            <CardContent className="flex h-full flex-col justify-evenly space-y-3 p-6 md:block">
               <div>
                  <Logo textClass="text-2xl md:text-3xl" alt="Logo" />
               </div>
               <CardTitle className="text-center text-2xl font-bold">Tamanho do Anel</CardTitle>
               <CardDescription className="text-center">
                  <ol>
                     <li>Arraste a bolinha de acordo com a medida da régua.</li>
                  </ol>
               </CardDescription>
               <div className="flex flex-col items-center">
                  <span className="mb-5 mt-10">Arraste aqui</span>

                  <span className="mb-5">{sliderValue} cm</span>

                  <Slider
                     className="w-full cursor-pointer"
                     defaultValue={[defaultSliderValue]}
                     min={min}
                     max={max}
                     step={step}
                     onValueChange={(value: any) => setSliderValue(value[0])}
                     color="rosa"
                  />

                  <div className="mt-5">
                     <p className="text-center">Medida do anel</p>
                  </div>

                  <div className="mb-5 flex items-center justify-center gap-2">
                     <Minus
                        onClick={() => alterarQuantidade(medida - 1)}
                        className="cursor-pointer text-rosa"
                        size={24}
                     />
                     <p className="text-2xl"> {medida}</p>
                     <Plus
                        onClick={() => alterarQuantidade(medida + 1)}
                        className="cursor-pointer text-rosa"
                        size={24}
                     />
                  </div>

                  <div className="mt-10 flex flex-col">
                     <Link href="https://www.gisantostore.com.br/aneis">
                        <Button variant={'rosa'} className="w-[250px]">
                           Ir as compras
                        </Button>
                     </Link>

                     <Link className="mt-3" href="/manual/instrucao">
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
