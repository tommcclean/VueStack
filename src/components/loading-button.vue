<template functional>
    <button v-bind:class="[{'no-events': props.isLoading}]">
        <img v-show="props.isLoading" src="../assets/loading-spinner.svg">
        <p>{{props.text}}</p>
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
button p {
    display: inline-block;
    margin: 0;
}
</style>