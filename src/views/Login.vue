<template>
  <Form @submit="submitFrom" :validation-schema="schema">
    <Field name="email" type="email" />
    <ErrorMessage name="email" />

    <Field name="password" type="password" />
    <ErrorMessage name="password" />

    <button>Submit</button>
  </Form>
  <button @click="GetToken">get Token</button>
</template>

<script>
import { mapActions } from "vuex";
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { getMessaging, getToken } from "firebase/messaging";

export default {
  name: "Login",
  data: () => {
    const schema = yup.object({
      email: yup
        .string()
        .required()
        .email(),
      password: yup
        .string()
        .required()
        .min(8),
    });

    return {
      schema,
    };
  },
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  methods: {
    ...mapActions("auth", ["login"]),
    submitFrom(values) {
      console.log("submit form", values);
      this.login({
        email: values.email,
        password: values.password,
      });
    },
    GetToken() {
      const messaging = getMessaging();
      console.log('messaging',messaging);
      getToken(messaging, { vapidKey: "BNgEpaAncyQVxFgg6SqCB7Ze1FWUsNeTiJGxWCf-77cU2fLPHRbvImcW7l88EiZnUSZw9pMk46P8LgJpa23KhPQ" })
        .then((currentToken) => {
          if (currentToken) {
            // Send the token to your server and update the UI if necessary
            // ...
          } else {
            // Show permission request UI
            console.log(
              "No registration token available. Request permission to generate one."
            );
            // ...
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
          // ...
        });
    },
  },
};
</script>
