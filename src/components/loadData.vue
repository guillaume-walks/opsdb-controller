<template>
  <div>
    <h1 class="title">LOAD DATA widget '{{ title }}'</h1>
    <div>
      <ul>
        <li v-for="(val, index) in obj" :key="val">{{index}}:: {{val}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "opsdbComponent",
  mounted() {
    console.log(this);
  },
  props: {
    title: String,
    obj: Object
  }
};
</script>

<style scoped>
* {
  font-family: "Courier New", Courier, monospace;
  font-weight: 600;
  text-align: center;
  list-style: none;
}
.title {
}
ul {
  font-weight: 300;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
