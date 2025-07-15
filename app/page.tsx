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
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-amber-200">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Image
                src="/images/Logo.jpeg"
                alt="Doble V Almendras Logo"
                width={40}
                height={40}
                className="rounded-full sm:w-[50px] sm:h-[50px]"
              />
              <span className="text-lg sm:text-xl font-bold text-amber-900 truncate">Doble V Almendras</span>
            </div>
            <Button 
              onClick={handleWhatsAppClick} 
              className="bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base px-3 sm:px-4 py-2"
              size="sm"
            >
              <MessageCircle className="w-4 h-4 mr-1 sm:mr-2" />
              <span className="hidden xs:inline">Contactar</span>
              <span className="xs:hidden">Chat</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-20">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-amber-900 leading-tight">
                Almendras y Aceite
                <span className="block text-orange-700">100% Natural</span>
              </h1>
              <p className="text-base sm:text-lg text-amber-800 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Descubre el poder nutritivo de nuestras almendras premium y aceite puro de almendras. Productos
                naturales, sin aditivos, para una vida más saludable.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={handleWhatsAppClick} 
                  size="lg" 
                  className="bg-amber-600 hover:bg-amber-700 text-white w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Consultar Productos
                </Button>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <Image
                src="/images/post beneficios.png"
                alt="Doble V Almendras"
                width={450}
                height={450}
                className="rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegir almendras */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-900 mb-3 sm:mb-4">¿Por qué elegir almendras?</h2>
            <p className="text-base sm:text-lg text-amber-700 max-w-2xl mx-auto px-2">
              En lugar de snacks ultraprocesados, elige la opción natural que tu cuerpo necesita
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="mb-3 sm:mb-4">
                  <Image
                    src="/images/2-eleccion.png"
                    alt="Son Naturales"
                    width={300}
                    height={300}
                    className="rounded-lg mx-auto w-full max-w-[200px] sm:max-w-[300px]"
                  />
                </div>
                <div className="flex justify-center mb-2 sm:mb-3">
                  <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-amber-900 mb-2">100% Naturales</h3>
                <p className="text-sm sm:text-base text-amber-700">Sin aditivos raros, conservantes o palabras que no puedes pronunciar</p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="mb-3 sm:mb-4">
                  <Image
                    src="/images/3-eleccion.png"
                    alt="Aportan Nutrientes"
                    width={300}
                    height={300}
                    className="rounded-lg mx-auto w-full max-w-[200px] sm:max-w-[300px]"
                  />
                </div>
                <div className="flex justify-center mb-2 sm:mb-3">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-amber-900 mb-2">Ricas en Nutrientes</h3>
                <p className="text-sm sm:text-base text-amber-700">Grasas saludables, vitamina E, magnesio, proteína vegetal y saciedad</p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1 sm:mx-auto lg:mx-0 sm:max-w-sm lg:max-w-none">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="mb-3 sm:mb-4">
                  <Image
                    src="/images/4-eleccion.png"
                    alt="No Picos de Azúcar"
                    width={300}
                    height={300}
                    className="rounded-lg mx-auto w-full max-w-[200px] sm:max-w-[300px]"
                  />
                </div>
                <div className="flex justify-center mb-2 sm:mb-3">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-amber-900 mb-2">Energía Estable</h3>
                <p className="text-sm sm:text-base text-amber-700">No generan picos de azúcar. Te mantienen con energía por más tiempo</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Usos del Aceite */}
      <section className="py-10 sm:py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <div className="mb-4 sm:mb-6">
              <Image
                src="/images/post intro.png"
                alt="Aceite de Almendras"
                width={400}
                height={400}
                className="rounded-2xl mx-auto shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-900 mb-3 sm:mb-4">Aceite de Almendras</h2>
            <p className="text-base sm:text-lg text-amber-700 max-w-2xl mx-auto px-2">
              Versátil, puro y natural. Perfecto para cuidado personal y uso culinario
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
            {/* Usos Cosméticos */}
            <Card className="border-amber-200 hover:shadow-xl transition-shadow">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 mb-2 sm:mb-0 sm:mr-3 mx-auto sm:mx-0" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-amber-900 text-center sm:text-left">Usos Cosméticos y de Belleza</h3>
                </div>
                <Image
                  src="/images/1uso-aceite.png"
                  alt="Usos Cosméticos"
                  width={500}
                  height={400}
                  className="rounded-lg mb-4 sm:mb-6 w-full"
                />
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start">
                    <span className="bg-pink-100 text-pink-800 text-xs sm:text-sm font-semibold px-2 py-1 rounded mr-2 sm:mr-3 mt-1 flex-shrink-0">
                      1
                    </span>
                    <div>
                      <h4 className="font-semibold text-amber-900 text-sm sm:text-base">Fortalecedor de pestañas y cejas</h4>
                      <p className="text-amber-700 text-xs sm:text-sm">Se aplica con un cepillito tipo rímel antes de dormir</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-pink-100 text-pink-800 text-xs sm:text-sm font-semibold px-2 py-1 rounded mr-2 sm:mr-3 mt-1 flex-shrink-0">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold text-amber-900 text-sm sm:text-base">Aceite para cutículas</h4>
                      <p className="text-amber-700 text-xs sm:text-sm">Fortalece y suaviza la piel alrededor de las uñas</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-pink-100 text-pink-800 text-xs sm:text-sm font-semibold px-2 py-1 rounded mr-2 sm:mr-3 mt-1 flex-shrink-0">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold text-amber-900 text-sm sm:text-base">Suavizante de labios</h4>
                      <p className="text-amber-700 text-xs sm:text-sm">Ideal como bálsamo nocturno</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Usos Gastronómicos */}
            <Card className="border-amber-200 hover:shadow-xl transition-shadow">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mb-2 sm:mb-0 sm:mr-3 mx-auto sm:mx-0" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-amber-900 text-center sm:text-left">Usos Gastronómicos</h3>
                </div>
                <Image
                  src="/images/3-uso-aceite.png"
                  alt="Usos Gastronómicos"
                  width={500}
                  height={400}
                  className="rounded-lg mb-4 sm:mb-6 w-full"
                />
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start">
                    <span className="bg-orange-100 text-orange-800 text-xs sm:text-sm font-semibold px-2 py-1 rounded mr-2 sm:mr-3 mt-1 flex-shrink-0">
                      1
                    </span>
                    <div>
                      <h4 className="font-semibold text-amber-900 text-sm sm:text-base">Aderezo para ensaladas</h4>
                      <p className="text-amber-700 text-xs sm:text-sm">Aporta un sabor suave y delicado</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-orange-100 text-orange-800 text-xs sm:text-sm font-semibold px-2 py-1 rounded mr-2 sm:mr-3 mt-1 flex-shrink-0">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold text-amber-900 text-sm sm:text-base">Reemplazo de manteca</h4>
                      <p className="text-amber-700 text-xs sm:text-sm">En repostería vegana o saludable</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-orange-100 text-orange-800 text-xs sm:text-sm font-semibold px-2 py-1 rounded mr-2 sm:mr-3 mt-1 flex-shrink-0">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold text-amber-900 text-sm sm:text-base">Toque final en platos dulces</h4>
                      <p className="text-amber-700 text-xs sm:text-sm">Va bien con frutas, yogures o panqueques</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-10 sm:py-16 bg-amber-900 text-white">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">¿Listo para probar nuestros productos?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-amber-100 max-w-2xl mx-auto px-2">
            Contáctanos por WhatsApp y descubre todos nuestros productos naturales. ¡Estamos aquí para ayudarte a elegir
            lo mejor para ti!
          </p>
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto max-w-sm mx-auto"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
            Escribinos por WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-100 py-6 sm:py-8">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Image
                src="/images/Logo.jpeg"
                alt="Doble V Almendras Logo"
                width={32}
                height={32}
                className="rounded-full sm:w-[40px] sm:h-[40px]"
              />
              <span className="text-base sm:text-lg font-semibold">Doble V Almendras</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xs sm:text-sm">© 2025 Doble V Almendras. Todos los derechos reservados.</p>
              <p className="text-xs sm:text-sm text-amber-300">Productos naturales para una vida saludable</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
