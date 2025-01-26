'use client';

import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious
} from '@/components/ui/carousel';
import Image from 'next/image';

import InstrucaoImage1 from '@/assets/imagens/instrucao-1.webp';
import InstrucaoImage2 from '@/assets/imagens/instrucao-2.webp';
import InstrucaoImage3 from '@/assets/imagens/instrucao-3.webp';
import InstrucaoImage4 from '@/assets/imagens/instrucao-4.webp';

export default function CarouselInstrucaoManual() {
   const items = [
      {
         image: InstrucaoImage1,
         alt: 'Instrução'
      },
      {
         image: InstrucaoImage2,
         alt: 'Instrução'
      },
      {
         image: InstrucaoImage3,
         alt: 'Instrução'
      },
      {
         image: InstrucaoImage4,
         alt: 'Instrução'
      }
   ];

   return (
      <div className="px-10">
         <Carousel>
            <CarouselContent>
               {items.map((item, index) => (
                  <CarouselItem key={index} className="flex justify-center">
                     <Image
                        src={item.image}
                        style={{ width: '100%', height: 'auto', maxWidth: '400px' }}
                        alt={item.alt}
                     />
                  </CarouselItem>
               ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
         </Carousel>
      </div>
   );
}
