<template functional>
    <overlay v-if="props.show" position="fixed">
        <div class="notification-panel animated slideInDown">
            <slot v-on:close="$emit('close')"></slot>
        </div>
    </overlay>
</template>

<script>
export default {
    name: "notification-panel",
    props: {
        show: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style scoped>
.notification-panel {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    min-height: 10px;
    background-color: white;
    padding: 20px;
}
</style>