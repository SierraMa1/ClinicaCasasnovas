<template>
  <section class="relative bg-cover bg-center h-screen flex items-center" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="absolute inset-0 bg-white opacity-70"></div>
    <div class="container mx-auto text-center text-white relative z-10">
      <h1 class="text-5xl md:text-7xl font-bold mb-4 text-gray-700 font-chillax">Bienvenido a Nuestra Clínica Dental</h1>
      <p class="text-lg md:text-2xl mb-8 text-gray-700 font-chillax">Cuida tu sonrisa con los mejores profesionales</p>
      <a href="https://wa.me/34686401319" target="_blank" rel="noopener noreferrer" class="py-3 px-6 rounded-full bg-[#c9bba5] hover:bg-[#f3f0e9] hover:text-[#c9bba5] text-[#f3f0e9] font-bold text-xl transition duration-400">Pedir Cita</a>
    </div>
  </section>
</template>
<script>
import backgroundImage from '@/assets/images/paciente1.jpg'; 

export default {
  name: 'HeroSection',
  data() {
    return {
      backgroundImage
    };
  }
};
</script>

<style scoped>

</style>