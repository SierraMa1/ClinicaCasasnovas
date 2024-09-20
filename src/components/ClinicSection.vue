<template>
    <div id="clinica" class="container mx-auto mt-8">
      <h2 class="text-4xl font-bold text-center mb-6 text-[#c9bba5] ">La Clínica</h2>
      <p class="text-lg text-gray-700 mb-6 text-center">
        En Clínica Casasnovas, contamos con las mejores instalaciones y la tecnología más innovadora para cuidar de tu sonrisa.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 bg-gradient-to-b from-[#979499]">
        <img
          v-for="(photo, index) in photos"
          :key="index"
          :src="photo.src"
          :alt="photo.alt"
          class="w-full h-96 object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        photos: [
        { src: require('@/assets/images/prueba.jpg'), alt: 'Interior de la clínica' },
        { src: require('@/assets/images/recepcion.jpg'), alt: 'Recepción' },
          { src: require('@/assets/images/salaespera.jpg'), alt: 'Sala de espera' },
          { src: require('@/assets/images/equipo.jpg'), alt: 'Equipo dental' },
    
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Aquí puedes agregar estilos específicos para el componente si es necesario */
  </style>