"use client";

import { useRouter } from "next/navigation";
import { ChevronRight, ShoppingBag, MapPin, Clock } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FBE6D4] via-[#F5DCC4] to-[#FFDBB5]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/photo_1465911817134_741b5e473a1b_732b198613.avif"
          alt="Pastas artesanales de fondo"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-island text-[#8B4513] leading-tight">
              TÍO PELOTTE
            </h1>
            <p className="text-2xl md:text-3xl font-garamond italic text-[#5A3E1B]">
              Las pastas de tu pueblo
            </p>
            <p className="text-lg md:text-xl text-stone-700 max-w-2xl mx-auto leading-relaxed">
              Pastas artesanales frescas hechas con amor desde 2008. 
              Ravioles, sorrentinos, ñoquis y más, directo a tu mesa.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => router.push("/productos")}
              className="group bg-[#8B4513] hover:bg-[#6B3410] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-3"
            >
              <ShoppingBag className="w-6 h-6" />
              Ver Productos
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => router.push("/ubicacion")}
              className="group bg-white/80 hover:bg-white text-[#8B4513] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg border border-[#E6D2B5] flex items-center gap-3"
            >
              <MapPin className="w-6 h-6" />
              Zonas de Entrega
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#E6D2B5] shadow-sm">
              <div className="w-12 h-12 bg-[#FFD966] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-[#8B4513]" />
              </div>
              <h3 className="font-garamond text-xl font-semibold text-[#8B4513] mb-2">
                Frescas Diariamente
              </h3>
              <p className="text-stone-600 text-sm">
                Elaboramos nuestras pastas todos los días con ingredientes frescos y de primera calidad.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#E6D2B5] shadow-sm">
              <div className="w-12 h-12 bg-[#FFD966] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-[#8B4513]" />
              </div>
              <h3 className="font-garamond text-xl font-semibold text-[#8B4513] mb-2">
                Envíos a Domicilio
              </h3>
              <p className="text-stone-600 text-sm">
                Llegamos a Abasto, Olmos, Los Hornos, Etcheverry y más zonas de La Plata.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#E6D2B5] shadow-sm">
              <div className="w-12 h-12 bg-[#FFD966] rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-6 h-6 text-[#8B4513]" />
              </div>
              <h3 className="font-garamond text-xl font-semibold text-[#8B4513] mb-2">
                Tradición Familiar
              </h3>
              <p className="text-stone-600 text-sm">
                Más de 15 años manteniendo las recetas tradicionales con el toque casero de siempre.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#FFD966]/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#8B4513]/10 rounded-full blur-2xl"></div>
    </section>
  );
}