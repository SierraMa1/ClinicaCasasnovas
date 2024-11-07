<template>
  <section id="services" class="py-44 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl text-[#c9bba5] font-bold text-center mb-10">Tratamientos</h2>
      <div class="relative">
        <div class="grid grid-cols-1 gap-8">
          <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold mb-4 text-center">{{ treatments[currentIndex].title }}</h3>
            <h2 v-if="treatments[currentIndex].subtitle" class="text-lg font-semibold mb-4 text-center">
              {{ treatments[currentIndex].subtitle }}
            </h2>
            <p class="text-gray-700" v-html="treatments[currentIndex].description"></p>
          </div>
        </div>
        <button @click="nextTreatment" class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#c9bba5] text-white p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
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
     
        
      ]
    };
  },
  methods: {
    nextTreatment() {
      this.currentIndex = (this.currentIndex + 1) % this.treatments.length;
    }
  }
};
</script>

<style scoped>

</style>