'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { getDiameterByHoop, getHoopByDiameter } from '@/lib/convert-hoop';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import Logo from '@/assets/imagens/logo.webp';
import { Minus, Plus } from 'lucide-react';

export default function MedicaoAnelPage() {
   const [calibration, setCalibration] = useState(0);
   const [sliderValue, setSliderValue] = useState(0);
   const [medida, setMedida] = useState(0);
   const [min, setMin] = useState(0);
   const [max, setMax] = useState(0);
   const [step, setStep] = useState(0);

   useEffect(() => {
      if (typeof window !== 'undefined') {
         const storedCalibration = parseFloat(localStorage?.getItem('calibragem') || '0');
         setCalibration(storedCalibration);
      }
   }, []);

   useEffect(() => {
      if (calibration) {
         const cardSize = 53.88;
         const mm = calibration / cardSize;
         setMin((calibration * 14.96) / cardSize);
         setMax((calibration * 23.87) / cardSize);
         setStep(cardSize / calibration);
         setSliderValue((calibration * 14.96) / cardSize);
      }
   }, [calibration]);

   useEffect(() => {
      if (calibration) {
         const cardSize = 53.88;
         const mm = calibration / cardSize;
         console.log(sliderValue / mm);

         setMedida(getHoopByDiameter(sliderValue / mm));
      }
   }, [sliderValue, calibration]);

   const alterarQuantidade = (value: number) => {
      if (value >= 7 && value <= 35) {
         const cardSize = 53.88;
         const mm = calibration / cardSize;
         let diameter = getDiameterByHoop(value);
         setSliderValue(diameter * mm);
      }
   };

   return (
      <div className="h-screen-svh flex min-h-screen justify-center bg-gradient-to-br from-blue-200 to-purple-200 p-5 dark:from-gray-800 dark:to-blue-800 md:items-center md:py-5">
         <Card className="mx-auto w-full max-w-3xl shadow-lg">
            <CardContent className="flex h-full flex-col justify-evenly space-y-3 p-6 md:block">
               <CardTitle className="text-center text-2xl font-bold">Tamanho do Anel</CardTitle>
               <CardDescription className="text-center">
                  Para descobrir a medida do seu anel, coloque-o sobre o círculo e ajuste até que
                  ambos fiquem do mesmo tamanho. <br /> Se o seu anel for anatômico, considere um
                  número menor do que o indicado na medição.
               </CardDescription>
               <div className="flex flex-col items-center">
                  <div
                     style={{ width: `${sliderValue}px`, height: `${sliderValue}px` }}
                     className="mb-10 rounded-full border-2 border-rosa dark:border-white"
                  >
                     <Image src={Logo} alt="logo " width={sliderValue} height={sliderValue} />
                  </div>

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

                  <span className="mb-10">Arraste aqui</span>

                  <Slider
                     className="w-full cursor-pointer"
                     defaultValue={[min]}
                     min={min}
                     max={max}
                     step={step}
                     onValueChange={(value: any) => setSliderValue(value[0])}
                     title={'bg-rose'}
                  />

                  <div className="mt-10 flex flex-col">
                     <Link href="https://www.gisantostore.com.br/aneis">
                        <Button variant={'rosa'} className="w-[250px]">
                           Ir as compras
                        </Button>
                     </Link>

                     <Link className="mt-3" href="/digital/calibragem">
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
