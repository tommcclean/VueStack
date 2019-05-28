<template functional>
  <div>
    <div v-if="props.isLoading" class="text-center">
      <img src="~@/assets/loading-spinner.gif">
    </div>
    <slot v-else/>
  </div>
</template>

<script>
export default {
  name: "loading-container",
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  }
};
</script>