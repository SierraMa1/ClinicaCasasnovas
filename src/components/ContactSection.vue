<template>
    <section id="contact" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl text-[#c9bba5] font-bold text-center mb-10 font-switzer">Contáctanos</h2>
        <div class="flex flex-col md:flex-row md:justify-between items-center">
          <!-- Formulario de Contacto -->
          <div class="w-full md:w-1/2 p-4">
            <form @submit.prevent="submitForm" class="bg-gray-100 p-6 rounded-lg shadow-lg">
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2 font-chillax" for="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  v-model="contactForm.name"
                  placeholder="Tu nombre"
                  class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2 font-chillax" for="email">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  v-model="contactForm.email"
                  placeholder="Tu correo electrónico"
                  class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-md font-bold mb-2 font-chillax" for="message">Mensaje</label>
                <textarea
                  id="message"
                  v-model="contactForm.message"
                  placeholder="Escribe tu mensaje aquí"
                  class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full font-bold py-2 px-4 rounded-lg bg-[#c9bba5] hover:bg-[#f3f0e9]  hover:text-[#c9bba5] text-[#f3f0e9] transition duration-300"
              >
                Enviar
              </button>
            </form>
          </div>
  
          <!-- Mapa de Ubicación -->
          <div class="w-full h-64 md:h-96 p-4">
            <div class="w-full h-64 md:h-full rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3209.5048242505297!2d-4.3138526!3d36.7152209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd725b1a6ac78fa1:0xa466f5560bf54154!2sAv.+de+M%C3%A1laga,+100,+29720+La+Cala+del+Moral,+M%C3%A1laga!5e0!3m2!1ses!2ses!4v1691095988749!5m2!1ses!2ses
"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ContactSection',
    data() {
      return {
        contactForm: {
          name: '',
          email: '',
          message: '',
        },
      };
    },
    methods: {
      submitForm() {
        // Aquí puedes manejar el envío del formulario
        alert(`Mensaje enviado por: ${this.contactForm.name}`);
        // Reinicia el formulario
        this.contactForm.name = '';
        this.contactForm.email = '';
        this.contactForm.message = '';
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos adicionales para la sección de contacto */
  </style>
  