import { AuthForm } from '@/components/AuthForm';
import Link from 'next/link';

export default function RegisterPage() {
   return (
      <div className="flex min-h-screen">
         <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
               <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Crie sua conta</h2>
               <p className="mt-2 text-sm text-gray-600">
                  Já tem uma conta?{' '}
                  <Link href="/login" className="font-medium text-primary hover:text-primary/90">
                     Faça login
                  </Link>
               </p>
               <div className="mt-8">
                  <AuthForm
                     isLogin={false}
                     onSubmit={(e: any) => {
                        e.preventDefault();
                        console.log(e);
                     }}
                  />
               </div>
            </div>
         </div>
         <div className="relative hidden w-0 flex-1 lg:block">
            <img
               className="absolute inset-0 h-full w-full object-cover"
               src="/placeholder.svg?height=1080&width=1920"
               alt="E-commerce illustration"
            />
         </div>
      </div>
   );
}
