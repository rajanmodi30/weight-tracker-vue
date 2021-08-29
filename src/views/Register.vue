<template>
  <v-card class="mx-auto my-12" max-width="374">
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Register Here For Weight Tracker</v-card-title>
    <form @submit.prevent="submitFrom">
      <v-card-text>
        <v-row align="center" class="mx-0">
          <div class="grey--text ms-4">
            Name
            <input type="text" v-model="name" />
          </div>
        </v-row>
        <br />
        <br />
        <v-row align="center" class="mx-0">
          <div class="grey--text ms-4">
            Email
            <input type="email" class="form" v-model="email" />
          </div>
        </v-row>
        <br />
        <br />
        <v-row align="center" class="mx-0">
          <div class="grey--text ms-4">
            Password
            <input type="password" v-model="password" />
          </div> </v-row
        ><br />
        <br />
        <v-row align="center" class="mx-0">
          <div class="grey--text ms-4">
            Confirm Password
            <input type="text" v-model="confirm_password" />
          </div>
        </v-row>

        <div></div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="deep-purple lighten-2" class="md-6" text type="submit">
          Register
        </v-btn>
      </v-card-actions>
    </form>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Register",

  data: () => {
    return {
      name: null,
      email: null,
      confirm_password: null,
      password: null,
    };
  },
  methods: {
    ...mapActions("auth", ["register"]),

    submitFrom() {
      console.log("submit form");
      this.register({
        name: this.name,
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
