<template>
  <div id="ttos" class="bg-gray-100 min-h-screen p-4">
    <h1 class="text-4xl font-bold text-center text-[#c9bba5] mb-8">
      Comparación de Tratamientos Dentales
    </h1>
    <div class=" grid grid-cols-2">
      <ImageComparisonSlider
      :beforeImage="require('@/assets/images/ttos/compositeAntes1.jpeg')"
      :afterImage="require('@/assets/images/ttos/compositeDespues1.jpeg')"
    />
    <ImageComparisonSlider
      :beforeImage="require('@/assets/images/ttos/CerAntes.jpeg')"
      :afterImage="require('@/assets/images/ttos/CerDespues.jpeg')"
    />
    <ImageComparisonSlider
      :beforeImage="require('@/assets/images/ttos/ceramicaAntes.jpeg')"
      :afterImage="require('@/assets/images/ttos/ceramicaDespues.jpeg')"
    />
    <ImageComparisonSlider
      :beforeImage="require('@/assets/images/ttos/rehabAntes.jpeg')"
      :afterImage="require('@/assets/images/ttos/rehabDespues.jpeg')"
    />
    </div>
   
  </div>
</template>

<script>
import ImageComparisonSlider from './ImageComparisonSlider.vue';

export default {
  name: 'ComparacionImagen',
  components: {
    ImageComparisonSlider,
  },
};
</script>
