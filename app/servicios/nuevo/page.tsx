"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NuevoServicioPage() {
  const [activeTab, setActiveTab] = useState("informacion")
  const [tipoServicio, setTipoServicio] = useState("instalacion")
  const [categoriaServicio, setCategoriaServicio] = useState("cctv")
  const [prioridad, setPrioridad] = useState("media")

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center gap-2 mb-6">
        <Link href="/servicios">
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Nuevo Servicio</h1>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="informacion">Información Básica</TabsTrigger>
          <TabsTrigger value="equipos">Equipos</TabsTrigger>
          <TabsTrigger value="actividades">Actividades</TabsTrigger>
        </TabsList>

        <TabsContent value="informacion" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Información del Servicio</CardTitle>
                  <CardDescription>Ingresa la información básica del servicio</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="tipo">Tipo de Servicio</Label>
                        <Select value={tipoServicio} onValueChange={setTipoServicio}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona el tipo de servicio" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="instalacion">Instalación</SelectItem>
                            <SelectItem value="mantenimiento">Mantenimiento</SelectItem>
                            <SelectItem value="reparacion">Reparación</SelectItem>
                            <SelectItem value="consultoria">Consultoría</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="categoria">Categoría</Label>
                        <Select value={categoriaServicio} onValueChange={setCategoriaServicio}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona la categoría" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cctv">CCTV</SelectItem>
                            <SelectItem value="redes">Redes</SelectItem>
                            <SelectItem value="servidores">Servidores</SelectItem>
                            <SelectItem value="seguridad">Seguridad</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="descripcion">Descripción</Label>
                      <Textarea
                        id="descripcion"
                        placeholder="Describe el servicio a realizar..."
                        className="min-h-[100px]"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="fechaInicio">Fecha de Inicio</Label>
                        <div className="relative">
                          <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input id="fechaInicio" type="date" className="pl-8" />
                        </div>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="fechaFin">Fecha Estimada de Finalización</Label>
                        <div className="relative">
                          <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input id="fechaFin" type="date" className="pl-8" />
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="ubicacion">Ubicación</Label>
                      <div className="relative">
                        <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input id="ubicacion" placeholder="Dirección donde se realizará el servicio" className="pl-8" />
                      </div>
                    </div>

                    <Separator />

                    <div className="grid gap-2">
                      <Label>Prioridad</Label>
                      <RadioGroup
                        value={prioridad}
                        onValueChange={setPrioridad}
                        className="flex flex-col sm:flex-row gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="baja" id="baja" />
                          <Label htmlFor="baja" className="text-green-600">
                            Baja
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="media" id="media" />
                          <Label htmlFor="media" className="text-yellow-600">
                            Media
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="alta" id="alta" />
                          <Label htmlFor="alta" className="text-orange-600">
                            Alta
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="urgente" id="urgente" />
                          <Label htmlFor="urgente" className="text-red-600">
                            Urgente
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Cliente y Contacto</CardTitle>
                  <CardDescription>Información del cliente para este servicio</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="cliente">Cliente</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un cliente" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cliente1">Corporativo Azteca</SelectItem>
                          <SelectItem value="cliente2">Hotel Playa Azul</SelectItem>
                          <SelectItem value="cliente3">Banco Nacional</SelectItem>
                          <SelectItem value="cliente4">Supermercados del Norte</SelectItem>
                          <SelectItem value="cliente5">Supermercados del Norte</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="contacto">Contacto</Label>
                      <Input id="contacto" placeholder="Nombre del contacto" />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="telefono">Teléfono</Label>
                      <Input id="telefono" placeholder="Teléfono del contacto" />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Email del contacto" />
                    </div>

                    <Separator />

                    <div className="grid gap-2">
                      <Label htmlFor="tecnico">Técnico Asignado</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Asignar técnico" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tecnico1">Roberto Gómez</SelectItem>
                          <SelectItem value="tecnico2">Laura Sánchez</SelectItem>
                          <SelectItem value="tecnico3">Carlos Mendoza</SelectItem>
                          <SelectItem value="tecnico4">Ana Martínez</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label>Documentos</Label>
                      <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                        <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground mb-1">
                          Arrastra archivos aquí o haz clic para subir
                        </p>
                        <p className="text-xs text-muted-foreground">PDF, Word, Excel (máx. 10MB)</p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Seleccionar Archivos
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="equipos" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Equipos a Instalar</CardTitle>
              <CardDescription>Agrega los equipos que se utilizarán en este servicio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="tipoEquipo">Tipo</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Tipo de equipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="camara">Cámara IP</SelectItem>
                        <SelectItem value="camaraPTZ">Cámara PTZ</SelectItem>
                        <SelectItem value="nvr">NVR/DVR</SelectItem>
                        <SelectItem value="switch">Switch</SelectItem>
                        <SelectItem value="router">Router</SelectItem>
                        <SelectItem value="disco">Disco Duro</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="marca">Marca</Label>
                    <Input id="marca" placeholder="Marca del equipo" />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="modelo">Modelo</Label>
                    <Input id="modelo" placeholder="Modelo del equipo" />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="cantidad">Cantidad</Label>
                    <Input id="cantidad" type="number" min="1" defaultValue="1" />
                  </div>
                </div>

                <Button>Agregar Equipo</Button>

                <div className="border rounded-md overflow-hidden mt-4">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="p-2 text-left">Tipo</th>
                        <th className="p-2 text-left">Marca</th>
                        <th className="p-2 text-left">Modelo</th>
                        <th className="p-2 text-center">Cantidad</th>
                        <th className="p-2 text-right">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-2">Cámara IP</td>
                        <td className="p-2">Hikvision</td>
                        <td className="p-2">DS-2CD2143G0-I</td>
                        <td className="p-2 text-center">6</td>
                        <td className="p-2 text-right">
                          <Button variant="ghost" size="sm">
                            Eliminar
                          </Button>
                        </td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-2">Cámara PTZ</td>
                        <td className="p-2">Hikvision</td>
                        <td className="p-2">DS-2DE4425IW-DE</td>
                        <td className="p-2 text-center">2</td>
                        <td className="p-2 text-right">
                          <Button variant="ghost" size="sm">
                            Eliminar
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="actividades" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Actividades Planificadas</CardTitle>
              <CardDescription>Define las actividades que se realizarán durante el servicio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="descripcionActividad">Descripción de la Actividad</Label>
                    <Input id="descripcionActividad" placeholder="Ej: Instalación de cableado estructurado" />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="fechaActividad">Fecha Estimada</Label>
                    <div className="relative">
                      <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="fechaActividad" type="date" className="pl-8" />
                    </div>
                  </div>
                </div>

                <Button>Agregar Actividad</Button>

                <div className="border rounded-md overflow-hidden mt-4">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="p-2 text-left">Descripción</th>
                        <th className="p-2 text-left">Fecha</th>
                        <th className="p-2 text-right">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-2">Instalación de cableado estructurado</td>
                        <td className="p-2">2023-05-15</td>
                        <td className="p-2 text-right">
                          <Button variant="ghost" size="sm">
                            Eliminar
                          </Button>
                        </td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-2">Montaje de cámaras fijas</td>
                        <td className="p-2">2023-05-16</td>
                        <td className="p-2 text-right">
                          <Button variant="ghost" size="sm">
                            Eliminar
                          </Button>
                        </td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-2">Montaje de cámaras PTZ</td>
                        <td className="p-2">2023-05-17</td>
                        <td className="p-2 text-right">
                          <Button variant="ghost" size="sm">
                            Eliminar
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 flex justify-between">
            <Button variant="outline" onClick={() => setActiveTab("equipos")}>
              Anterior
            </Button>
            <Button>Guardar Servicio</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
