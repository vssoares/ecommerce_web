import { Input } from '@headlessui/react';
import { Button } from '../ui/button';
import { Label } from '../ui/label';

interface AuthFormProps {
   isLogin: boolean;
   onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function AuthForm({ isLogin, onSubmit }: AuthFormProps) {
   return (
      <form onSubmit={onSubmit} className="w-full max-w-sm space-y-4">
         <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
         </div>
         <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" required />
         </div>
         {!isLogin && (
            <div className="space-y-2">
               <Label htmlFor="confirmPassword">Confirmar Senha</Label>
               <Input id="confirmPassword" type="password" required />
            </div>
         )}
         <Button type="submit" className="w-full">
            {isLogin ? 'Entrar' : 'Cadastrar'}
         </Button>
      </form>
   );
}
