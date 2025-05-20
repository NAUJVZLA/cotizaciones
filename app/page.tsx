import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Sistema de Cotizaciones y Servicios</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Cotizaciones</CardTitle>
            <CardDescription>Crear y gestionar cotizaciones para clientes</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Crea cotizaciones detalladas con cálculos automáticos y adjunta fotos de referencia.</p>
          </CardContent>
          <CardFooter>
            <Link href="/cotizaciones" className="w-full">
              <Button className="w-full">Ir a Cotizaciones</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Servicios</CardTitle>
            <CardDescription>Seguimiento de servicios pendientes y completados</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Gestiona el estado de tus servicios y mantén un registro de lo que está pendiente y completado.</p>
          </CardContent>
          <CardFooter>
            <Link href="/servicios" className="w-full">
              <Button className="w-full">Ir a Servicios</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Calculadora</CardTitle>
            <CardDescription>Herramienta para cálculos rápidos</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Realiza cálculos para tus cotizaciones de manera rápida y sencilla.</p>
          </CardContent>
          <CardFooter>
            <Link href="/calculadora" className="w-full">
              <Button className="w-full">Ir a Calculadora</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
