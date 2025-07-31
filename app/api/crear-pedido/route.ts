import { NextResponse } from "next/server";
import { addPedido } from "@/components/hooks/addPedidos";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate required fields
    if (!body.items || !Array.isArray(body.items) || body.items.length === 0) {
      return NextResponse.json(
        { error: "Items son requeridos" },
        { status: 400 }
      );
    }

    if (!body.nombre || !body.telefono) {
      return NextResponse.json(
        { error: "Nombre y teléfono son requeridos" },
        { status: 400 }
      );
    }
    const data = await addPedido(body);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error en crear-pedido:", error);
    const message = error instanceof Error ? error.message : "Error";
    return NextResponse.json(
      { error: message || "Error interno al crear pedido" },
      { status: 500 }
    );
  }
}