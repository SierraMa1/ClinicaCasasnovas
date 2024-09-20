<template>
    <button @click="navigateNext" class="flex items-center space-x-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
      <!-- Ícono de flecha -->
      <span>Next</span>
      <ArrowRightIcon class="h-5 w-5"/>
    </button>
  </template>
  
  <script setup>
  import { ArrowRightIcon } from '@heroicons/vue/24/solid'; // Importa el ícono de flecha desde Heroicons
  
  // Función para manejar la navegación
  const navigateNext = () => {
    // Aquí puedes agregar la lógica para navegar a la siguiente página o sección
    console.log('Navegando a la siguiente página...');
  };
  </script>
  
  <style scoped>
  /* Agrega estilos personalizados si es necesario */
  </style>
  