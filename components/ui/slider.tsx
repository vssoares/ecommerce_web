'use client';

import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';

import { cn } from '@/lib/utils';

// adicionar uma cor no slider
type SliderProps = React.ComponentProps<typeof SliderPrimitive.Root> & {
   color?: 'primary' | 'secondary' | 'rosa';
};

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
   ({ className, color = 'primary', ...props }, ref) => (
      <SliderPrimitive.Root
         ref={ref}
         className={cn('relative flex w-full touch-none select-none items-center', className)}
         {...props}
      >
         <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
            <SliderPrimitive.Range
               className={cn('absolute h-full', {
                  'bg-primary': color === 'primary',
                  'bg-secondary': color === 'secondary',
                  'bg-rosa': color === 'rosa'
               })}
            />
         </SliderPrimitive.Track>
         <SliderPrimitive.Thumb className="block h-8 w-8 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
      </SliderPrimitive.Root>
   )
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
