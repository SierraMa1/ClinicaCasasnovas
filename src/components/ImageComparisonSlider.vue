<template>
    <div class="relative w-full max-w-2xl mx-auto mt-8">
      <div class="relative overflow-hidden h-full">
        <img :src="afterImage" alt="After Image" class="w-full object-cover" />
        <div
          class="absolute inset-0 overflow-hidden"
          :style="{ width: sliderPosition + '%' }"
        >
          <img :src="beforeImage" alt="Before Image" class="w-full object-cover" />
        </div>
        <div
           class="absolute inset-y-0 left-0 z-10 flex items-center cursor-pointer"
        :style="{ left: sliderPosition + '%' }"
          @mousedown="startDragging"
          @touchstart="startDragging"
        >
          <div class="w-2 h-full bg-white opacity-50"></div>
          <div class="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageComparisonSlider',
    props: {
      beforeImage: {
        type: String,
        required: true,
      },
      afterImage: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        sliderPosition: 50, // Slider position percentage
        dragging: false,
      };
    },
    methods: {
      startDragging(event) {
        console.log(event)
        this.dragging = true;
        document.addEventListener('mousemove', this.onDrag);
        document.addEventListener('mouseup', this.stopDragging);
        document.addEventListener('touchmove', this.onDrag);
        document.addEventListener('touchend', this.stopDragging);
      },
      onDrag(event) {
        if (!this.dragging) return;
        const container = this.$el.querySelector('.relative');
        const rect = container.getBoundingClientRect();
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
        const newSliderPosition =
          ((clientX - rect.left) / rect.width) * 100;
        this.sliderPosition = Math.min(100, Math.max(0, newSliderPosition));
      },
      stopDragging() {
        this.dragging = false;
        document.removeEventListener('mousemove', this.onDrag);
        document.removeEventListener('mouseup', this.stopDragging);
        document.removeEventListener('touchmove', this.onDrag);
        document.removeEventListener('touchend', this.stopDragging);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Aquí puedes agregar estilos adicionales si es necesario */
  </style>