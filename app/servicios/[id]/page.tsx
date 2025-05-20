"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import {
  ArrowLeft,
  Calendar,
  Camera,
  CheckCircle,
  Clock,
  Download,
  Edit,
  FileText,
  MapPin,
  MessageSquare,
  MoreHorizontal,
  Printer,
  Server,
  Share2,
  Shield,
  User,
  Video,
  Wifi,
  PlusCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"

export default function ServicioDetallePage() {
  const params = useParams()
  const id = params.id
  const [activeTab, setActiveTab] = useState("detalles")

  // Normalmente cargaríamos estos datos desde la base de datos
  const servicio = {
    id: id,
    cliente: "Corporativo Azteca",
    tipo: "instalacion",
    categoria: "cctv",
    descripcion:
      "Instalación de sistema CCTV con 8 cámaras IP y configuración de monitoreo remoto. Incluye cableado estructurado y configuración de grabador NVR.",
    ubicacion: "Av. Reforma 222, CDMX",
    fechaInicio: "2023-05-15",
    fechaFin: "2023-05-20",
    prioridad: "alta",
    tecnico: "Roberto Gómez",
    estado: "en_progreso",
    progreso: 65,
    contacto: {
      nombre: "Luis Hernández",
      telefono: "55 1234 5678",
      email: "luis.hernandez@corporativoazteca.com",
    },
    equipos: [
      { id: "E001", tipo: "Cámara IP", marca: "Hikvision", modelo: "DS-2CD2143G0-I", cantidad: 6, estado: "instalado" },
      {
        id: "E002",
        tipo: "Cámara IP PTZ",
        marca: "Hikvision",
        modelo: "DS-2DE4425IW-DE",
        cantidad: 2,
        estado: "instalado",
      },
      { id: "E003", tipo: "NVR", marca: "Hikvision", modelo: "DS-7716NI-K4", cantidad: 1, estado: "configurado" },
      {
        id: "E004",
        tipo: "Disco Duro",
        marca: "Western Digital",
        modelo: "Purple 4TB",
        cantidad: 2,
        estado: "instalado",
      },
      { id: "E005", tipo: "Switch PoE", marca: "Ubiquiti", modelo: "US-8-150W", cantidad: 1, estado: "instalado" },
    ],
    actividades: [
      {
        id: "A001",
        descripcion: "Instalación de cableado estructurado",
        estado: "completado",
        fecha: "2023-05-15",
        tecnico: "Roberto Gómez",
      },
      {
        id: "A002",
        descripcion: "Montaje de cámaras fijas",
        estado: "completado",
        fecha: "2023-05-16",
        tecnico: "Roberto Gómez",
      },
      {
        id: "A003",
        descripcion: "Montaje de cámaras PTZ",
        estado: "completado",
        fecha: "2023-05-17",
        tecnico: "Roberto Gómez",
      },
      {
        id: "A004",
        descripcion: "Configuración de NVR",
        estado: "completado",
        fecha: "2023-05-18",
        tecnico: "Roberto Gómez",
      },
      {
        id: "A005",
        descripcion: "Configuración de acceso remoto",
        estado: "en_progreso",
        fecha: "2023-05-19",
        tecnico: "Roberto Gómez",
      },
      {
        id: "A006",
        descripcion: "Pruebas finales y capacitación",
        estado: "pendiente",
        fecha: "2023-05-20",
        tecnico: "Roberto Gómez",
      },
    ],
    historial: [
      {
        fecha: "2023-05-10 09:30",
        usuario: "Ana Martínez",
        accion: "Creación del servicio",
        detalles: "Servicio creado a partir de cotización #C-2023-042",
      },
      {
        fecha: "2023-05-10 14:15",
        usuario: "Carlos Ruiz",
        accion: "Asignación de técnico",
        detalles: "Se asignó a Roberto Gómez como técnico responsable",
      },
      {
        fecha: "2023-05-15 08:00",
        usuario: "Roberto Gómez",
        accion: "Inicio de servicio",
        detalles: "Llegada al sitio e inicio de trabajos",
      },
      {
        fecha: "2023-05-15 18:00",
        usuario: "Roberto Gómez",
        accion: "Actualización",
        detalles: "Completada instalación de cableado estructurado",
      },
      {
        fecha: "2023-05-16 17:30",
        usuario: "Roberto Gómez",
        accion: "Actualización",
        detalles: "Completada instalación de cámaras fijas",
      },
      {
        fecha: "2023-05-17 16:45",
        usuario: "Roberto Gómez",
        accion: "Actualización",
        detalles: "Completada instalación de cámaras PTZ",
      },
      {
        fecha: "2023-05-18 18:20",
        usuario: "Roberto Gómez",
        accion: "Actualización",
        detalles: "Completada configuración de NVR",
      },
      {
        fecha: "2023-05-19 10:30",
        usuario: "Roberto Gómez",
        accion: "Actualización",
        detalles: "Iniciada configuración de acceso remoto",
      },
    ],
    imagenes: [
      {
        id: "I001",
        url: "/placeholder.svg?height=200&width=300",
        descripcion: "Ubicación de cámara 1",
        fecha: "2023-05-16",
      },
      {
        id: "I002",
        url: "/placeholder.svg?height=200&width=300",
        descripcion: "Ubicación de cámara 2",
        fecha: "2023-05-16",
      },
      {
        id: "I003",
        url: "/placeholder.svg?height=200&width=300",
        descripcion: "Instalación de NVR",
        fecha: "2023-05-18",
      },
      {
        id: "I004",
        url: "/placeholder.svg?height=200&width=300",
        descripcion: "Cableado estructurado",
        fecha: "2023-05-15",
      },
    ],
    documentos: [
      { id: "D001", nombre: "Cotización", tipo: "pdf", fecha: "2023-05-01" },
      { id: "D002", nombre: "Orden de servicio", tipo: "pdf", fecha: "2023-05-10" },
      { id: "D003", nombre: "Diagrama de instalación", tipo: "pdf", fecha: "2023-05-12" },
      { id: "D004", nombre: "Manual de usuario", tipo: "pdf", fecha: "2023-05-18" },
    ],
  }

  const getCategoriaIcon = (categoria: string) => {
    switch (categoria) {
      case "cctv":
        return <Video className="h-5 w-5" />
      case "redes":
        return <Wifi className="h-5 w-5" />
      case "servidores":
        return <Server className="h-5 w-5" />
      case "seguridad":
        return <Shield className="h-5 w-5" />
      default:
        return null
    }
  }

  const getPrioridadColor = (prioridad: string) => {
    switch (prioridad) {
      case "urgente":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "alta":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      case "media":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "baja":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
    }
  }

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case "pendiente":
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
      case "programado":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "en_progreso":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "completado":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "cancelado":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
    }
  }

  const getActividadEstadoColor = (estado: string) => {
    switch (estado) {
      case "pendiente":
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
      case "en_progreso":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "completado":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
    }
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Link href="/servicios">
            <Button variant="outline" size="icon" className="h-8 w-8">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Servicio #{id}</h1>
          <Badge className={getEstadoColor(servicio.estado)} variant="outline">
            {servicio.estado === "en_progreso"
              ? "En progreso"
              : servicio.estado === "programado"
                ? "Programado"
                : servicio.estado.charAt(0).toUpperCase() + servicio.estado.slice(1)}
          </Badge>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <Button variant="outline">
            <Printer className="mr-2 h-4 w-4" />
            Imprimir
          </Button>
          <Button variant="outline">
            <Share2 className="mr-2 h-4 w-4" />
            Compartir
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Acciones</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Edit className="mr-2 h-4 w-4" />
                Editar servicio
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Download className="mr-2 h-4 w-4" />
                Exportar PDF
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageSquare className="mr-2 h-4 w-4" />
                Enviar notificación
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">Cancelar servicio</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{servicio.cliente}</CardTitle>
                  <CardDescription className="mt-1">
                    <div className="flex items-center gap-1">
                      {getCategoriaIcon(servicio.categoria)}
                      <span className="capitalize">
                        {servicio.tipo} de {servicio.categoria}
                      </span>
                    </div>
                  </CardDescription>
                </div>
                <Badge className={getPrioridadColor(servicio.prioridad)} variant="outline">
                  {servicio.prioridad.charAt(0).toUpperCase() + servicio.prioridad.slice(1)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Descripción</h3>
                  <p>{servicio.descripcion}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Ubicación</h3>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                      {servicio.ubicacion}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Técnico Asignado</h3>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1 text-muted-foreground" />
                      {servicio.tecnico}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Fecha de Inicio</h3>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                      {servicio.fechaInicio}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Fecha de Finalización</h3>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                      {servicio.fechaFin}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Progreso</h3>
                  <div className="space-y-2">
                    <Progress value={servicio.progreso} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Iniciado</span>
                      <span>{servicio.progreso}% Completado</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-0">
              {servicio.estado === "en_progreso" ? (
                <Button className="w-full">Marcar como Completado</Button>
              ) : servicio.estado === "pendiente" ? (
                <Button className="w-full">Iniciar Servicio</Button>
              ) : (
                <Button className="w-full" disabled>
                  Servicio Completado
                </Button>
              )}
            </CardFooter>
          </Card>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
            <TabsList className="grid grid-cols-5">
              <TabsTrigger value="detalles">Detalles</TabsTrigger>
              <TabsTrigger value="actividades">Actividades</TabsTrigger>
              <TabsTrigger value="equipos">Equipos</TabsTrigger>
              <TabsTrigger value="imagenes">Imágenes</TabsTrigger>
              <TabsTrigger value="historial">Historial</TabsTrigger>
            </TabsList>

            <TabsContent value="detalles" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Información del Servicio</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Contacto del Cliente</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <span className="text-sm text-muted-foreground">Nombre:</span>
                          <p>{servicio.contacto.nombre}</p>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Teléfono:</span>
                          <p>{servicio.contacto.telefono}</p>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Email:</span>
                          <p>{servicio.contacto.email}</p>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Documentos</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {servicio.documentos.map((doc) => (
                          <div key={doc.id} className="flex items-center p-2 border rounded-md">
                            <FileText className="h-5 w-5 mr-2 text-muted-foreground" />
                            <div className="flex-1">
                              <p className="text-sm font-medium">{doc.nombre}</p>
                              <p className="text-xs text-muted-foreground">{doc.fecha}</p>
                            </div>
                            <Button variant="ghost" size="icon">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Agregar Nota</h3>
                      <Textarea placeholder="Escribe una nota sobre este servicio..." className="min-h-[100px]" />
                      <Button className="mt-2">Guardar Nota</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="actividades" className="mt-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Actividades</CardTitle>
                  <Button size="sm">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Nueva Actividad
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {servicio.actividades.map((actividad, index) => (
                      <div key={actividad.id} className="flex items-start p-3 border rounded-md">
                        <div className="mr-3 mt-0.5">
                          {actividad.estado === "completado" ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : actividad.estado === "en_progreso" ? (
                            <Clock className="h-5 w-5 text-purple-500" />
                          ) : (
                            <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <h4 className="font-medium">{actividad.descripcion}</h4>
                            <Badge className={getActividadEstadoColor(actividad.estado)} variant="outline">
                              {actividad.estado === "en_progreso"
                                ? "En progreso"
                                : actividad.estado.charAt(0).toUpperCase() + actividad.estado.slice(1)}
                            </Badge>
                          </div>
                          <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-1 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="h-3.5 w-3.5 mr-1" />
                              {actividad.fecha}
                            </div>
                            <div className="flex items-center">
                              <User className="h-3.5 w-3.5 mr-1" />
                              {actividad.tecnico}
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="equipos" className="mt-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Equipos Instalados</CardTitle>
                  <Button size="sm">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Agregar Equipo
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-muted">
                        <tr>
                          <th className="p-2 text-left">ID</th>
                          <th className="p-2 text-left">Tipo</th>
                          <th className="p-2 text-left">Marca</th>
                          <th className="p-2 text-left">Modelo</th>
                          <th className="p-2 text-center">Cantidad</th>
                          <th className="p-2 text-left">Estado</th>
                          <th className="p-2 text-right">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {servicio.equipos.map((equipo) => (
                          <tr key={equipo.id} className="border-t">
                            <td className="p-2">{equipo.id}</td>
                            <td className="p-2">{equipo.tipo}</td>
                            <td className="p-2">{equipo.marca}</td>
                            <td className="p-2">{equipo.modelo}</td>
                            <td className="p-2 text-center">{equipo.cantidad}</td>
                            <td className="p-2">
                              <Badge variant="outline" className="capitalize">
                                {equipo.estado}
                              </Badge>
                            </td>
                            <td className="p-2 text-right">
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="imagenes" className="mt-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Imágenes</CardTitle>
                  <Button size="sm">
                    <Camera className="mr-2 h-4 w-4" />
                    Subir Imagen
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {servicio.imagenes.map((imagen) => (
                      <div key={imagen.id} className="border rounded-md overflow-hidden">
                        <img
                          src={imagen.url || "/placeholder.svg"}
                          alt={imagen.descripcion}
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-2">
                          <p className="text-sm font-medium">{imagen.descripcion}</p>
                          <p className="text-xs text-muted-foreground">{imagen.fecha}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="historial" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Historial de Actividad</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {servicio.historial.map((item, index) => (
                      <div key={index} className="flex">
                        <div className="mr-4 relative">
                          <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                          {index < servicio.historial.length - 1 && (
                            <div className="absolute top-3 bottom-0 left-[3px] w-[1px] bg-border" />
                          )}
                        </div>
                        <div className="pb-4">
                          <div className="flex items-center gap-2">
                            <p className="font-medium">{item.accion}</p>
                            <span className="text-xs text-muted-foreground">{item.fecha}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{item.detalles}</p>
                          <div className="flex items-center mt-1 text-xs text-muted-foreground">
                            <User className="h-3 w-3 mr-1" />
                            {item.usuario}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Información del Cliente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>{servicio.cliente.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{servicio.cliente}</p>
                  <p className="text-sm text-muted-foreground">Cliente desde 2022</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Contacto</p>
                  <p className="font-medium">{servicio.contacto.nombre}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono</p>
                  <p className="font-medium">{servicio.contacto.telefono}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{servicio.contacto.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Dirección</p>
                  <p className="font-medium">{servicio.ubicacion}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Ver Perfil Completo
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Servicios Relacionados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 border rounded-md">
                  <div>
                    <p className="font-medium">Mantenimiento CCTV</p>
                    <p className="text-xs text-muted-foreground">Completado - 10/01/2023</p>
                  </div>
                  <Badge variant="outline">Completado</Badge>
                </div>
                <div className="flex items-center justify-between p-2 border rounded-md">
                  <div>
                    <p className="font-medium">Instalación Control Acceso</p>
                    <p className="text-xs text-muted-foreground">Completado - 15/11/2022</p>
                  </div>
                  <Badge variant="outline">Completado</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Documentos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {servicio.documentos.map((doc) => (
                  <div key={doc.id} className="flex items-center p-2 border rounded-md">
                    <FileText className="h-5 w-5 mr-2 text-muted-foreground" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{doc.nombre}</p>
                      <p className="text-xs text-muted-foreground">{doc.fecha}</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                <PlusCircle className="mr-2 h-4 w-4" />
                Agregar Documento
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
