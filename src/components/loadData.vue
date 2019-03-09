<template>
  <div>
    <h1 class="title">LOAD DATA widget '{{ title }}'</h1>
    <div>
      <ul>
        <li v-for="(val, index) in obj" :key="val">{{index}}:: {{val}}</li>
      </ul>
    </div>
    <button @click="callApi">call api</button>
    <ul>
      <li v-for="res in results" :key="res.id">{{res.title}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "opsdbComponent",
  watch: {
    title(val) {
      console.log(val);
    }
  },
  data() {
    return {
      url: `https://jsonplaceholder.typicode.com/`,
      results: null
    };
  },
  computed: {
    _url() {
      return this.url + this.title;
    }
  },
  mounted() {
    // console.log(this);
  },
  props: {
    title: String,
    obj: Object
  },
  methods: {
    callApi() {
      console.log(this);
      axios
        .get(this._url)
        .then(response => {
          // handle success
          // console.log(response);
          this.results = response.data.slice(0, 10);
        })
        .catch(function(error) {
          // handle error
          // console.log(error);
        })
        .then(function() {
          // always executed
        });
    }
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
