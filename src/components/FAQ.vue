<template>
  <div class="relative">
    <div class="mb-8 rounded-lg shadow-2xl h-40">
      <h3 class="text-xl font-bold mb-2 text-center font-chillax">{{ currentQuestion.question }}</h3>
      <p class="text-center font-switzer">{{ currentQuestion.answer }}</p>
    
    <div class="flex justify-between">
      <button @click="previousQuestion" class="bg-[#c9bba5] text-white p-2 rounded-full" :disabled="currentIndex === 0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button @click="nextQuestion" class="bg-[#c9bba5] text-white p-2 rounded-full" :disabled="currentIndex === questions.length - 1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
  </div>
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