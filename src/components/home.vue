<template>
    <div >
      <Header />
      <section class="relative">
        <img src="@/assets/clinic-image.jpg" alt="Clinica Casanovas" class="w-full h-auto">
        <div class="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 class="text-4xl font-bold text-white">Clinica Casanovas</h1>
          <p class="text-xl text-white mt-2">Odontología estética y restauradora avanzada</p>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import Header from './Header.vue';
  
  export default {
    components: {
      Header,
    },
  }
  </script>
  
  <style scoped>
  </style>