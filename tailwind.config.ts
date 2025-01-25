import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
   darkMode: ['class'],
   content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         fontFamily: {
            sans: ['var(--font-geist-sans)']
         },
         keyframes: {
            fadeIn: {
               from: {
                  opacity: '0'
               },
               to: {
                  opacity: '1'
               }
            },
            marquee: {
               '0%': {
                  transform: 'translateX(0%)'
               },
               '100%': {
                  transform: 'translateX(-100%)'
               }
            },
            blink: {
               '0%': {
                  opacity: '0.2'
               },
               '20%': {
                  opacity: '1'
               },
               '100%': {
                  opacity: '0.2'
               }
            }
         },
         animation: {
            fadeIn: 'fadeIn .3s ease-in-out',
            carousel: 'marquee 60s linear infinite',
            blink: 'blink 1.4s both infinite'
         },
         borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)'
         },
         colors: {
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            card: {
               DEFAULT: 'hsl(var(--card))',
               foreground: 'hsl(var(--card-foreground))'
            },
            popover: {
               DEFAULT: 'hsl(var(--popover))',
               foreground: 'hsl(var(--popover-foreground))'
            },
            primary: {
               DEFAULT: 'hsl(var(--primary))',
               foreground: 'hsl(var(--primary-foreground))'
            },
            secondary: {
               DEFAULT: 'hsl(var(--secondary))',
               foreground: 'hsl(var(--secondary-foreground))'
            },
            rosa: {
               DEFAULT: '#C4938F',
               foreground: '#C4938F'
            },
            muted: {
               DEFAULT: 'hsl(var(--muted))',
               foreground: 'hsl(var(--muted-foreground))'
            },
            accent: {
               DEFAULT: 'hsl(var(--accent))',
               foreground: 'hsl(var(--accent-foreground))'
            },
            destructive: {
               DEFAULT: 'hsl(var(--destructive))',
               foreground: 'hsl(var(--destructive-foreground))'
            },
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            chart: {
               '1': 'hsl(var(--chart-1))',
               '2': 'hsl(var(--chart-2))',
               '3': 'hsl(var(--chart-3))',
               '4': 'hsl(var(--chart-4))',
               '5': 'hsl(var(--chart-5))'
            }
         }
      }
   },
   future: {
      hoverOnlyWhenSupported: true
   },
   plugins: [
      require('@tailwindcss/container-queries'),
      require('@tailwindcss/typography'),
      plugin(({ matchUtilities, theme }) => {
         matchUtilities(
            {
               'animation-delay': (value) => {
                  return {
                     'animation-delay': value
                  };
               }
            },
            {
               values: theme('transitionDelay')
            }
         );
      }),
      require('tailwindcss-animate')
   ]
};

export default config;
