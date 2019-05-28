<template functional>
    <div class="overlay" v-bind:class="[ props.position === 'absolute' ? 'absolute' : 'fixed']">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "overlay",
    props:{
        position: {
            type: String,
            default: "absolute"
        }
    }
};
</script>

<style scoped>
.overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1030;
    background: rgba(0, 0, 0, 0.6);
}

.overlay.fixed{
    position: fixed;
}

@media (max-width: 768px) {
    .overlay {
        padding-left: 5px;
        padding-right: 5px;
    }
}
</style>