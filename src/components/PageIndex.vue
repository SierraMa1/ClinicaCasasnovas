<script>
import { ref } from 'vue';
import backgroundImage from '@/assets/images/clinica.jpg';

export default {
  name: 'PaginaInicial',
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return {
      backgroundImage,
      isMenuOpen,
      toggleMenu,
    };
  },
};
</script>
<template>
  <header class="bg-gradient-to-b from-[#979499] to-current py-4 md:py-8">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center">
        <button @click="toggleMenu" class="md:hidden text-[#c9bba5]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <nav class="hidden md:flex space-x-4 text-xl lg:text-2xl font-chillax">
          <a href="#sobrenosotros" class="text-[#c9bba5] font-semibold hover:underline hover:text-[#f3f0e9]">Sobre nosotros</a>
          <a href="#clinica" class="text-[#c9bba5] font-semibold hover:underline hover:text-[#f3f0e9]">La clínica</a>
          <a href="#nuestroequipo" class="text-[#c9bba5] font-semibold hover:underline hover:text-[#f3f0e9]">Nuestro Equipo</a>
          <a href="#services" class="text-[#c9bba5] font-semibold hover:underline hover:text-[#f3f0e9]">Tratamientos</a>
          <a href="#ttos" class="text-[#c9bba5] font-semibold hover:underline hover:text-[#f3f0e9]">Casos clínicos</a>
        </nav>
        <div class="flex items-center space-x-4">
          <a href="#" class="text-lg font-bold hover:underline hidden md:block">
            <img src="" alt="Instagram" class="w-6 h-6">
          </a>
          <a href="#contact" class="py-2 px-4 lg:py-3 lg:px-6 rounded-full bg-[#c9bba5] hover:bg-[#f3f0e9] hover:text-[#c9bba5] text-[#f3f0e9] font-bold text-sm md:text-lg lg:text-xl transition duration-300">Pedir Cita</a>
        </div>
      </div>
    </div>
    <div v-if="isMenuOpen" class="md:hidden mt-4 px-4">
      <nav class="flex flex-col space-y-2 text-xl font-chillax">
        <a href="#sobrenosotros" class="text-[#c9bba5] font-semibold hover:underline hover:text-[#f3f0e9]">Sobre nosotros</a>
        <a href="#clinica" class="text-[#c9bba5] font-semibold hover:underline hover:text-[#f3f0e9]">La clínica</a>
        <a href="#nuestroequipo" class="text-[#c9bba5] font-semibold hover:underline hover:text-[#f3f0e9]">Nuestro Equipo</a>
        <a href="#services" class="text-[#c9bba5] font-semibold hover:underline hover:text-[#f3f0e9]">Tratamientos</a>
        <a href="#ttos" class="text-[#c9bba5] font-semibold hover:underline hover:text-[#f3f0e9]">Casos clínicos</a>
      </nav>
    </div>
  </header>
  <main class="relative h-screen bg-cover bg-center" :style="{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center top' }">
    <div class="absolute inset-0 bg-[#b4acab] bg-opacity-25 flex flex-col items-center justify-center">
    
    </div>
  </main>
</template>