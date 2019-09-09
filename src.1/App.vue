<template>
  <div id="app">
    <input
      v-model="message"
      type="text">
    <h2 class="message">{{ message }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Paquito',
    };
  },
};
</script>

<style>
#app {
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  color: blue;
}
</style>