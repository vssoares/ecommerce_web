'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { getHoopByDiameter } from '@/lib/convert-hoop';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import Logo from '@/assets/imagens/logo.webp';

export default function MedicaoAnelPage() {
  const calibration = parseFloat(localStorage.getItem('calibragem') || '0');
  const cardSize = 53.98;
  const min = (calibration * 14.96) / cardSize;
  const max = (calibration * 23.87) / cardSize;
  const step = cardSize / calibration;
  const mm = calibration / cardSize;
  const size = min;
  const [sliderValue, setSliderValue] = useState(size);
  const [medida, setMedida] = useState(getHoopByDiameter(sliderValue / mm));

  useEffect(() => {
    setMedida(getHoopByDiameter(sliderValue / mm));
  }, [sliderValue]);

  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center px-4 py-8">
      <Card className="mx-auto w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Calibragem</CardTitle>
          <CardDescription>
            Para descobrir a medida do seu anel é simples, coloque a peça em cima do círculo e
            ajuste até que ambos fiquem do mesmo tamanho. <br /> Se o seu anel for anatômico,
            considere um número menor do que o indicado na medição do aro.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center">
            <div
              style={{ width: `${sliderValue}px`, height: `${sliderValue}px` }}
              className="mb-10 rounded-full border border-black dark:border-white"
            >
              <Image src={Logo} alt="logo " width={sliderValue} height={sliderValue} />
            </div>

            <div className="my-10">Medida do anel: {medida}</div>

            <span className="mb-10">Arraste aqui</span>

            <Slider
              className="w-full cursor-pointer"
              defaultValue={[min]}
              min={min}
              max={max}
              step={step}
              onValueChange={(value: any) => setSliderValue(value[0])}
            />

            <div className="mt-10 flex flex-col">
              <Link href="/medidor/digital/calibragem">
                <Button className="w-[250px]">Já calibrei</Button>
              </Link>

              <Link className="mt-3" href="/medidor/digital/calibragem">
                <Button variant={'link'} className="w-[250px]">
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
