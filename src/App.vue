<template>
  <v-app>
    <v-app-bar density="compact">
      <v-app-bar-title>Weight Tracker</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn
        v-show="!isLoggedIn"
        class="mr-4 ml-5"
        color="primary"
        plain
        :to="{ name: 'Login' }"
      >
        <span>Login</span>
      </v-btn>
      <v-divider inset vertical></v-divider>

      <v-btn
        v-show="!isLoggedIn"
        class="mr-4 ml-5"
        color="primary"
        plain
        :to="{ name: 'Register' }"
      >
        <span>Register</span>
      </v-btn>
      <v-btn
        v-show="isLoggedIn"
        @click="logOut"
        class="mr-4 ml-5"
        color="primary"
        plain
        :to="{ name: 'Register' }"
      >
        <span>Log out</span>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",

  data: () => ({
    //
  }),
  computed: {
    ...mapGetters("auth", ["isLoggedIn"]),
  },
  methods: {
    ...mapActions("auth", ["logOut"]),
  },
};
</script>
