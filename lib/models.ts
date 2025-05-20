// Definición de los modelos de datos para nuestro sistema

// Modelo de Cliente
export interface Cliente {
  id: string
  nombre: string
  email: string
  telefono: string
  direccion: string
  fechaRegistro: Date
  contacto?: ContactoCliente
}

// Modelo de Contacto de Cliente
export interface ContactoCliente {
  nombre: string
  cargo: string
  telefono: string
  email: string
}

// Modelo de Cotización
export interface Cotizacion {
  id: string
  clienteId: string
  fecha: Date
  items: ItemCotizacion[]
  subtotal: number
  impuestos: number
  total: number
  estado: "pendiente" | "enviada" | "aceptada" | "rechazada"
  notas: string
  imagenes: string[] // URLs de las imágenes subidas
}

// Modelo de Item de Cotización
export interface ItemCotizacion {
  id: string
  descripcion: string
  cantidad: number
  precioUnitario: number
  subtotal: number
}

// Modelo de Servicio
export interface Servicio {
  id: string
  cotizacionId?: string
  clienteId: string
  tipo: "instalacion" | "mantenimiento" | "reparacion" | "consultoria"
  categoria: "cctv" | "redes" | "servidores" | "seguridad"
  descripcion: string
  ubicacion: string
  fechaInicio: Date
  fechaFinEstimada: Date
  fechaFinReal?: Date
  prioridad: "baja" | "media" | "alta" | "urgente"
  estado: "pendiente" | "programado" | "en_progreso" | "completado" | "cancelado"
  tecnicoId?: string
  progreso: number
  notas: string
  imagenes: ImagenServicio[]
  equipos: EquipoServicio[]
  actividades: ActividadServicio[]
  documentos: DocumentoServicio[]
  historial: HistorialServicio[]
  contacto: ContactoCliente
}

// Modelo de Imagen de Servicio
export interface ImagenServicio {
  id: string
  servicioId: string
  url: string
  descripcion: string
  fecha: Date
}

// Modelo de Equipo de Servicio
export interface EquipoServicio {
  id: string
  servicioId: string
  tipo: string
  marca: string
  modelo: string
  cantidad: number
  numeroSerie?: string
  estado: "pendiente" | "instalado" | "configurado" | "en_prueba" | "operativo"
}

// Modelo de Actividad de Servicio
export interface ActividadServicio {
  id: string
  servicioId: string
  descripcion: string
  fechaProgramada: Date
  fechaRealizada?: Date
  estado: "pendiente" | "en_progreso" | "completado" | "cancelado"
  tecnicoId?: string
  notas?: string
}

// Modelo de Documento de Servicio
export interface DocumentoServicio {
  id: string
  servicioId: string
  nombre: string
  url: string
  tipo: string
  fecha: Date
}

// Modelo de Historial de Servicio
export interface HistorialServicio {
  id: string
  servicioId: string
  fecha: Date
  usuarioId: string
  accion: string
  detalles: string
}

// Modelo de Usuario del Sistema
export interface Usuario {
  id: string
  nombre: string
  email: string
  rol: "admin" | "tecnico" | "vendedor" | "cliente"
  fechaCreacion: Date
}

// Modelo de Técnico
export interface Tecnico extends Usuario {
  especialidades: string[]
  disponible: boolean
  serviciosAsignados: string[]
}
