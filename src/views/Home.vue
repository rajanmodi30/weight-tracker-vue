<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    getToken() {
      // const messaging = firebase.messaging();
      // messaging.getToken({ vapidKey: "BKagOny0KF_2pCJQ3m....moL0ewzQ8rZu" });
    },
  },
};
</script>
