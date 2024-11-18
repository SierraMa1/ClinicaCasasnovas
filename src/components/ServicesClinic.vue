<template>
  <section id="services" class="h-screen py-14 sm:py-20  bg-white">
    <h2 class=" text-[#c9bba5] text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 font-chillax py-20">Tratamientos</h2>
    <div class="container mx-auto rounded-lg bg-white text-gray-800 p-4 sm:p-6">
      <div class="flex flex-col h-full justify-between min-h-[200px] relative">
        <div class="flex-grow flex flex-col justify-center">
            <p class=" font-switzer font-bold mb-4 text-center text-xl">{{ treatments[currentIndex].title }}</p>
            <p v-if="treatments[currentIndex].subtitle" class="text-lg font-semibold mb-4 text-center ">
              {{ treatments[currentIndex].subtitle }}
            </p>
            <p class="text-gray-700 text-sm sm:text-base mx-4 sm:mx-20 font-switzer" v-html="treatments[currentIndex].description"></p>
        </div>
        <button @click="prevTreatment" class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#c9bba5] text-white p-3 rounded-full hover:bg-[#b0a08e] transition-colors duration-300 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 sm:h-6 sm:w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button @click="nextTreatment" class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#c9bba5] text-white p-2 rounded-full hover:bg-[#b0a08e] transition-colors duration-300 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 sm:h-6 sm:w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesClinic',
  data() {
    return {
      currentIndex: 0,
      treatments: [
        {
          title: "Carillas de Composite",
          subtitle: "Diseño de Sonrisa Estético",
          description: "En Clínica Casasnovas, ofrecemos carillas de composite para mejorar el aspecto de tu sonrisa. Este tratamiento consiste en colocar una fina capa de composite sobre tus dientes sin necesidad de tallarlos. Las carillas de composite corrigen imperfecciones como manchas, apiñamiento dental, diastemas, desgastes y fracturas dentales, mejorando el color y la forma de tus dientes de manera natural.<br><br>Ventajas:<br>• Tratamiento rápido y sin dolor, realizado en una sola sesión.<br>• Reversible: Puedes regresar al estado natural de tu diente si lo deseas.<br>• Sin anestesia y con resultados inmediatos.<br>• Mantenimiento sencillo: Solo requiere limpieza y pulido anual.<br>• Transforma tu sonrisa con las carillas de composite en Málaga."
        },
        {
          title: "Implantes Dentales",
          description: "En Clínica Casasnovas, ofrecemos tratamientos de implantes dentales avanzados para restaurar tu sonrisa y mejorar tu salud bucal. Los implantes dentales son una solución eficaz y duradera para reemplazar dientes perdidos, proporcionando una apariencia natural y funcionalidad completa. Nuestro equipo de expertos utiliza tecnología de vanguardia para asegurar resultados exitosos. Si buscas un implante dental en Málaga, en la Cala del Moral, contáctanos para una consulta personalizada. ¡Recupera tu sonrisa hoy mismo con los mejores profesionales!"
        },
        {
          title: "Carillas de Cerámica",
          subtitle: " Sonrisa Perfecta y Natural",
          description: "En Clínica Casasnovas, ofrecemos carillas de cerámica para transformar tu sonrisa. Las carillas de cerámica son láminas finas de porcelana que se colocan sobre los dientes para mejorar su forma, color y apariencia. Este tratamiento corrige imperfecciones como manchas, dientes desalineados, diastemas y desgastes, proporcionando una sonrisa más estética y natural.<br>Ventajas de las carillas de cerámica:<br>•Aspecto natural: La cerámica imita el aspecto del esmalte dental.<br>•Durabilidad: Las carillas de cerámica son resistentes y de larga duración.<br>•Tratamiento rápido y mínimamente invasivo: No requieren tallar el diente significativamente."
        },
        {
          title: "Blanqueamiento Dental",
          subtitle: " Sonrisa Más Blanca y Radiante",
          description: "En Clínica Casasnovas, ofrecemos blanqueamiento dental profesional para recuperar el brillo y blancura de tus dientes. Este tratamiento efectivo elimina manchas causadas por alimentos, bebidas o el envejecimiento, devolviendo a tu sonrisa su apariencia natural y saludable.<br>Ventajas del blanqueamiento dental:<br>•Seguro y eficaz: Tratamiento realizado por profesionales para garantizar tu salud dental.<br>•Mejora la estética: Dientes más blancos y radiantes.."
        },
        {
          title: "Limpieza Dental",
          description: "En Clínica Casasnovas, ofrecemos una limpieza dental profesional para mantener tu salud bucal en su mejor estado. Este tratamiento consiste en eliminar el sarro, la placa bacteriana y las manchas superficiales de los dientes, ayudando a prevenir enfermedades como la gingivitis y periodontitis. Además, la limpieza dental mejora la estética de tu sonrisa, dejándola más blanca y saludable.<br>Beneficios de la limpieza dental:<br>•Prevención de caries y enfermedades de las encías.<br>•Mejora la apariencia de los dientes al eliminar manchas.<br>•Resultados inmediatos y sensación de frescura."
        },
      ]
    };
  },
  methods: {
    nextTreatment() {
      this.currentIndex = (this.currentIndex + 1) % this.treatments.length;
    },
    prevTreatment() {
      this.currentIndex = (this.currentIndex - 1 + this.treatments.length) % this.treatments.length;
    }
  }
};
</script>

<style scoped>

</style>