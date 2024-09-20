<script>

import backgroundImage from '@/assets/images/clinica.jpg';

export default {
  name: 'PaginaInicial',
  data() {
    return {
      
      backgroundImage,
    };
  },
};
</script>

<template>
<header class="bg-gradient-to-b from-[#979499] to-current py-8 ">
    <div class="container mx-auto flex justify-between items-center">
      <nav class="flex space-x-4 text-2xl font-chillax">
        <a href="#sobrenosotros" class="text-2xl text-[#c9bba5] font-semibold hover:underline hover:text-[#f3f0e9] ">Sobre nosotros</a>
        <a href="#clinica" class="text-2xl text-[#c9bba5] font-semibold hover:underline hover:text-[#f3f0e9] ">La clínica</a>
        <a href="#nuestroequipo" class="text-2xl text-[#c9bba5] font-semibold hover:underline hover:text-[#f3f0e9] ">Nuestro Equipo</a>
        <a href="#services" class="text-2xl text-[#c9bba5] font-semibold hover:underline hover:text-[#f3f0e9]">Tratamientos</a>
        <a href="#ttos" class="text-2xl text-[#c9bba5]  font-semibold hover:underline hover:text-[#f3f0e9]">Casos clínicos</a>
      </nav>
      <div class="flex space-x-4 items-center">
        <a href="#contact" class="py-3 px-6 rounded-full  bg-[#c9bba5]  hover:bg-[#f3f0e9]  hover:text-[#c9bba5] text-[#f3f0e9] font-bold text-xl transition duration-300">Pedir Cita</a>
        <a href="#" class="text-lg font-bold hover:underline">
          <img src="" alt="Instagram" class="w-6 h-6">
        </a>
      </div>
    </div>
    <div class="md:hidden flex items-center">
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>


      </button>

    </div>
  </header>
  <main class="relative h-screen bg-cover bg-center" :style="{ backgroundImage: `url(${backgroundImage})`,backgroundPosition: 'center top',}">
      <div class="absolute inset-0 bg-[#b4acab] bg-opacity-25 flex flex-col items-center justify-center">
       
    </div>
      
    </main>

   
  </template>
  
 
  
  <style>
 
  </style>
  