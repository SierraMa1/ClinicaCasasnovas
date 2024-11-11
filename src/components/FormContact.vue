<!-- <template>
    <section id="contact" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-10">Contáctanos</h2>
        <div class="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
          <form @submit.prevent="submitForm">
            <div class="mb-4">
              <label class="block text-sm text-gray-700font-bold mb-2" for="name">Nombre y apellidos</label>
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
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Correo Electrónico</label>
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
              <label class="block text-gray-700 text-sm font-bold mb-2" for="message">Mensaje</label>
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
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ContactForm',
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
       
        alert(`Mensaje enviado por: ${this.contactForm.name}`);
       
        this.contactForm.name = '';
        this.contactForm.email = '';
        this.contactForm.message = '';
      },
    },
  };
  </script>
  
  <style scoped>
 
  </style> -->