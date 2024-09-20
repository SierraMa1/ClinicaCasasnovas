<template>
    <div class="fixed bottom-4 right-4 z-50">
      <button
        class="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-full shadow-lg transition transform hover:scale-110"
        @click="openWhatsApp"
      >
        <img
          src="@/assets/icons/whatsapp.png"
          alt="WhatsApp"
          class="w-6 h-6 mr-2"
        />
        <span>Pide Cita</span>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      openWhatsApp() {
        const phoneNumber = '+34686401319'; //
        const message = '¡Hola! Me gustaría pedir una cita.'; // Mensaje predeterminado
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          message
        )}`;
        window.open(url, '_blank');
      },
    },
  };
  </script>