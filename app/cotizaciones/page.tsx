import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle } from "lucide-react"

export default function CotizacionesPage() {
  // Aquí normalmente cargaríamos las cotizaciones desde la base de datos
  const cotizaciones = [
    { id: "1", cliente: "Juan Pérez", fecha: "2023-05-15", total: 1500, estado: "pendiente" },
    { id: "2", cliente: "María López", fecha: "2023-05-10", total: 2300, estado: "enviada" },
    { id: "3", cliente: "Carlos Rodríguez", fecha: "2023-05-05", total: 950, estado: "aceptada" },
  ]

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Cotizaciones</h1>
        <Link href="/cotizaciones/nueva">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Nueva Cotización
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cotizaciones.map((cotizacion) => (
          <Card key={cotizacion.id}>
            <CardHeader>
              <CardTitle>Cotización #{cotizacion.id}</CardTitle>
              <CardDescription>Cliente: {cotizacion.cliente}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fecha:</span>
                  <span>{cotizacion.fecha}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total:</span>
                  <span className="font-medium">${cotizacion.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Estado:</span>
                  <span
                    className={`capitalize ${
                      cotizacion.estado === "aceptada"
                        ? "text-green-500"
                        : cotizacion.estado === "pendiente"
                          ? "text-amber-500"
                          : cotizacion.estado === "enviada"
                            ? "text-blue-500"
                            : ""
                    }`}
                  >
                    {cotizacion.estado}
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href={`/cotizaciones/${cotizacion.id}`}>
                <Button variant="outline">Ver Detalles</Button>
              </Link>
              <Button variant="secondary">Enviar</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
