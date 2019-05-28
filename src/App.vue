<template>
  <div id="wrapper">
    <h1>VueStack</h1>
    <p>VueStack is a mono repo of helpful VueJS components that you can pull into your project to save you time and code.</p>
    <hr>
    <section>
      <h2>Loading container</h2>
      <div class="left">
        <loading-container :is-loading="true"/>
      </div>
      <div class="right">
        <loading-container :is-loading="false">
          <p>This element is loaded</p>
        </loading-container>
      </div>
    </section>
  </div>
</template>

<script>
import loadingContainer from "@/components/loading-container";

export default {
  name: "vuestack",
  components: {
    loadingContainer
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
  width: calc((100% - 4px) / 2);
  border: 1px dashed gray;
}

section .right {
  float: right;
  width: calc((100% - 4px) / 2);
  border: 1px dashed gray;
}
</style>
