'use client';

import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CalibrationPage() {
   const [sliderValue, setSliderValue] = useState(225);
   const router = useRouter();

   const salvarCalibragem = () => {
      localStorage.setItem('calibragem', sliderValue.toString());
      router.push('/digital/medicao-anel');
   };

   return (
      <div className="flex min-h-screen justify-center bg-gradient-to-br from-blue-200 to-purple-200 p-5 dark:from-gray-800 dark:to-blue-800 md:items-center md:py-5">
         <Card className="mx-auto w-full max-w-3xl shadow-lg">
            <CardContent className="flex h-full flex-col justify-evenly space-y-3 p-6 md:block">
               <div>
                  <Logo textClass="text-2xl md:text-3xl" alt="Logo" />
               </div>
               <CardTitle className="bg-clip-text text-center text-2xl font-bold">
                  Calibragem
               </CardTitle>
               <div className="flex flex-col items-center space-y-8">
                  <motion.div
                     initial={{ scale: 0.9, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     transition={{ duration: 0.5 }}
                     style={{ width: `${sliderValue}px` }}
                     className="h-[300px] rounded-lg border-2 border-black bg-white shadow-md"
                  />
                  <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                     Arraste para ajustar o tamanho
                  </p>
                  <Slider
                     className="w-full cursor-pointer"
                     defaultValue={[225]}
                     min={100}
                     max={350}
                     step={1}
                     color="rosa"
                     onValueChange={(value: number[]) => setSliderValue(value?.[0] ?? 225)}
                  />
                  <div className="flex w-full max-w-xs flex-col items-center space-y-4">
                     <Button onClick={salvarCalibragem} variant={'rosa'} className="w-full">
                        Já calibrei
                     </Button>
                     <Link href="/digital/instrucao" className="w-full">
                        <Button variant="outline" className="w-full">
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
