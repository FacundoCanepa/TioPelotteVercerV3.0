"use client";

import { useGetCategory } from "@/components/hooks/useGetCategory";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function CategoryShowcase() {
  const { loading, result: categories, error } = useGetCategory();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const router = useRouter();

  const handleClick = (categoryId: string, slug: string) => {
    if (window.innerWidth < 1024) {
      if (expandedId === categoryId) {
        router.push(`/productos?category=${slug}`);
      } else {
        setExpandedId(categoryId);
      }
    } else {
      router.push(`/productos?category=${slug}`);
    }
  };

  if (loading) {
    return (
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-garamond italic text-[#8B4513]">
              Nuestras Especialidades
            </h2>
          </div>
          <div className="h-[400px] bg-gray-200 rounded-xl animate-pulse"></div>
        </div>
      </section>
    );
  }

  if (error || !Array.isArray(categories) || categories.length === 0) {
    return (
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-garamond italic text-[#8B4513] mb-8">
            Nuestras Especialidades
          </h2>
          <p className="text-stone-600">Estamos preparando nuevas categorías para vos.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-garamond italic text-[#8B4513] mb-4">
            ¿Qué te gustaría disfrutar hoy?
          </h2>
          <p className="text-lg text-stone-600 font-garamond italic">
            Descubrí nuestras especialidades frescas y artesanales
          </p>
        </div>

        <div className="flex overflow-x-auto rounded-2xl h-[400px] lg:h-[500px] shadow-xl">
          {categories.map((category) => {
            const isExpandedMobile = expandedId === category.id;
            const imageUrl = category.mainImage?.url || '/placeholder.jpg';

            return (
              <div
                key={category.id}
                onClick={() => handleClick(category.id, category.slug)}
                className={`
                  group relative flex-shrink-0 cursor-pointer
                  overflow-hidden transition-all duration-500 ease-in-out
                  ${isExpandedMobile ? "flex-[3]" : "flex-[1]"}
                  lg:flex-[1] lg:hover:flex-[2]
                  w-[280px] lg:w-auto
                `}
              >
                <Image
                  src={imageUrl}
                  alt={category.categoryNames}
                  fill
                  className="absolute inset-0 object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
                
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
                  <div className="bg-white/90 backdrop-blur-sm text-[#8B4513] px-6 py-3 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110">
                    <h3 className="text-xl font-garamond font-semibold mb-1">
                      {category.categoryNames}
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Explorar</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => router.push("/productos")}
            className="bg-[#8B4513] hover:bg-[#6B3410] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Ver Todos los Productos
          </button>
        </div>
      </div>
    </section>
  );
}