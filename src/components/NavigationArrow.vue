<template>
    <button @click="navigateNext" class="flex items-center space-x-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
     
      <span>Next</span>
      <ArrowRightIcon class="h-5 w-5"/>
    </button>
  </template>
  
  <script setup>
  import { ArrowRightIcon } from '@heroicons/vue/24/solid'; 
  
 
  const navigateNext = () => {
    
    console.log('Navegando a la siguiente página...');
  };
  </script>
  
  <style scoped>

  </style>
  