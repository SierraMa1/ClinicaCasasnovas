<template>
  <div id="ttos" class="bg-gray-100 min-h-screen p-4">
    <h1 class="text-4xl font-bold text-center text-[#c9bba5] mb-8">
      Comparación de Tratamientos Dentales
    </h1>
    <ImageComparisonSlider
      :beforeImage="require('@/assets/images/ttos/compositeAntes1.jpeg')"
      :afterImage="require('@/assets/images/ttos/compositeDespues1.jpeg')"
    />
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
