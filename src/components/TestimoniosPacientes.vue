<template>
<section id="testimonios" class="py-12 sm:py-20 bg-gradient-to-b from-[#979499] to-current text-white">
  <h2 class="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 font-chillax">Testimonios de Pacientes</h2>
  <div class="container mx-auto rounded-lg bg-white text-gray-800 p-4 sm:p-6">
    <div class="flex flex-col h-full justify-between min-h-[200px] relative">
      <div class="flex-grow flex flex-col justify-center">
        <p class="italic mb-4 text-sm sm:text-base mx-4 sm:mx-20 font-switzer">{{ testimonios[currentIndex].texto }}</p>
        <p class="font-bold text-sm sm:text-base mx-4 sm:mx-20 font-switzer">- {{ testimonios[currentIndex].autor }}</p>
      </div>
      
      <button @click="prevTestimonio" class="absolute top-1/2 left-0 sm:left-2 transform -translate-y-1/2 bg-[#c9bba5] text-white p-2 rounded-full hover:bg-[#b0a08e] transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 sm:h-6 sm:w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button @click="nextTestimonio" class="absolute top-1/2 right-0 sm:right-2 transform -translate-y-1/2 bg-[#c9bba5] text-white p-2 rounded-full hover:bg-[#b0a08e] transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 sm:h-6 sm:w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'TestimoniosPacientes',
  data() {
    return {
      currentIndex: 0,
      testimonios: [
        {
          texto: "Hola buenas!! Me gustaría aportar mi experiencia con esta gran clínica dental llena de profesionales increíbles, llevaba años buscando, nunca daba con ninguna que me hiciera sentir que realmente cumplirían mis objetivos y hoy puedo decir que con un trato inmejorable cumplieron todas y cada una de mis expectativas, agradecida eternamente ánimo a todas aquellas personas que dudan donde acudir o necesitan algúna recomendación y tienen miedo de no conseguir los mejores resultados que visiten esta pedazo de clinica donde conseguirán todo lo que necesitan cumpliendo cada uno de lo deseos 100% a la perfección !!! La mejor de las mejores!!",
          autor: "Mariana Cuenca Sánchez"
        },
        {
          texto: "100% en profesionalidad y trato. Acudí a la clínica por una infección que llegó al hueso, la cual tuvieron que solucionar con una cirugía. Después de ésto me realizaron un diseño de la sonrisa y el resultado no pudo ser mejor. La calidad, tiempo en su trabajo y trato personal es excepcional. Recomiendo esta clínica sin lugar a dudas. Hoy día es complicado encontrar profesionales así.",
          autor: "Sandra Sánchez"
        },
        {
          texto: "Súper recomendable!!. Me hice tratamiento de carillas de composite y aumento de labios. Las chicas son super profesionales y perfeccionistas, a parte son un amor. Estoy muy muuuy feliz con el resultado. Mil gracias😊❤️",
          autor: "Cruco. Studio"
        },
        {
          texto: "Una amiga me recomendó este sitio, ya que quería ponerme carillas porque tenía los dientes desgastados y rotos, no pudo haberme recomendado un lugar mejor, porque no lo hay, nunca pensé que diría que me gusta mi sonrisa, pero después de vuestro gran trabajo, no puedo estar más agradecida, simplemente espectacular. Muchisimas gracias chicas, sois increíbles😊",
          autor: "Valentina Millán"
        }
      ]
    };
  },
  methods: {
    nextTestimonio() {
      this.currentIndex = (this.currentIndex + 1) % this.testimonios.length;
    },
    prevTestimonio() {
      this.currentIndex = (this.currentIndex - 1 + this.testimonios.length) % this.testimonios.length;
    }
  }
};
</script>

<style scoped>

</style>