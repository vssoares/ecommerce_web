'use client';

import gifInstrucao from '@/assets/imagens/calibration-ring.gif';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function InstrucaoDigitalPage() {
  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center px-4 py-8">
      <Card className="mx-auto w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Instrução</CardTitle>
          <CardDescription className="text-center">
            Para garantir a precisão da medição do aro, é necessário calibrar o medidor. É simples,
            rápido e fácil. Coloque um cartão sobre a tela e arraste a bolinha até que a figura
            fique da mesma largura que o cartão. (Siga o exemplo da imagem)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center">
            <Image width={200} src={gifInstrucao} alt="gif instrução"></Image>

            <div className="mt-5 flex flex-col">
              <Link href="/medidor/digital/calibragem">
                <Button className="w-[250px]">Calibrar</Button>
              </Link>

              <Link className="mt-3" href="/medidor">
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
