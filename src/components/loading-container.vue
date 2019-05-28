<template>
  <div>
    <div v-if="isLoading">
      <img src="../assets/loading-spinner.svg" alt="Loading spinner">
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