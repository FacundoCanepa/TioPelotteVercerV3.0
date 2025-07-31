"use client";

import { useCartStore } from "@/store/cart-store";
import { useUserStore } from "@/store/user-store";
import { zonas } from "@/app/(routes)/ubicacion/components/zonas";
import type { ItemType } from "@/types/item";

interface Props {
  total: number;
}

export default function MercadoPagoButton({ total }: Props) {
  const tipoPago = useCartStore((state) => state.paymentInfo.method);

  const handleClick = async () => {
    try {
      const cartStore = useCartStore.getState();
      const userId = useUserStore.getState().user?.id;

      const items: ItemType[] = cartStore.items.map((item) => ({
        title: `${item.product.productName} · ${item.quantity} ${item.product.unidadMedida}`,
        quantity: 1,
        unit_price: Math.round(item.quantity * item.product.price),
        productName: item.product.productName,
      }));


      if (cartStore.deliveryInfo.type === "delivery" && cartStore.deliveryInfo.zone) {
        const zonaSeleccionada = zonas.find((z) => z.nombre === cartStore.deliveryInfo.zone);
        if (zonaSeleccionada) {
          const costoEnvio = parseInt(zonaSeleccionada.precio.replace(/[$.]/g, ""));
          items.push({
            title: "Envío a domicilio",
            quantity: 1 ,
            unit_price: costoEnvio,
            productName: undefined ,
          });
        }
      }

      const body = {
        items,
        tipoEntrega: cartStore.deliveryInfo.type,
        zona: cartStore.deliveryInfo.zone,
        direccion: cartStore.deliveryInfo.address,
        referencias: cartStore.deliveryInfo.notes,
        tipoPago: cartStore.paymentInfo.method,
        total: total,
        nombre: cartStore.customerInfo.name,
        telefono: cartStore.customerInfo.phone,
        userId,
      };

      const res = await fetch("/api/mercadopago", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url;
      } else {
        alert("Error al generar pago");
      }
    } catch (err) {
      console.error("Error en MercadoPago:", err);
      alert("Error al procesar el pago");
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="mt-4 bg-[#2ecc71] hover:bg-[#27ae60] text-white w-full py-2 rounded-md"
    >
      Ir a pagar
    </button>
  );
}
