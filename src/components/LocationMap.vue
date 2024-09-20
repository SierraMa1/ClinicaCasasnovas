<template>
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-10">Nuestra Ubicación</h2>
        <div class="w-full h-64 md:h-96 rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3209.5048242505297!2d-4.3138526!3d36.7152209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd725b1a6ac78fa1:0xa466f5560bf54154!2sAv.+de+M%C3%A1laga,+100,+29720+La+Cala+del+Moral,+M%C3%A1laga!5e0!3m2!1ses!2ses!4v1691095988749!5m2!1ses!2ses"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'LocationMap',
  };
  </script>
  
  <style scoped>
  /* Estilos adicionales si es necesario */
  </style>
  