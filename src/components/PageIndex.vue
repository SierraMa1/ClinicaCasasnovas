<script>
import { ref, onMounted, onUnmounted } from 'vue';
import backgroundImage from '@/assets/images/clinica.jpg';

export default {
  name: 'PaginaInicial',
  setup() {
    const isMenuOpen = ref(false);
    const isDropdownOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };

    const closeDropdown = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        isDropdownOpen.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener('click', closeDropdown);
    });

    onUnmounted(() => {
      document.removeEventListener('click', closeDropdown);
    });

    return {
      backgroundImage,
      isMenuOpen,
      isDropdownOpen,
      toggleMenu,
      toggleDropdown,
    };
  },
};
</script>

<template>
  <header class="bg-gradient-to-b from-[#979499] to-current py-4 md:py-8">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center">
        <button @click="toggleMenu" class="lg:hidden text-[#c9bba5]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <nav class="hidden lg:flex space-x-4 text-xl font-chillax">
          <a href="#sobrenosotros" class="text-[#c9bba5] font-semibold hover:underline hover:text-[#f3f0e9]">Sobre nosotros</a>
          <a href="#clinica" class="text-[#c9bba5] font-semibold hover:underline hover:text-[#f3f0e9]">La clínica</a>
          <a href="#nuestroequipo" class="text-[#c9bba5] font-semibold hover:underline hover:text-[#f3f0e9]">Nuestro Equipo</a>
          <a href="#services" class="text-[#c9bba5] font-semibold hover:underline hover:text-[#f3f0e9]">Tratamientos</a>
          <div class="relative dropdown-container hidden lg:block xl:hidden">
            <button @click="toggleDropdown" class="text-[#c9bba5] font-semibold hover:underline hover:text-[#f3f0e9]">
              Más...
            </button>
            <div v-if="isDropdownOpen" class="absolute top-full left-0 bg-[#979499] rounded-md shadow-lg py-2 mt-1 z-10">
              <a href="#ttos" class="block px-4 py-2 text-[#c9bba5] hover:bg-[#f3f0e9] hover:text-[#979499]">Casos clínicos</a>
              <a href="#contact" class="block px-4 py-2 text-[#c9bba5] hover:bg-[#f3f0e9] hover:text-[#979499]">Donde estamos</a>
              <a href="#testimonios" class="block px-4 py-2 text-[#c9bba5] hover:bg-[#f3f0e9] hover:text-[#979499]">Testimonios</a>
            </div>
          </div>
          <div class="hidden xl:flex space-x-4 xl:space-x-6">
            <a href="#ttos" class="text-[#c9bba5] font-semibold hover:underline hover:text-[#f3f0e9]">Casos clínicos</a>
            <a href="#contact" class="text-[#c9bba5] font-semibold hover:underline hover:text-[#f3f0e9]">Donde estamos</a>
            <a href="#testimonios" class="text-[#c9bba5] font-semibold hover:underline hover:text-[#f3f0e9]">Testimonios</a>
          </div>
        </nav>
        <div class="flex items-center space-x-4">
          <a href="https://www.instagram.com/dra.kriziacasasnovas/?hl=es" target="_blank" rel="noopener noreferrer" class="text-md font-bold hover:underline flex items-center">
            <img src="@/assets/icons/instagram.jpg" alt="Instagram" class="w-8 h-8">
          </a>
          <a href="https://wa.me/34686401319" target="_blank" rel="noopener noreferrer" class="py-2 px-4 lg:py-3 lg:px-6 rounded-full bg-[#c9bba5] hover:bg-[#f3f0e9] hover:text-[#c9bba5] text-[#f3f0e9] font-bold text-sm md:text-lg lg:text-xl transition duration-300">Pedir Cita</a>
        </div>
      </div>
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-350"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="isMenuOpen" class="lg:hidden mt-4 px-4">
        <nav class="flex flex-col space-y-2 text-xl font-chillax">
          <a href="#sobrenosotros" class="text-[#c9bba5] font-semibold hover:underline hover:text-[#f3f0e9]">Sobre nosotros</a>
          <a href="#clinica" class="text-[#c9bba5] font-semibold hover:underline hover:text-[#f3f0e9]">La clínica</a>
          <a href="#nuestroequipo" class="text-[#c9bba5] font-semibold hover:underline hover:text-[#f3f0e9]">Nuestro Equipo</a>
          <a href="#services" class="text-[#c9bba5] font-semibold hover:underline hover:text-[#f3f0e9]">Tratamientos</a>
          <a href="#ttos" class="text-[#c9bba5] font-semibold hover:underline hover:text-[#f3f0e9]">Casos clínicos</a>
          <a href="#contact" class="text-[#c9bba5] font-semibold hover:underline hover:text-[#f3f0e9]">Donde estamos</a>
          <a href="#testimonios" class="text-[#c9bba5] font-semibold hover:underline hover:text-[#f3f0e9]">Testimonios</a>
        </nav>
      </div>
    </transition>
  </header>
  <main class="relative h-screen bg-cover bg-center px-24" :style="{ backgroundImage: `url(${backgroundImage})`,backgroundSize: 'cover', backgroundPosition: 'center top', }">
    <div class="absolute inset-0 bg-[#b4acab] bg-opacity-25 flex flex-col items-center justify-center">
    </div>
  </main>
</template>

<style scoped>
@media (min-width: 1024px) and (max-width: 1095px) {
  .mid-screen\:block {
    display: block;
  }
  .mid-screen\:hidden {
    display: none;
  }
}

@media (max-width: 1023px) {
  .lg\:hidden {
    display: block;
  }
  .lg\:flex {
    display: none;
  }
}

@media (min-width: 1096px) {
  .lg\:flex {
    display: flex;
  }
  .mid-screen\:block {
    display: none;
  }
}

@media (min-width: 1280px) {
  .xl\:space-x-6 {
    margin-left: 1.5rem; /* 24px */
    margin-right: 1.5rem; /* 24px */
  }
}
</style>