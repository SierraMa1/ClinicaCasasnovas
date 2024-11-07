<template>
    <section class="bg-cover bg-center h-screen flex items-center" :style="{ backgroundImage: `url('path/to/dental-clinic.jpg')` }">
      <div class="container mx-auto text-center text-white">
        <h1 class="text-7xl font-bold mb-4 text-slate-600">Bienvenido a Nuestra Clínica Dental</h1>
        <p class="text-xl mb-8 text-slate-600">Cuida tu sonrisa con los mejores profesionales</p>
        <a href="#contact" class="py-3 px-6 rounded-full  bg-[#c9bba5] hover:bg-[#f3f0e9]  hover:text-[#c9bba5] text-[#f3f0e9] font-bold text-xl transition duration-300">Pedir Cita</a>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HeroSection',
  };
  </script>
  
  <style scoped>

  </style>