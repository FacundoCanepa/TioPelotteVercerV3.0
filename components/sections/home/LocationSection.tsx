"use client";

import { useRouter } from "next/navigation";
import { MapPin, Clock, Phone, Truck } from "lucide-react";
import Image from "next/image";

export default function LocationSection() {
  const router = useRouter();

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-[#FFF4E3] to-[#FBE6D4] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/photo_1723473620176_8d26dc6314cf_803f81fe52.jpg"
          alt="Local de Tío Pelotte"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-garamond italic text-[#8B4513] mb-4">
                Visitanos o Pedí Delivery
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                Te esperamos en nuestra fábrica para que veas cómo hacemos nuestras pastas, 
                o pedí desde casa y te las llevamos fresquitas.
              </p>
            </div>

            {/* Location Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-[#E6D2B5]">
                <MapPin className="w-6 h-6 text-[#8B4513] mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#8B4513] mb-1">Nuestra Ubicación</h3>
                  <p className="text-stone-600">Av. 197 e/ 43 y 44, Abasto, La Plata</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-[#E6D2B5]">
                <Clock className="w-6 h-6 text-[#8B4513] mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#8B4513] mb-1">Horarios</h3>
                  <div className="text-stone-600 text-sm space-y-1">
                    <p>Martes a Sábados: 9:00 a 12:30 / 17:00 a 21:00 hs</p>
                    <p>Domingos: 8:00 a 13:00 hs</p>
                    <p>Lunes: Cerrado (menos los días 29)</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-[#E6D2B5]">
                <Truck className="w-6 h-6 text-[#8B4513] mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#8B4513] mb-1">Zonas de Entrega</h3>
                  <p className="text-stone-600 text-sm">
                    Etcheverry, Olmos, Los Hornos, Abasto, Miralagos y más
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => router.push("/ubicacion")}
                className="bg-[#8B4513] hover:bg-[#6B3410] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                Ver Mapa de Zonas
              </button>
              
              <a
                href="https://wa.me/5492213086600?text=Hola%20Tío%20Pelotte%2C%20quiero%20hacer%20un%20pedido"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Contactar por WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-4 shadow-xl">
              <iframe
                title="Ubicación Tío Pelotte"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.441186044965!2d-58.04923693284867!3d-34.99505193558028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2c2ff1e9727d7%3A0x221e187cd7ad3b9d!2sT%C3%ADo%20Pelotte%20(La%20pasta%20de%20mi%20pueblo)!5e0!3m2!1ses!2sar!4v1747165963286!5m2!1ses!2sar"
                width="100%"
                height="400"
                className="rounded-xl"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}