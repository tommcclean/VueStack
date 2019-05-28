import Vue from 'vue';
import loadingContainer from './loading-container.vue';
import loadingButton from './loading-button.vue';
import overlay from './overlay.vue';

const components = {
    loadingContainer,
    loadingButton,
    overlay
}

Object.keys(components).forEach(name => {
    Vue.component(name, components[name]);
});

export default components;