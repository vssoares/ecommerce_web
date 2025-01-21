'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CalibragemPage() {
  const [sliderValue, setSliderValue] = useState(225);
  const router = useRouter();

  const salvarCalibragem = () => {
    localStorage.setItem('calibragem', sliderValue.toString());
    router.push('/medidor/digital/medicao-anel');
  };

  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center px-4 py-8">
      <Card className="mx-auto w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Calibragem</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center">
            <div
              style={{ width: `${sliderValue}px` }}
              className="mb-10 h-[300px] rounded-sm border border-black dark:border-white"
            ></div>

            <span className="mb-10">Arraste aqui</span>

            <Slider
              className="w-full cursor-pointer"
              defaultValue={[225]}
              min={100}
              max={350}
              step={1}
              onValueChange={(value: any) => setSliderValue(value[0])}
            />

            <div className="mt-10 flex flex-col">
              <Button onClick={() => salvarCalibragem()} className="w-[250px]">
                Já calibrei
              </Button>

              <Link className="mt-3" href="/medidor/digital/instrucao">
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
