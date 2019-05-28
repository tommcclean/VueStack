<template>
  <div>
    <div v-if="isLoading">
      <p>Loading...</p>
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