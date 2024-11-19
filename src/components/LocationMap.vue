<template>
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-10">Nuestra Ubicación</h2>
        <div class="w-full h-64 md:h-96 rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/place/Cl%C3%ADnica+Casasnovas/@36.7153358,-4.3163539,17z/data=!3m1!4b1!4m6!3m5!1s0xd725b1a6ac78fa1:0xa466f5560bf54154!8m2!3d36.7153315!4d-4.313779!16s%2Fg%2F11s8vvy997?entry=ttu&g_ep=EgoyMDI0MTExNy4wIKXMDSoASAFQAw%3D%3D"
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

  </style>
  