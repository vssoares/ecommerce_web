'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function RingSizeFinder() {
  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center px-4 py-8">
      <Card className="mx-auto w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Descubra o número do seu anel e compre sem erros!
          </CardTitle>
          <CardDescription className="text-center">
            Escolha entre o Medidor Digital ou o Medidor Manual para encontrar o tamanho perfeito do
            seu anel.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 flex justify-center space-x-4">
            <Link href="/medidor/digital/instrucao">
              <Button>Usar Medidor Digital</Button>
            </Link>
            <Link href="/medidor/manual/instrucao">
              <Button>Usar Medidor Manual</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
