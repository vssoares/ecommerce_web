'use client'

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function InstrucaoManualPage() {
  const router = useRouter();

  return (
    <>
      <div className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
        Manual
        <Button onClick={() => router.back()}>
          Voltar
        </Button>
      </div> 
    </>
  )
}

