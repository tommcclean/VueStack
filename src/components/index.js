import Vue from 'vue';
import loadingContainer from './loading-container.vue';
import loadingButton from './loading-button.vue';
import overlay from './overlay.vue';
import appPanel from './app-panel.vue';
import notificationPanel from './notification-panel';

// Load some CSS Globally
import '../assets/common.css';

const components = {
    loadingContainer,
    loadingButton,
    overlay,
    appPanel,
    notificationPanel
}

Object.keys(components).forEach(name => {
    Vue.component(name, components[name]);
});

export default components;