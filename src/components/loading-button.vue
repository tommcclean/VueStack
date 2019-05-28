<template>
    <button class="btn btn-primary" v-bind:class="[{'no-events': isLoading}]">
        <img v-show="isLoading" src="../assets/loading-spinner.svg" alt="Loading spinner">
        <p>{{text}}</p>
    </button>
</template>

<script>
export default {
    name: "loading-button",
    props: {
        text: {
            type: String,
            default: "Submit"
        },
        isLoading: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style scoped>
button img {
    width: 20px;
    height: 20px;
}
button p{
    display: inline-block;
    margin: 0;
}
</style>