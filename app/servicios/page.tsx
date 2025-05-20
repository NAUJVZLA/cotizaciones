import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Filter, MapPin, PlusCircle, Search, Server, Shield, Video, Wifi } from "lucide-react"

export default function ServiciosPage() {
  // Aquí normalmente cargaríamos los servicios desde la base de datos
  const serviciosPendientes = [
    {
      id: "1",
      cliente: "Corporativo Bello",
      tipo: "instalacion",
      categoria: "cctv",
      descripcion: "Instalación de sistema CCTV con 8 cámaras IP",
      ubicacion: "Av. Reforma 222, Buenos aires",
      fechaInicio: "2023-05-15",
      fechaFin: "2023-05-20",
      prioridad: "alta",
      tecnico: "Roberto Gómez",
      estado: "programado",
    },
    {
      id: "2",
      cliente: "Hotel Playa Azul",
      tipo: "mantenimiento",
      categoria: "redes",
      descripcion: "Mantenimiento de red WiFi y configuración de VLANs",
      ubicacion: "Blvd. Costero 1500, Copacabana",
      fechaInicio: "2023-05-18",
      fechaFin: "2023-05-19",
      prioridad: "media",
      tecnico: "Laura Sánchez",
      estado: "en_progreso",
    },
    {
      id: "3",
      cliente: "Banco Nacional",
      tipo: "reparacion",
      categoria: "cctv",
      descripcion: "Reparación de DVR y reemplazo de 2 cámaras dañadas",
      ubicacion: "Calle poblado 45, Sabaneta",
      fechaInicio: "2023-05-22",
      fechaFin: "2023-05-22",
      prioridad: "urgente",
      tecnico: "Pendiente asignar",
      estado: "pendiente",
    },
    {
      id: "4",
      cliente: "Oficinas Centrales TechCorp",
      tipo: "instalacion",
      categoria: "redes",
      descripcion: "Instalación de sistema de control de acceso con 5 lectores biométricos",
      ubicacion: "Av. Insurgentes Sur 800, Envigado",
      fechaInicio: "2023-05-25",
      fechaFin: "2023-05-27",
      prioridad: "alta",
      tecnico: "Carlos Mendoza",
      estado: "programado",
    },
  ]

  const serviciosCompletados = [
    {
      id: "5",
      cliente: "Supermercados del Norte",
      tipo: "instalacion",
      categoria: "cctv",
      descripcion: "Instalación de sistema CCTV con 12 cámaras y monitoreo remoto",
      ubicacion: "Av. Universidad 1200, medellin",
      fechaInicio: "2023-05-01",
      fechaFin: "2023-05-05",
      prioridad: "alta",
      tecnico: "Roberto Gómez",
      estado: "completado",
      calificacion: 5,
    },
    {
      id: "6",
      cliente: "Clínica Médica Salud",
      tipo: "mantenimiento",
      categoria: "redes",
      descripcion: "Mantenimiento preventivo de servidores y actualización de firewall",
      ubicacion: "Calle Hidalgo 78, Medellin",
      fechaInicio: "2023-04-28",
      fechaFin: "2023-04-30",
      prioridad: "media",
      tecnico: "Laura Sánchez",
      estado: "completado",
      calificacion: 4,
    },
    {
      id: "7",
      cliente: "Residencial Los Pinos",
      tipo: "instalacion",
      categoria: "cctv",
      descripcion: "Instalación de sistema de videovigilancia en áreas comunes",
      ubicacion: "Calle Roble 123, robledo",
      fechaInicio: "2023-04-20",
      fechaFin: "2023-04-25",
      prioridad: "media",
      tecnico: "Carlos Mendoza",
      estado: "completado",
      calificacion: 5,
    },
  ]

  const getCategoriaIcon = (categoria: string) => {
    switch (categoria) {
      case "cctv":
        return <Video className="h-4 w-4 mr-1" />
      case "redes":
        return <Wifi className="h-4 w-4 mr-1" />
      case "servidores":
        return <Server className="h-4 w-4 mr-1" />
      case "seguridad":
        return <Shield className="h-4 w-4 mr-1" />
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

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold">Servicios</h1>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar servicios..." className="pl-8 w-full" />
          </div>
          <Button variant="outline" size="icon" className="shrink-0">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filtrar</span>
          </Button>
          <Link href="/servicios/nuevo">
            <Button className="w-full sm:w-auto">
              <PlusCircle className="mr-2 h-4 w-4" />
              Nuevo Servicio
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total de Servicios</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{serviciosPendientes.length + serviciosCompletados.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Servicios activos y completados</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pendientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {serviciosPendientes.filter((s) => s.estado === "pendiente").length}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Servicios sin asignar</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">En Progreso</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {serviciosPendientes.filter((s) => s.estado === "en_progreso").length}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Servicios en ejecución</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{serviciosCompletados.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Servicios finalizados</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Select defaultValue="todos">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Categoría" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todas las categorías</SelectItem>
            <SelectItem value="cctv">CCTV</SelectItem>
            <SelectItem value="redes">Redes</SelectItem>
            <SelectItem value="servidores">Servidores</SelectItem>
            <SelectItem value="seguridad">Seguridad</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="todos">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos los tipos</SelectItem>
            <SelectItem value="instalacion">Instalación</SelectItem>
            <SelectItem value="mantenimiento">Mantenimiento</SelectItem>
            <SelectItem value="reparacion">Reparación</SelectItem>
            <SelectItem value="consultoria">Consultoría</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="todos">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Prioridad" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todas las prioridades</SelectItem>
            <SelectItem value="urgente">Urgente</SelectItem>
            <SelectItem value="alta">Alta</SelectItem>
            <SelectItem value="media">Media</SelectItem>
            <SelectItem value="baja">Baja</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="pendientes" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pendientes">Activos</TabsTrigger>
          <TabsTrigger value="completados">Completados</TabsTrigger>
          <TabsTrigger value="historico">Historial</TabsTrigger>
        </TabsList>

        <TabsContent value="pendientes">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
            {serviciosPendientes.map((servicio) => (
              <Card key={servicio.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{servicio.cliente}</CardTitle>
                      <CardDescription className="mt-1">Servicio #{servicio.id}</CardDescription>
                    </div>
                    <Badge className={getPrioridadColor(servicio.prioridad)} variant="outline">
                      {servicio.prioridad.charAt(0).toUpperCase() + servicio.prioridad.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5">{getCategoriaIcon(servicio.categoria)}</div>
                      <div>
                        <div className="font-medium capitalize">
                          {servicio.tipo} de {servicio.categoria}
                        </div>
                        <p className="text-sm text-muted-foreground">{servicio.descripcion}</p>
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {servicio.ubicacion}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center text-sm bg-muted px-2 py-1 rounded-md">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        {servicio.fechaInicio}
                      </div>
                      <div className="flex items-center text-sm bg-muted px-2 py-1 rounded-md">
                        <Clock className="h-3.5 w-3.5 mr-1" />
                        {servicio.tecnico !== "Pendiente asignar" ? servicio.tecnico : "Sin asignar"}
                      </div>
                      <Badge className={getEstadoColor(servicio.estado)} variant="outline">
                        {servicio.estado === "en_progreso"
                          ? "En progreso"
                          : servicio.estado === "programado"
                            ? "Programado"
                            : servicio.estado.charAt(0).toUpperCase() + servicio.estado.slice(1)}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-0">
                  <Link href={`/servicios/${servicio.id}`}>
                    <Button variant="outline">Ver Detalles</Button>
                  </Link>
                  {servicio.estado !== "en_progreso" ? (
                    <Button variant="secondary">Iniciar Servicio</Button>
                  ) : (
                    <Button variant="default">Completar</Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completados">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
            {serviciosCompletados.map((servicio) => (
              <Card key={servicio.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{servicio.cliente}</CardTitle>
                      <CardDescription className="mt-1">Servicio #{servicio.id}</CardDescription>
                    </div>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${i < servicio.calificacion ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5">{getCategoriaIcon(servicio.categoria)}</div>
                      <div>
                        <div className="font-medium capitalize">
                          {servicio.tipo} de {servicio.categoria}
                        </div>
                        <p className="text-sm text-muted-foreground">{servicio.descripcion}</p>
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {servicio.ubicacion}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center text-sm bg-muted px-2 py-1 rounded-md">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        {servicio.fechaInicio} - {servicio.fechaFin}
                      </div>
                      <div className="flex items-center text-sm bg-muted px-2 py-1 rounded-md">
                        <Clock className="h-3.5 w-3.5 mr-1" />
                        {servicio.tecnico}
                      </div>
                      <Badge className={getEstadoColor(servicio.estado)} variant="outline">
                        Completado
                      </Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-0">
                  <Link href={`/servicios/${servicio.id}`} className="w-full">
                    <Button variant="outline" className="w-full">
                      Ver Detalles
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
