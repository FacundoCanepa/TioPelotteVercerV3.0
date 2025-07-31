"use client";

import { Star, Quote, Phone } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "María López",
    rating: 5,
    date: "hace 2 semanas",
    comment: "¡Las pastas son increíbles! Siempre frescas y deliciosas. Los ravioles de espinaca son mi debilidad.",
    avatar: "/unnamed_180aa5475f.png",
    location: "Etcheverry"
  },
  {
    name: "Juan Pérez",
    rating: 5,
    date: "hace 1 mes",
    comment: "Excelente atención y productos de calidad. El delivery siempre puntual. Volveré pronto.",
    avatar: "/unnamed_180aa5475f.png",
    location: "Los Hornos"
  },
  {
    name: "Lucía Fernández",
    rating: 5,
    date: "hace 3 días",
    comment: "Los sorrentinos de calabaza son los mejores que he probado. Súper recomendable.",
    avatar: "/unnamed_180aa5475f.png",
    location: "Abasto"
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#F5DCC4] to-[#FBE6D4] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-8xl">🍝</div>
        <div className="absolute bottom-10 right-10 text-8xl">🍝</div>
        <div className="absolute top-1/2 left-1/4 text-6xl">🧀</div>
        <div className="absolute top-1/3 right-1/4 text-6xl">🍅</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-garamond italic text-[#8B4513] mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            La satisfacción de nuestras familias es nuestro mayor orgullo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#E6D2B5] hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-4">
                <Quote className="w-8 h-8 text-[#FFD966]" />
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={20} fill="#FFD966" stroke="#FFD966" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-stone-700 text-center italic mb-6 leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-3">
                <Image
                  src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${testimonial.avatar}`}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#FFD966]"
                />
                <div className="text-center">
                  <p className="font-semibold text-[#8B4513]">{testimonial.name}</p>
                  <p className="text-sm text-stone-500">{testimonial.location}</p>
                </div>
              </div>

              <div className="text-center mt-2">
                <span className="text-xs text-stone-400">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-[#8B4513] font-garamond italic mb-4">
            ¿Querés ser parte de nuestra familia de clientes satisfechos?
          </p>
          <a
            href="https://wa.me/5492213086600?text=Hola%20Tío%20Pelotte%2C%20quiero%20hacer%20un%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Hacé tu Primer Pedido
          </a>
        </div>
      </div>
    </section>
  );
}