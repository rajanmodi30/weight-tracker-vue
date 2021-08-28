<template>
  <v-card class="mx-auto my-12" max-width="374">
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Login To Weight Tracker</v-card-title>
    <form @submit.prevent="submitFrom">
      <v-card-text>
        <v-row align="center" class="mx-0">
          <div class="grey--text ms-4">
            Email
            <input type="text" class="form" v-model="email" />
          </div>
        </v-row>
        <br />
        <br />
        <v-row align="center" class="mx-0">
          <div class="grey--text ms-4">
            Password
            <input type="text" v-model="password" />
          </div>
        </v-row>

        <div></div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="deep-purple lighten-2" class="md-6" text type="submit">
          Login
        </v-btn>
      </v-card-actions>
    </form>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  data: () => {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    ...mapActions("auth", ["login"]),

    submitFrom() {
      console.log("submit form");
      this.login({
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
