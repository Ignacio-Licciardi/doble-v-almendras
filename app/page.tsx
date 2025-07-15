"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Heart, Leaf, Zap, Sparkles } from "lucide-react"

export default function Home() {
  const whatsappNumber = "1234567890" // Reemplaza con número de WhatsApp
  const whatsappMessage = "¡Hola! Me interesa conocer más sobre sus productos de almendras y aceite de almendras."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/Logo.jpeg"
                alt="Doble V Almendras Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-amber-900">Doble V Almendras</span>
            </div>
            <Button onClick={handleWhatsAppClick} className="bg-green-600 hover:bg-green-700 text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              Contactar
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-amber-900 leading-tight">
                Almendras y Aceite
                <span className="block text-orange-700">100% Natural</span>
              </h1>
              <p className="text-lg text-amber-800 leading-relaxed">
                Descubre el poder nutritivo de nuestras almendras premium y aceite puro de almendras. Productos
                naturales, sin aditivos, para una vida más saludable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleWhatsAppClick} size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Consultar Productos
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/post beneficios.png"
                alt="Doble V Almendras"
                width={450}
                height={450}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegir almendras */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">¿Por qué elegir almendras?</h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              En lugar de snacks ultraprocesados, elige la opción natural que tu cuerpo necesita
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Image
                    src="/images/2-eleccion.png"
                    alt="Son Naturales"
                    width={300}
                    height={300}
                    className="rounded-lg mx-auto"
                  />
                </div>
                <div className="flex justify-center mb-3">
                  <Leaf className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">100% Naturales</h3>
                <p className="text-amber-700">Sin aditivos raros, conservantes o palabras que no puedes pronunciar</p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Image
                    src="/images/3-eleccion.png"
                    alt="Aportan Nutrientes"
                    width={300}
                    height={300}
                    className="rounded-lg mx-auto"
                  />
                </div>
                <div className="flex justify-center mb-3">
                  <Heart className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Ricas en Nutrientes</h3>
                <p className="text-amber-700">Grasas saludables, vitamina E, magnesio, proteína vegetal y saciedad</p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Image
                    src="/images/4-eleccion.png"
                    alt="No Picos de Azúcar"
                    width={300}
                    height={300}
                    className="rounded-lg mx-auto"
                  />
                </div>
                <div className="flex justify-center mb-3">
                  <Zap className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Energía Estable</h3>
                <p className="text-amber-700">No generan picos de azúcar. Te mantienen con energía por más tiempo</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Usos del Aceite */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="mb-6">
              <Image
                src="/images/post intro.png"
                alt="Aceite de Almendras"
                width={400}
                height={400}
                className="rounded-2xl mx-auto shadow-lg"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Aceite de Almendras</h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              Versátil, puro y natural. Perfecto para cuidado personal y uso culinario
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Usos Cosméticos */}
            <Card className="border-amber-200 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Sparkles className="w-8 h-8 text-pink-500 mr-3" />
                  <h3 className="text-2xl font-bold text-amber-900">Usos Cosméticos y de Belleza</h3>
                </div>
                <Image
                  src="/images/1uso-aceite.png"
                  alt="Usos Cosméticos"
                  width={500}
                  height={400}
                  className="rounded-lg mb-6"
                />
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="bg-pink-100 text-pink-800 text-sm font-semibold px-2 py-1 rounded mr-3 mt-1">
                      1
                    </span>
                    <div>
                      <h4 className="font-semibold text-amber-900">Fortalecedor de pestañas y cejas</h4>
                      <p className="text-amber-700 text-sm">Se aplica con un cepillito tipo rímel antes de dormir</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-pink-100 text-pink-800 text-sm font-semibold px-2 py-1 rounded mr-3 mt-1">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold text-amber-900">Aceite para cutículas</h4>
                      <p className="text-amber-700 text-sm">Fortalece y suaviza la piel alrededor de las uñas</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-pink-100 text-pink-800 text-sm font-semibold px-2 py-1 rounded mr-3 mt-1">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold text-amber-900">Suavizante de labios</h4>
                      <p className="text-amber-700 text-sm">Ideal como bálsamo nocturno</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Usos Gastronómicos */}
            <Card className="border-amber-200 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Heart className="w-8 h-8 text-orange-500 mr-3" />
                  <h3 className="text-2xl font-bold text-amber-900">Usos Gastronómicos</h3>
                </div>
                <Image
                  src="/images/3-uso-aceite.png"
                  alt="Usos Gastronómicos"
                  width={500}
                  height={400}
                  className="rounded-lg mb-6"
                />
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="bg-orange-100 text-orange-800 text-sm font-semibold px-2 py-1 rounded mr-3 mt-1">
                      1
                    </span>
                    <div>
                      <h4 className="font-semibold text-amber-900">Aderezo para ensaladas</h4>
                      <p className="text-amber-700 text-sm">Aporta un sabor suave y delicado</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-orange-100 text-orange-800 text-sm font-semibold px-2 py-1 rounded mr-3 mt-1">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold text-amber-900">Reemplazo de manteca</h4>
                      <p className="text-amber-700 text-sm">En repostería vegana o saludable</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-orange-100 text-orange-800 text-sm font-semibold px-2 py-1 rounded mr-3 mt-1">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold text-amber-900">Toque final en platos dulces</h4>
                      <p className="text-amber-700 text-sm">Va bien con frutas, yogures o panqueques</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para probar nuestros productos?</h2>
          <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Contáctanos por WhatsApp y descubre todos nuestros productos naturales. ¡Estamos aquí para ayudarte a elegir
            lo mejor para ti!
          </p>
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Escribinos por WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image
                src="/images/Logo.jpeg"
                alt="Doble V Almendras Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-lg font-semibold">Doble V Almendras</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm">© 2025 Doble V Almendras. Todos los derechos reservados.</p>
              <p className="text-sm text-amber-300">Productos naturales para una vida saludable</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
