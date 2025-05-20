"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CalculadoraPage() {
  // Estado para la calculadora básica
  const [display, setDisplay] = useState("0")
  const [firstOperand, setFirstOperand] = useState<number | null>(null)
  const [operator, setOperator] = useState<string | null>(null)
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false)

  // Estado para la calculadora de cotizaciones
  const [items, setItems] = useState<
    Array<{ descripcion: string; cantidad: number; precio: number; subtotal: number }>
  >([])
  const [descripcion, setDescripcion] = useState("")
  const [cantidad, setCantidad] = useState(1)
  const [precio, setPrecio] = useState(0)
  const [subtotal, setSubtotal] = useState(0)
  const [total, setTotal] = useState(0)

  // Funciones para la calculadora básica
  const inputDigit = (digit: string) => {
    if (waitingForSecondOperand) {
      setDisplay(digit)
      setWaitingForSecondOperand(false)
    } else {
      setDisplay(display === "0" ? digit : display + digit)
    }
  }

  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplay("0.")
      setWaitingForSecondOperand(false)
      return
    }

    if (!display.includes(".")) {
      setDisplay(display + ".")
    }
  }

  const clearDisplay = () => {
    setDisplay("0")
    setFirstOperand(null)
    setOperator(null)
    setWaitingForSecondOperand(false)
  }

  const handleOperator = (nextOperator: string) => {
    const inputValue = Number.parseFloat(display)

    if (firstOperand === null) {
      setFirstOperand(inputValue)
    } else if (operator) {
      const result = performCalculation()
      setDisplay(String(result))
      setFirstOperand(result)
    }

    setWaitingForSecondOperand(true)
    setOperator(nextOperator)
  }

  const performCalculation = () => {
    if (firstOperand === null || operator === null) return Number.parseFloat(display)

    const secondOperand = Number.parseFloat(display)
    let result = 0

    switch (operator) {
      case "+":
        result = firstOperand + secondOperand
        break
      case "-":
        result = firstOperand - secondOperand
        break
      case "*":
        result = firstOperand * secondOperand
        break
      case "/":
        result = firstOperand / secondOperand
        break
      default:
        return secondOperand
    }

    return result
  }

  const handleEquals = () => {
    if (firstOperand === null || operator === null) return

    const result = performCalculation()
    setDisplay(String(result))
    setFirstOperand(null)
    setOperator(null)
    setWaitingForSecondOperand(false)
  }

  // Funciones para la calculadora de cotizaciones
  const calcularSubtotal = () => {
    return cantidad * precio
  }

  const agregarItem = () => {
    if (descripcion && cantidad > 0 && precio > 0) {
      const nuevoSubtotal = calcularSubtotal()
      const nuevoItem = {
        descripcion,
        cantidad,
        precio,
        subtotal: nuevoSubtotal,
      }

      const nuevosItems = [...items, nuevoItem]
      setItems(nuevosItems)

      // Calcular nuevo total
      const nuevoTotal = nuevosItems.reduce((sum, item) => sum + item.subtotal, 0)
      setTotal(nuevoTotal)

      // Limpiar campos
      setDescripcion("")
      setCantidad(1)
      setPrecio(0)
      setSubtotal(0)
    }
  }

  const eliminarItem = (index: number) => {
    const nuevosItems = [...items]
    nuevosItems.splice(index, 1)
    setItems(nuevosItems)

    // Recalcular total
    const nuevoTotal = nuevosItems.reduce((sum, item) => sum + item.subtotal, 0)
    setTotal(nuevoTotal)
  }

  // Actualizar subtotal cuando cambian cantidad o precio
  const actualizarSubtotal = () => {
    setSubtotal(calcularSubtotal())
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Calculadora</h1>

      <Tabs defaultValue="basica" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="basica">Calculadora Básica</TabsTrigger>
          <TabsTrigger value="cotizacion">Calculadora de Cotización</TabsTrigger>
        </TabsList>

        <TabsContent value="basica">
          <Card>
            <CardHeader>
              <CardTitle>Calculadora Básica</CardTitle>
              <CardDescription>Realiza cálculos matemáticos simples</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="p-4 border rounded-md text-right text-2xl font-mono">{display}</div>

                <div className="grid grid-cols-4 gap-2">
                  <Button variant="outline" onClick={() => clearDisplay()}>
                    C
                  </Button>
                  <Button variant="outline" onClick={() => setDisplay(String(Number.parseFloat(display) * -1))}>
                    +/-
                  </Button>
                  <Button variant="outline" onClick={() => handleOperator("%")}>
                    %
                  </Button>
                  <Button variant="outline" onClick={() => handleOperator("/")}>
                    /
                  </Button>

                  <Button variant="outline" onClick={() => inputDigit("7")}>
                    7
                  </Button>
                  <Button variant="outline" onClick={() => inputDigit("8")}>
                    8
                  </Button>
                  <Button variant="outline" onClick={() => inputDigit("9")}>
                    9
                  </Button>
                  <Button variant="outline" onClick={() => handleOperator("*")}>
                    *
                  </Button>

                  <Button variant="outline" onClick={() => inputDigit("4")}>
                    4
                  </Button>
                  <Button variant="outline" onClick={() => inputDigit("5")}>
                    5
                  </Button>
                  <Button variant="outline" onClick={() => inputDigit("6")}>
                    6
                  </Button>
                  <Button variant="outline" onClick={() => handleOperator("-")}>
                    -
                  </Button>

                  <Button variant="outline" onClick={() => inputDigit("1")}>
                    1
                  </Button>
                  <Button variant="outline" onClick={() => inputDigit("2")}>
                    2
                  </Button>
                  <Button variant="outline" onClick={() => inputDigit("3")}>
                    3
                  </Button>
                  <Button variant="outline" onClick={() => handleOperator("+")}>
                    +
                  </Button>

                  <Button variant="outline" className="col-span-2" onClick={() => inputDigit("0")}>
                    0
                  </Button>
                  <Button variant="outline" onClick={() => inputDecimal()}>
                    .
                  </Button>
                  <Button variant="default" onClick={() => handleEquals()}>
                    =
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cotizacion">
          <Card>
            <CardHeader>
              <CardTitle>Calculadora de Cotización</CardTitle>
              <CardDescription>Calcula el total de una cotización agregando items</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="descripcion">Descripción</Label>
                    <Input
                      id="descripcion"
                      value={descripcion}
                      onChange={(e) => setDescripcion(e.target.value)}
                      placeholder="Ej: Servicio de instalación"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="cantidad">Cantidad</Label>
                      <Input
                        id="cantidad"
                        type="number"
                        min="1"
                        value={cantidad}
                        onChange={(e) => {
                          setCantidad(Number(e.target.value))
                          actualizarSubtotal()
                        }}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="precio">Precio Unitario</Label>
                      <Input
                        id="precio"
                        type="number"
                        min="0"
                        step="0.01"
                        value={precio}
                        onChange={(e) => {
                          setPrecio(Number(e.target.value))
                          actualizarSubtotal()
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label>Subtotal</Label>
                    <div className="p-2 border rounded-md text-right">${calcularSubtotal().toFixed(2)}</div>
                  </div>

                  <Button onClick={agregarItem}>Agregar Item</Button>
                </div>

                {items.length > 0 && (
                  <div className="border rounded-md overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-muted">
                        <tr>
                          <th className="p-2 text-left">Descripción</th>
                          <th className="p-2 text-right">Cant.</th>
                          <th className="p-2 text-right">Precio</th>
                          <th className="p-2 text-right">Subtotal</th>
                          <th className="p-2"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item, index) => (
                          <tr key={index} className="border-t">
                            <td className="p-2">{item.descripcion}</td>
                            <td className="p-2 text-right">{item.cantidad}</td>
                            <td className="p-2 text-right">${item.precio.toFixed(2)}</td>
                            <td className="p-2 text-right">${item.subtotal.toFixed(2)}</td>
                            <td className="p-2 text-right">
                              <Button variant="ghost" size="sm" onClick={() => eliminarItem(index)}>
                                X
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                <div className="grid gap-2">
                  <Label>Total</Label>
                  <div className="p-4 border rounded-md text-right text-2xl font-bold">${total.toFixed(2)}</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Guardar Cotización</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
