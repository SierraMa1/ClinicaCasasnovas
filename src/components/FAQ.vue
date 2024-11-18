<template>
   <section id="faq" class=" h-screen sm:py-20 bg-gradient-to-b from-[#979499] to-current text-white">
    <h2 class="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 font-chillax py-20">Preguntas Frecuentes</h2>
  <div class=" container mx-auto rounded-lg bg-white text-gray-800 p-4 sm:p-6 ">
    <div class="flex flex-col h-full justify-between min-h-[200px] relative">
      <div class="flex-grow flex flex-col justify-center">
        <h3 class="text-lg sm:text-xl font-bold mb-2 text-center font-chillax">{{ currentQuestion.question }}</h3>
        <p class="text-sm sm:text-base text-center font-switzer mb-4">{{ currentQuestion.answer }}</p>
        
        <div class="absolute left-0 right-0 flex justify-between px-2 sm:px-4 top-1/2 -translate-y-1/2">
          <button @click="previousQuestion" class="bg-[#c9bba5] text-white p-2 sm:p-3 rounded-full transition-all hover:bg-[#b0a08e]" :disabled="currentIndex === 0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 sm:h-6 sm:w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button @click="nextQuestion" class="bg-[#c9bba5] text-white p-2 sm:p-3 rounded-full transition-all hover:bg-[#b0a08e]" :disabled="currentIndex === questions.length - 1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 sm:h-6 sm:w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
  
  <script>
  export default {
    data() {
      return {
        currentIndex: 0,
        questions: [
        {
            question: "¿Cómo puedo pedir una cita?",
            answer: "Puedes pedir una cita a través de nuestro formulario de contacto o llamando a nuestro número de teléfono ."
          },
          {
            question: "¿Aceptan seguros dentales?",
            answer: "No aceptamos seguros dentales."
          },
          {
            question: "¿Con qué frecuencia debo visitar al dentista?",
            answer: "Se recomienda una visita al dentista cada seis meses para chequeos y limpieza dental."
          },
          {
            question: "¿Qué debería hacer si tengo dolor de muelas?",
            answer: "Si experimenta dolor de muelas, es importante programar una cita lo antes posible para determinar la causa y recibir tratamiento."
          },
          
        ]
      };
    },
    computed: {
      currentQuestion() {
        return this.questions[this.currentIndex];
      }
    },
    methods: {
      nextQuestion() {
        if (this.currentIndex < this.questions.length - 1) {
          this.currentIndex++;
        }
      },
      previousQuestion() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        }
      }
    }
  };
  </script>
  
  <style scoped>

  </style>