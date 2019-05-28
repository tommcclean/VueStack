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
    </div>
</template>

<script>
import "@/components/index.js";

export default {
    name: "vuestack"
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
</style>
