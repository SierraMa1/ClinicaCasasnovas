<template>
  <div id="ttos" class=" min-h-screen p-4">
    <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#c9bba5] mb-4 sm:mb-8 pt-40">
      Comparación de Tratamientos Dentales
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
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
<style scoped>
.cursor-ew-resize {
  cursor: ew-resize;
}

@media (max-width: 640px) {
  .cursor-ew-resize {
    cursor: pointer;
  }
}
</style>
