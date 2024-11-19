<template>
  <div class="relative w-full max-w-2xl mx-auto mt-8 px-4">
    <div class="relative overflow-hidden h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] text-white rounded-3xl">
      <img 
        :src="beforeImage" 
        alt="Before Image" 
        class="absolute w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:opacity-80"
      />
      
      <div
        class="absolute top-0 left-0 h-full overflow-hidden"
        :style="{ width: `${sliderPosition}%` }"
      >
        <img 
          :src="afterImage" 
          alt="After Image" 
          class="absolute w-full h-full object-cover"
        />
      </div>
      
      <div
        class="absolute top-0 bottom-0 w-0.5 sm:w-1 bg-white cursor-ew-resize"
        :style="{ left: `${sliderPosition}%` }"
        @mousedown="startDragging"
        @touchstart="startDragging"
      >
        <div class="absolute top-1/2 left-1/2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-white rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div class="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-[#c9bba5] rounded-full"></div>
        </div>
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
      sliderPosition: 50, 
      dragging: false,
    };
  },
  methods: {
    startDragging(event) {
      event.preventDefault();
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
      const newSliderPosition = ((clientX - rect.left) / rect.width) * 100;
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
.cursor-ew-resize {
  cursor: ew-resize;
}

@media (max-width: 640px) {
  .cursor-ew-resize {
    cursor: pointer;
  }
}
</style>