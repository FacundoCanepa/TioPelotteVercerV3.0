"use client";

import { useRouter } from "next/navigation";
import { Heart, Users, Award, Clock } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  const router = useRouter();

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#FBE6D4] to-[#F5DCC4] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border-2 border-[#8B4513] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 border-2 border-[#8B4513] rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-[#FFD966] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-garamond italic text-[#8B4513] mb-4">
            Nuestra Pasión por las Pastas
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Desde 2008, TÍO PELOTTE ha sido sinónimo de calidad, tradición y sabor auténtico. 
            Cada pasta que creamos lleva el amor y la dedicación de una familia que entiende 
            que la buena comida une corazones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/photo_1465911817134_741b5e473a1b_732b198613.avif"
                alt="Elaboración artesanal de pastas"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#FFD966] text-[#8B4513] p-4 rounded-xl shadow-lg">
              <p className="font-bold text-lg">+15 años</p>
              <p className="text-sm">de tradición</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#8B4513] rounded-full flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-garamond font-semibold text-[#8B4513] mb-2">
                    Hechas con Amor
                  </h3>
                  <p className="text-stone-600">
                    Cada pasta es elaborada a mano con ingredientes seleccionados y el cariño 
                    que solo una familia puede brindar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D16A45] rounded-full flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-garamond font-semibold text-[#8B4513] mb-2">
                    Familia y Comunidad
                  </h3>
                  <p className="text-stone-600">
                    Somos parte del barrio y trabajamos para que cada familia pueda disfrutar 
                    de pastas de calidad en su mesa.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#6B8E23] rounded-full flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-garamond font-semibold text-[#8B4513] mb-2">
                    Calidad Garantizada
                  </h3>
                  <p className="text-stone-600">
                    Utilizamos solo los mejores ingredientes y mantenemos los más altos 
                    estándares de calidad en cada proceso.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => router.push("/historia")}
              className="bg-[#8B4513] hover:bg-[#6B3410] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Conocé Nuestra Historia
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-[#E6D2B5]">
            <div className="text-3xl font-bold text-[#D16A45] mb-2">15+</div>
            <div className="text-sm text-stone-600">Años de experiencia</div>
          </div>
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-[#E6D2B5]">
            <div className="text-3xl font-bold text-[#D16A45] mb-2">50+</div>
            <div className="text-sm text-stone-600">Variedades de pasta</div>
          </div>
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-[#E6D2B5]">
            <div className="text-3xl font-bold text-[#D16A45] mb-2">1000+</div>
            <div className="text-sm text-stone-600">Familias satisfechas</div>
          </div>
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-[#E6D2B5]">
            <div className="text-3xl font-bold text-[#D16A45] mb-2">7</div>
            <div className="text-sm text-stone-600">Zonas de entrega</div>
          </div>
        </div>
      </div>
    </section>
  );
}