<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <div v-html="htmlcontent"></div>
    <button v-on:click="reverseMessage()" >Enjoy</button>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "CheckList",
  data() {
    return {
      message: "Welcome Bro",
      htmlcontent: "<div><h1>Hey Bro You are rich</h1></div>"
    };
  },
  methods: {
    reverseMessage: function() {
      debugger;
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>
