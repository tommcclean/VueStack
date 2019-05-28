<template>
    <overlay v-if="show" position="fixed">
        <div class="app-panel" v-bind:class="additionalClasses">
            <slot v-on:close="$emit('close')"></slot>
        </div>
    </overlay>
</template>

<script>
export default {
    name: "app-panel",
    props: {
        show: {
            type: Boolean,
            default: false
        },
        enterFrom: {
            type: String,
            default: "left"
        }
    },
    computed: {
        additionalClasses() {
            return this.enterFrom === "left"
                ? "left animated slideInLeft"
                : "right animated slideInRight";
        }
    }
};
</script>

<style scoped>
.app-panel {
    position: fixed;
    top: 0;
    bottom: 0;
    background-color: white;
    width: 350px;
    padding: 20px;
}
.app-panel.left {
    left: 0;
}
.app-panel.right {
    right: 0;
}
@media (max-width: 600px) {
    .app-panel {
        width: 100%;
    }
}
</style>