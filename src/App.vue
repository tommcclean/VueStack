<template>
    <div id="wrapper">
        <h1>VueStack</h1>
        <p>VueStack is a mono repo of helpful VueJS components that you can pull into your project to save you time and code.</p>
        <hr>
        <section>
            <h2>Loading container</h2>
            <p>Use the loading container to show a spinner while your content is loading. Inject your content using the default slot.</p>
            <div class="left">
                <loading-container :is-loading="true"/>
            </div>
            <div class="right">
                <loading-container :is-loading="false">
                    <p>This element is loaded</p>
                </loading-container>
            </div>
        </section>

        <section>
            <h2>Overlay</h2>
            <p>Use an overlay to make text legible over a dark background or background image, or use it to cover the page while a component like a modal is displayed.</p>
            <div class="relative">
                <overlay/>
            </div>
        </section>

        <section>
            <h2>Loading button</h2>
            <p>Use the loading button to prevent a user from clicking a submitted form, and to show the user something is happening once clicked.</p>
            <div class="left">
                <loading-button :is-loading="true" text="This button is loading"/>
            </div>
            <div class="right">
                <loading-button :is-loading="false"/>
            </div>
        </section>

        <section>
            <h2>App Panel</h2>
            <p>Use the App Panel to configure settings or hold a navigation menu.</p>
            <div class="trigger-button" @click="showAppPanelLeft = !showAppPanelLeft">
                <span>Slide in from left</span>
            </div>
            <div class="trigger-button" @click="showAppPanelRight = !showAppPanelRight">
                <span>Slide in from right</span>
            </div>

            <app-panel :show="showAppPanelLeft" v-on:close="showAppPanelLeft = false">
                <div class="trigger-button" @click="showAppPanelLeft = false">
                    <span>Close app panel</span>
                </div>
            </app-panel>
            <app-panel :show="showAppPanelRight" enter-from="right" v-on:close="showAppPanelRight = false">
                <div class="trigger-button" @click="showAppPanelRight = false">
                    <span>Close app panel</span>
                </div>
            </app-panel>
        </section>

        <section>
            <h2>Notification Panel</h2>
            <p>Use the notification panel to give the user some dismissable information.</p>
            <div class="trigger-button" @click="showNotificationPanel = !showNotificationPanel">
                <span>Show notification panel</span>
            </div>

        
            <notification-panel :show="showNotificationPanel" v-on:close="showNotificationPanel = false">
                <div class="trigger-button" @click="showNotificationPanel = false">
                    <span>Close notification panel</span>
                </div>
            </notification-panel>
        </section>
    </div>
</template>

<script>
import "@/components/index.js";

export default {
    name: "vuestack",
    data() {
        return {
            showAppPanelLeft: false,
            showAppPanelRight: false,
            showNotificationPanel: false
        };
    }
};
</script>

<style scoped>
#wrapper {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

section {
    border-bottom: 1px solid black;
    background-color: whitesmoke;
    padding: 10px;
    padding-bottom: 20px;
}

section::after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
}

section .left {
    float: left;
    width: calc((100% - 44px) / 2);
    padding: 10px;
    border: 1px dashed gray;
}

section .right {
    float: right;
    width: calc((100% - 44px) / 2);
    padding: 10px;
    border: 1px dashed gray;
}

section .relative {
    position: relative;
    width: 90%;
    height: 200px;
    margin: 0 auto;
    background-color: red;
}

section .trigger-button {
    border: 1px solid black;
    cursor: pointer;
    display: inline-block;
    padding: 10px;
    margin: 10px;
}
</style>
